"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMonthTemplate = exports.daysInMonth = exports.monthsOfYear = exports.daysOfWeek = exports.mapPropsToStyles = exports.getClassName = void 0;

var _get_days_in_month = _interopRequireDefault(require("date-fns/get_days_in_month"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var getClassName = function getClassName(props) {
  return Object.keys(props).filter(function (key) {
    return props[key];
  }).join(' ');
};

exports.getClassName = getClassName;

var mapPropsToStyles = function mapPropsToStyles(props, styles) {
  var mappedStyles = Object.keys(props).reduce(function (soFar, key) {
    return props[key] ? _extends({}, soFar, styles[key] || {}) : soFar;
  }, {});
  return mappedStyles;
};

exports.mapPropsToStyles = mapPropsToStyles;

var daysOfWeek = function daysOfWeek() {
  var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en-US';
  window.days = window.days || _toConsumableArray(Array(7)).map(function (_, i) {
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
  window.months = window.months || _toConsumableArray(Array(12)).map(function (_, i) {
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

  var monthTemplate = _toConsumableArray(Array(numDaysInMonth10)).map(function (_, i) {
    return new Date(year, month - 1, i + 1);
  });

  return {
    gridColumnStart: gridColumnStart,
    monthTemplate: monthTemplate
  };
};

exports.getMonthTemplate = getMonthTemplate;