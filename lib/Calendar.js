"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _format = _interopRequireDefault(require("date-fns/format"));

var _is_today = _interopRequireDefault(require("date-fns/is_today"));

var _CalendarHeader = _interopRequireDefault(require("./CalendarHeader"));

var _CalendarDay = _interopRequireDefault(require("./CalendarDay"));

var _Utils = require("./Utils");

require("./Calendar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Calendar = function Calendar(props) {
  var month = props.month,
      year = props.year,
      isDateSelected = props.isDateSelected,
      isDateInRange = props.isDateInRange,
      isDateHighlighted = props.isDateHighlighted,
      isDateEnabled = props.isDateEnabled,
      onDateSelected = props.onDateSelected,
      onDateHovered = props.onDateHovered,
      onChangeMonth = props.onChangeMonth,
      onChangeYear = props.onChangeYear,
      calendarRef = props.calendarRef,
      createDateButtonRef = props.createDateButtonRef,
      disabled = props.disabled,
      locale = props.locale;
  var dayNames = (0, _Utils.daysOfWeek)(locale);

  var _getMonthTemplate = (0, _Utils.getMonthTemplate)(month, year),
      gridColumnStart = _getMonthTemplate.gridColumnStart,
      monthTemplate = _getMonthTemplate.monthTemplate;

  return _react.default.createElement("div", {
    className: "CalendarContainer"
  }, _react.default.createElement(_CalendarHeader.default, {
    month: month,
    year: year,
    onBack: onChangeMonth(-1),
    onForward: onChangeMonth(1),
    onChangeYear: onChangeYear,
    locale: locale,
    disabled: disabled
  }), _react.default.createElement("div", {
    className: "Calendar",
    ref: calendarRef
  }, _react.default.createElement("div", {
    className: "head"
  }, dayNames.map(function (dayName) {
    return _react.default.createElement("div", {
      key: dayName,
      className: "day-heading",
      role: "columnheader",
      "aria-label": dayName
    }, _react.default.createElement("abbr", null, dayName.slice(0, 3)));
  })), _react.default.createElement("div", {
    className: "body",
    role: "grid"
  }, monthTemplate.map(function (day, i) {
    var date = day ? new Date(year, month - 1, day) : null;
    var label = day ? (0, _format.default)(date, 'dddd, MMMM D, YYYY') : null;
    var isDayToday = day ? (0, _is_today.default)(date) : null;
    return _react.default.createElement(_CalendarDay.default, {
      key: date,
      date: date,
      dateButtonRef: createDateButtonRef(date),
      dateLabel: label,
      style: i === 0 ? {
        gridColumnStart: gridColumnStart
      } : {},
      isToday: isDayToday,
      isSelected: isDateSelected(date),
      isInRange: isDateInRange(date),
      isHighlighted: isDateHighlighted(date),
      isDisabled: disabled || !isDateEnabled(date),
      onSelect: onDateSelected,
      onHover: onDateHovered
    });
  }))));
};

var _default = Calendar;
exports.default = _default;