"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMonthTemplate = exports.daysInMonth = exports.monthsOfYear = exports.daysOfWeek = exports.getClassName = void 0;

var _get_days_in_month = _interopRequireDefault(require("date-fns/get_days_in_month"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getClassName = function getClassName(props) {
  return Object.keys(props).filter(function (key) {
    return props[key];
  }).join(' ');
};

exports.getClassName = getClassName;

var daysOfWeek = function daysOfWeek() {
  var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en-US';
  window.days = window.days || Array.from({
    length: 7
  }).map(function (_, i) {
    var baseDate = new Date(Date.UTC(2017, 0, i + 2)); // just a Sunday

    return baseDate.toLocaleDateString(locale, {
      weekday: 'long'
    });
  });
  return window.days;
};

exports.daysOfWeek = daysOfWeek;

var monthsOfYear = function monthsOfYear() {
  var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en-US';
  window.months = window.months || Array.from({
    length: 12
  }).map(function (_, i) {
    var baseDate = new Date(Date.UTC(2017, i + 1, 1));
    return baseDate.toLocaleDateString(locale, {
      month: 'long'
    });
  });
  return window.months;
};

exports.monthsOfYear = monthsOfYear;

var daysInMonth = function daysInMonth(month, year) {
  return (0, _get_days_in_month.default)(new Date(year, month - 1));
};

exports.daysInMonth = daysInMonth;

var getMonthTemplate = function getMonthTemplate(month, year) {
  // Number of days in month.
  var numDaysInMonth = daysInMonth(month, year); // Days between Sunday and start of month.

  var gridColumnStart = new Date(year, month - 1, 1).getDay() + 1; // Fill in array with days of month.

  var monthTemplate = Array.from({
    length: numDaysInMonth
  }).map(function (_, i) {
    return i + 1;
  });
  return {
    gridColumnStart: gridColumnStart,
    monthTemplate: monthTemplate
  };
};

exports.getMonthTemplate = getMonthTemplate;