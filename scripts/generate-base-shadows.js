/* eslint-disable */

/* This file generates the `.mod.css extension file for the MC's base shadows.
   See `exportPath` const to know where to access the generated file.
   Any decisions regarding shadows should be made in the decision file.
   See `importPath` const to know where to access the decisions file. */

const fs = require('fs');
const path = require('path');
const css = require('css');
const startCase = require('lodash').startCase;
const flatMap = require('lodash').flatMap;
const sortBy = require('lodash').sortBy;
const importPath = 'materials/shadows/decisions/base-shadows.json';
const exportPath = '../materials/shadows/base-shadows.mod.css';
const file = fs.readFileSync(path.join(__dirname, '../', importPath), 'utf8');

// Prefix identification of variable
const variablePrefix = '--shadow';

const shadows = [JSON.parse(file)];

const declarationsBody = flatMap(shadows, shadowGroup =>
  flatMap(Object.entries(shadowGroup), ([groupNumber, values]) =>
    flatMap(Object.entries(values), ([order, value]) => ({
      type: 'declaration',
      property: `${variablePrefix}-${groupNumber}-${order}`,
      value: `${value}`,
    }))
  )
);

// This comment gets added in the top of the page
const commentDoNotModify = {
  type: 'comment',
  comment: ` THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
  This file is created by 'scripts/generate-base-shadows.js' script. The real
  shadows's values should be updated in '${importPath}';
  Also, This file is transformed to JSON version in order to list the shadows
  in the UIKit. `,
};

// This is necessary since its not possible to generate empty lines with CSS AST stringifier
const commentDisableStylelintCommentRule = {
  type: 'comment',
  comment: ` stylelint-disable comment-empty-line-before `,
};

// Comment to identify file
const commentTitle = {
  type: 'comment',
  comment: ' Base Shadows ',
  position: {
    start: {
      line: 10,
    },
  },
};

// Defines the CSS AST to be stringified
const AST = {
  type: 'stylesheet',
  stylesheet: {
    rules: [
      commentDisableStylelintCommentRule,
      commentDoNotModify,
      commentTitle,
      {
        type: 'rule',
        selectors: [':root'],
        declarations: declarationsBody,
      },
    ],
    parsingErrors: [],
  },
};

// Generates the file
fs.writeFileSync(path.join(__dirname, exportPath), `${css.stringify(AST)}\n`);