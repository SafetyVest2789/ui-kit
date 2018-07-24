/* eslint-disable */

/* This file generates the `.mod.css extension file for the MC's base colors.
   See `exportPath` const to know where to access the generated file.
   Any decisions regarding colors should be made in the decision file.
   See `importPath` const to know where to access the decisions file. */

const fs = require('fs');
const path = require('path');
const css = require('css');
const startCase = require('lodash').startCase;
const flatMap = require('lodash').flatMap;
const sortBy = require('lodash').sortBy;
const importPath = 'materials/colors/decisions/base-colors.json';
const exportPath = '../materials/colors/base-colors.mod.css';
const file = fs.readFileSync(path.join(__dirname, '../', importPath), 'utf8');

// Prefix identification of variable
const variablePrefix = '--color';

const colors = [JSON.parse(file)];

const declarationsBody = flatMap(colors, colorGroup =>
  //   Transforms the colors object into base colors
  flatMap(Object.entries(colorGroup), ([colorName, variations]) =>
    flatMap(
      sortBy(
        Object.entries(variations),
        ([variationName]) =>
          variationName === 'default' ? -Infinity : variationName
      ),
      ([variationNumber, lightnessPercentage]) => {
        // defines the main colors variables
        const cssVariableBaseName = `${variablePrefix}-${colorName}`;

        if (variationNumber === 'default') {
          // First declares the base colors in the file
          return [
            {
              // Adds a comment to categorize base colors in groups
              type: 'comment',
              comment: ` ${startCase(colorName)}s `,
            },
            {
              type: 'declaration',
              property: cssVariableBaseName,
              value: variations.default,
            },
          ];
        } else {
          // Writes the variations of main colors below them
          return {
            type: 'declaration',
            property: `${cssVariableBaseName}-${variationNumber}`,
            value: `color-mod(var(${cssVariableBaseName}) lightness(${lightnessPercentage}))`,
          };
        }
      }
    )
  )
);

// This comment gets added in the top of the page
const commentDoNotModify = {
  type: 'comment',
  comment: ` THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
  This file is created by 'scripts/generate-base-color.js' script. The real
  colors's values should be updated in '${importPath}';
  Also, This file is transformed to JSON version in order to list the colors
  in the UIKit. Color groups are indicated by a comment preceeding the group
  of colors. `,
};

// This is necessary since its not possible to generate empty lines with CSS AST stringifier
const commentDisableStylelintCommentRule = {
  type: 'comment',
  comment: ` stylelint-disable comment-empty-line-before `,
};

// Comment to identify file
const commentTitle = {
  type: 'comment',
  comment: ' Base Colors ',
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