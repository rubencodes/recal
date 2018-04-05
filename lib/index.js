"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CalendarType = void 0;

var _react = _interopRequireDefault(require("react"));

var _add_years = _interopRequireDefault(require("date-fns/add_years"));

var _add_months = _interopRequireDefault(require("date-fns/add_months"));

var _add_weeks = _interopRequireDefault(require("date-fns/add_weeks"));

var _add_days = _interopRequireDefault(require("date-fns/add_days"));

var _format = _interopRequireDefault(require("date-fns/format"));

var _is_same_day = _interopRequireDefault(require("date-fns/is_same_day"));

var _is_within_range = _interopRequireDefault(require("date-fns/is_within_range"));

var _Calendar = _interopRequireDefault(require("./Calendar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var CalendarType = {
  DatePicker: 'DatePicker',
  DateRangePicker: 'DateRangePicker'
};
exports.CalendarType = CalendarType;

var CalendarController =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(CalendarController, _React$PureComponent);

  function CalendarController(props) {
    var _this;

    _classCallCheck(this, CalendarController);

    _this = _possibleConstructorReturn(this, (CalendarController.__proto__ || Object.getPrototypeOf(CalendarController)).call(this));
    var initialDate = props.date || new Date();
    var month = initialDate.getMonth() + 1;
    var year = initialDate.getFullYear();
    _this.state = {
      month: month,
      year: year
    };
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
    _this.onDateHovered = _this.onDateHovered.bind(_assertThisInitialized(_this));
    _this.onDateSelected = _this.onDateSelected.bind(_assertThisInitialized(_this));
    _this.isDateSelected = _this.isDateSelected.bind(_assertThisInitialized(_this));
    _this.isDateInRange = _this.isDateInRange.bind(_assertThisInitialized(_this));
    _this.isDateEnabled = _this.isDateEnabled.bind(_assertThisInitialized(_this));
    _this.isDateHighlighted = _this.isDateHighlighted.bind(_assertThisInitialized(_this));
    _this.onChangeMonth = _this.onChangeMonth.bind(_assertThisInitialized(_this));
    _this.onChangeYear = _this.onChangeYear.bind(_assertThisInitialized(_this));
    _this.createDateButtonRef = _this.createDateButtonRef.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CalendarController, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('keydown', this.handleKeyPress);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyPress);
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(event) {
      // Ignore key press if this component isn't focused.
      var componentHasFocus = this.calendar.contains(document.activeElement);
      if (!componentHasFocus) return; // Otherwise prevent default.

      event.preventDefault();
      var shiftKey = event.shiftKey,
          keyCode = event.keyCode;
      var enter = keyCode === 13;
      var pageUp = keyCode === 33;
      var pageDown = keyCode === 34;
      var leftArrow = keyCode === 37;
      var upArrow = keyCode === 38;
      var rightArrow = keyCode === 39;
      var downArrow = keyCode === 40;
      var isDateEnabled = this.props.isDateEnabled;
      var focused = this.state.focused;

      if (enter) {
        if (isDateEnabled(focused)) {
          this.onDateSelected(focused);
        }

        return;
      }

      if (shiftKey + pageUp) {
        var nextDate = (0, _add_years.default)(focused, -1);

        if (isDateEnabled(nextDate)) {
          this.onDateFocused(nextDate);
        }

        return;
      }

      if (shiftKey + pageDown) {
        var _nextDate = (0, _add_years.default)(focused, 1);

        if (isDateEnabled(_nextDate)) {
          this.onDateFocused(_nextDate);
        }

        return;
      }

      if (pageUp) {
        var _nextDate2 = (0, _add_months.default)(focused, -1);

        if (isDateEnabled(_nextDate2)) {
          this.onDateFocused(_nextDate2);
        }

        return;
      }

      if (pageDown) {
        var _nextDate3 = (0, _add_months.default)(focused, 1);

        if (isDateEnabled(_nextDate3)) {
          this.onDateFocused(_nextDate3);
        }

        return;
      }

      if (upArrow) {
        var _nextDate4 = (0, _add_weeks.default)(focused, -1);

        if (isDateEnabled(_nextDate4)) {
          this.onDateFocused(_nextDate4);
        }

        return;
      }

      if (downArrow) {
        var _nextDate5 = (0, _add_weeks.default)(focused, 1);

        if (isDateEnabled(_nextDate5)) {
          this.onDateFocused(_nextDate5);
        }

        return;
      }

      if (leftArrow) {
        var _nextDate6 = (0, _add_days.default)(focused, -1);

        if (isDateEnabled(_nextDate6)) {
          this.onDateFocused(_nextDate6);
        }

        return;
      }

      if (rightArrow) {
        var _nextDate7 = (0, _add_days.default)(focused, 1);

        if (isDateEnabled(_nextDate7)) {
          this.onDateFocused(_nextDate7);
        }

        return;
      }
    }
  }, {
    key: "onChangeYear",
    value: function onChangeYear(event) {
      event.preventDefault();
      this.setState({
        year: parseInt(event.target.value)
      });
    }
  }, {
    key: "onChangeMonth",
    value: function onChangeMonth(delta) {
      var _this2 = this;

      var nextMonth = this.state.month + delta;
      var nextYear = this.state.year;

      if (nextMonth < 1) {
        nextMonth = 12 + nextMonth;
        nextYear -= 1;
      }

      if (nextMonth > 12) {
        nextMonth = nextMonth - 12;
        nextYear += 1;
      }

      return function () {
        _this2.setState({
          month: nextMonth,
          year: nextYear
        });
      };
    }
  }, {
    key: "onDateSelected",
    value: function onDateSelected(date) {
      var _props = this.props,
          type = _props.type,
          onDateSelected = _props.onDateSelected,
          onStartDateSelected = _props.onStartDateSelected,
          onEndDateSelected = _props.onEndDateSelected;
      this.onDateFocused(date);

      if (type === CalendarType.DatePicker) {
        onDateSelected(date);
      } else if (type === CalendarType.DateRangePicker) {
        var noStartDate = !this.props.startDate;
        var allSelected = this.props.startDate && this.props.endDate;
        var dateIsPriorToStart = this.props.startDate && this.props.startDate > date;
        var needStartDate = noStartDate || allSelected || dateIsPriorToStart;

        if (needStartDate) {
          onStartDateSelected(date);
          onEndDateSelected(null);
        } else {
          onEndDateSelected(date);
        }
      }
    }
  }, {
    key: "onDateHovered",
    value: function onDateHovered(date) {
      var onDateHovered = this.props.onDateHovered;
      onDateHovered(date);
    }
  }, {
    key: "onDateFocused",
    value: function onDateFocused(date) {
      var _this3 = this;

      var _state = this.state,
          month = _state.month,
          year = _state.year;
      month = date.getMonth() + 1;
      year = date.getFullYear();
      this.setState({
        focused: date,
        month: month,
        year: year
      }, function () {
        _this3[(0, _format.default)(date, 'YYYYMMDD')].focus();
      });
    }
  }, {
    key: "isDateEnabled",
    value: function isDateEnabled(date) {
      var isDateEnabled = this.props.isDateEnabled;
      return isDateEnabled(date);
    }
  }, {
    key: "isDateHighlighted",
    value: function isDateHighlighted(date) {
      var isDateHighlighted = this.props.isDateHighlighted;
      return isDateHighlighted(date);
    }
  }, {
    key: "isDateSelected",
    value: function isDateSelected(date) {
      var selectedDays = this.props.type === CalendarType.DatePicker ? [this.props.date] : [this.props.startDate, this.props.endDate];
      return selectedDays.some(function (selected) {
        return selected ? (0, _is_same_day.default)(selected, date) : false;
      });
    }
  }, {
    key: "isDateInRange",
    value: function isDateInRange(date) {
      if (this.props.type === CalendarType.DatePicker) return false;
      var startDate = this.props.startDate;
      var endDate = this.props.endDate || (this.props.startDate != this.state.focused ? this.state.focused : this.props.hoveredDate);
      if (!startDate || !endDate || endDate < startDate) return false;
      return (0, _is_within_range.default)(date, startDate, endDate);
    }
  }, {
    key: "createDateButtonRef",
    value: function createDateButtonRef(date) {
      var _this4 = this;

      return function (ref) {
        _this4[(0, _format.default)(date, 'YYYYMMDD')] = ref;
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return _react.default.createElement(_Calendar.default, {
        calendarRef: function calendarRef(ref) {
          return _this5.calendar = ref;
        },
        createDateButtonRef: this.createDateButtonRef,
        rerender: {
          focused: this.state.focused,
          date: this.props.date,
          startDate: this.props.startDate,
          endDate: this.props.endDate,
          hoveredDate: this.props.hoveredDate
        },
        month: this.state.month,
        year: this.state.year,
        isDateSelected: this.isDateSelected,
        isDateInRange: this.isDateInRange,
        isDateHighlighted: this.isDateHighlighted,
        isDateEnabled: this.isDateEnabled,
        onDateSelected: this.onDateSelected,
        onDateHovered: this.onDateHovered,
        onChangeMonth: this.onChangeMonth,
        onChangeYear: this.onChangeYear,
        locale: this.props.locale,
        disabled: this.props.disabled
      });
    }
  }]);

  return CalendarController;
}(_react.default.PureComponent);

CalendarController.defaultProps = {
  type: CalendarType.DatePicker,
  locale: 'en-US',
  isDateHighlighted: function isDateHighlighted(date) {
    return false;
  },
  isDateEnabled: function isDateEnabled(date) {
    return true;
  },
  onDateSelected: function onDateSelected(date) {
    return console.log('Selected: ', date);
  },
  onDateHovered: function onDateHovered(date) {
    return console.log('Hovered: ', date);
  },
  disabled: false
};
var _default = CalendarController;
exports.default = _default;