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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Calendar = function Calendar(props) {
  var month = props.month,
      year = props.year,
      isDateHovered = props.isDateHovered,
      isDateFocused = props.isDateFocused,
      isDateSelected = props.isDateSelected,
      isDateInRange = props.isDateInRange,
      isDateHighlighted = props.isDateHighlighted,
      isDateEnabled = props.isDateEnabled,
      onDateHovered = props.onDateHovered,
      onDateSelected = props.onDateSelected,
      onChangeMonth = props.onChangeMonth,
      onChangeYear = props.onChangeYear,
      calendarRef = props.calendarRef,
      createDateButtonRef = props.createDateButtonRef,
      disabled = props.disabled,
      locale = props.locale;
  var headerTemplate = (0, _Utils.getMonthHeaderTemplate)(locale);
  var monthTemplate = (0, _Utils.getMonthTemplate)(month, year);
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
  }, headerTemplate.map(function (_ref, i) {
    var dayName = _ref.dayName,
        style = _ref.style;
    return _react.default.createElement("div", {
      key: dayName,
      className: "dayHeading",
      style: style,
      role: "columnheader",
      "aria-label": dayName
    }, _react.default.createElement("abbr", null, dayName.slice(0, 3)));
  })), _react.default.createElement("div", {
    className: "body",
    role: "grid"
  }, monthTemplate.map(function (_ref2, i) {
    var date = _ref2.date,
        style = _ref2.style;
    return _react.default.createElement(_CalendarDay.default, {
      key: date,
      date: date,
      dateButtonRef: createDateButtonRef(date),
      dateLabel: (0, _format.default)(date, 'dddd, MMMM D, YYYY'),
      style: style,
      isToday: (0, _is_today.default)(date),
      isHovered: isDateHovered(date),
      isFocused: isDateFocused(date),
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