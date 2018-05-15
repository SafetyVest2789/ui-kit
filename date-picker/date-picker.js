import React from 'react';
import PropTypes from 'prop-types';
import 'flatpickr/dist/themes/airbnb.css';
import Flatpickr from 'flatpickr';
import isTouchDevice from 'is-touch-device';
import { German } from 'flatpickr/dist/l10n/de';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { injectIntl } from 'react-intl';
import moment from 'moment';
import { parseDateTime } from '@commercetools-local/utils/datetime';
import Constraints from '../materials/constraints';
import { DatePickerBody } from './date-picker-body';
import './date-picker-ct-theme.mod.css';
import styles from './date-picker.mod.css';
import messages from './messages';

const getNumberOfFormattedDateChars = (timeScale, locale) => {
  // moment gives us access to its underlying formats for individual locales
  // http://momentjs.com/docs/#/i18n/instance-locale/
  // this allows us to count the number of chars that will be displayed in the
  // formatted date and adjust the input element accordingly
  // Using this technique we can ensure that at least one value is displayed
  switch (timeScale) {
    case 'time':
      return moment()
        .locale(locale)
        .localeData()._longDateFormat.LT.length;
    case 'datetime':
      return (
        moment()
          .locale(locale)
          .localeData()._longDateFormat.L.length +
        moment()
          .locale(locale)
          .localeData()._longDateFormat.LT.length
      );
    case 'date':
      return moment()
        .locale(locale)
        .localeData()._longDateFormat.L.length;
    default:
      return 0;
  }
};

export const createFormatter = (timeScale, locale) => value => {
  switch (timeScale) {
    case 'time':
      return moment(value, 'HH:mm:ss.SSS')
        .locale(locale)
        .format('LT');
    case 'datetime':
      return moment(value)
        .locale(locale)
        .format('L LT');
    case 'date':
      return moment(value)
        .locale(locale)
        .format('L');
    default:
      return value;
  }
};

export class DatePicker extends React.PureComponent {
  static displayName = 'DatePicker';

  static propTypes = {
    shouldInitializeOnMount: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isInvalid: PropTypes.bool,
    locale: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(['range', 'multiple', 'single']),
    onChange: PropTypes.func.isRequired,
    onClose: PropTypes.func,
    placeholder: PropTypes.string,
    horizontalConstraint: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'scale']),
    timeScale: PropTypes.oneOf(['date', 'time', 'datetime']),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),

    // HoC
    intl: PropTypes.shape({
      formatMessage: PropTypes.func.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    shouldInitializeOnMount: false,
    isDisabled: false,
    isInvalid: false,
    mode: 'single',
    timeScale: 'date',
    horizontalConstraint: 'scale',
  };

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    this.formatter = createFormatter(this.props.timeScale, this.props.locale);
    this.numberOfFormattedValueChars = getNumberOfFormattedDateChars(
      this.props.timeScale,
      this.props.locale
    );
    this.options = {
      defaultDate: this.props.value,
      enableTime:
        this.props.timeScale === 'time' || this.props.timeScale === 'datetime',
      // flatpickr falls back onto native datetime-inputs on touch-devices
      // these need their values in a standard-format and will format it themselves
      // based on the browsers-locale => using the formatter, will break the fields
      formatDate: isTouchDevice() ? undefined : this.formatter,
      // Gets the corresponding locale. For English we must set it as null.
      // TODO make this asynchronous when more languages available
      locale: this.props.locale === 'de' ? German : null,
      mode: this.props.mode,
      noCalendar: this.props.timeScale === 'time',
      onChange: this.handleChange,
      time_24hr: this.props.locale === 'de',
      wrap: true,
    };
  }

  // initializing on hove is not feasible for touch-devices, so we init-right away
  // flatpickr does not do its expensive initialization on mobile, so this is safe
  state = {
    initialize: this.props.shouldInitializeOnMount || isTouchDevice(),
  };

  componentDidMount() {
    if (this.shouldInitializeFlatpickr(this.state)) {
      this.initDatepicker();
    }
  }

  shouldInitializeFlatpickr = state => !this.flatpickr && state.initialize;

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    if (this.flatpickr && this.props.value !== nextProps.value) {
      this.flatpickr.setDate(nextProps.value, false);
    } else if (this.shouldInitializeFlatpickr(nextState)) {
      this.initDatepicker();
    }
  }

  componentWillUnmount() {
    if (this.flatpickr) {
      this.flatpickr.destroy();
    }
  }

  handleClearPicker = () => {
    if (!this.flatpickr) return;
    this.flatpickr.clear();
    this.flatpickr.jumpToDate();
    this.props.onChange();
  };

  handleChange = selectedDates => {
    switch (this.props.mode) {
      case 'single': {
        const selectedDate =
          selectedDates.length === 0 ? undefined : selectedDates[0];
        this.props.onChange(
          selectedDate && parseDateTime(this.props.timeScale, selectedDate)
        );
        break;
      }
      case 'range':
      case 'multiple':
        this.props.onChange(
          selectedDates.map(
            selectedDate =>
              selectedDate && parseDateTime(this.props.timeScale, selectedDate)
          )
        );
        break;
      default:
        throw new Error(
          `ui-kit/date-picker: the specified mode '${
            this.props.mode
          }' is not supported.`
        );
    }
  };

  handleMouseOver = () => {
    this.setState(prevState => ({ ...prevState, initialize: true }));
  };

  initDatepicker = () => {
    if (!this.props.isDisabled) {
      const options = {
        onClose: () => {
          if (this.pickerElem) {
            this.pickerElem.blur();
            // NOTE: we need to pass the `value` to enable validations
            // when the picker closes.
            if (this.props.onClose) this.props.onClose(this.props.value);
          }
        },
        ...this.options,
      };

      this.flatpickr = new Flatpickr(this.pickerElem, options);
    }
  };

  getRef = ref => {
    this.pickerElem = ref;
  };

  /**
   * @param  {String} selectedDate This can be `date`, `datetime`, or `time`
   * @return {String} the formatted `selectedDate` based on `timeScale`
   */
  getFormattedValue = selectedDate => {
    // `selectedDate` is expected to be an array
    // when managing `range` and `multiple` modes
    if (this.props.mode === 'multiple')
      return selectedDate.map(v => this.formatter(v)).join(', ');
    if (this.props.mode === 'range')
      return selectedDate
        .map(v => this.formatter(v))
        .join(` ${this.props.intl.formatMessage(messages.labelRange)} `);

    return this.formatter(selectedDate);
  };

  render() {
    return (
      <Constraints.Horizontal constraint={this.props.horizontalConstraint}>
        <div
          className={styles.container}
          onMouseOver={this.handleMouseOver}
          ref={this.getRef}
        >
          <DatePickerBody
            formattedValue={
              this.props.value && this.getFormattedValue(this.props.value)
            }
            isDisabled={this.props.isDisabled}
            isInvalid={this.props.isInvalid}
            onClearPicker={this.handleClearPicker}
            placeholder={this.props.placeholder}
            horizontalConstraint={this.props.horizontalConstraint}
            timeScale={this.props.timeScale}
            numberOfFormattedValueChars={this.numberOfFormattedValueChars}
          />
        </div>
      </Constraints.Horizontal>
    );
  }
}

const mapStateToProps = state => ({
  // covers the case when the locale contains the region (i.e. "en-US")
  locale: state.globalAppState.locale.substring(0, 2),
});

export default compose(injectIntl, connect(mapStateToProps))(DatePicker);
