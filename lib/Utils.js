"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMonthTemplate = exports.getMonthHeaderTemplate = exports.daysInMonth = exports.monthsOfYear = exports.getClassName = void 0;

var _get_days_in_month = _interopRequireDefault(require("date-fns/get_days_in_month"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getClassName = function getClassName(props) {
  return Object.keys(props).filter(function (key) {
    return props[key];
  }).join(' ');
};

exports.getClassName = getClassName;

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

var getMonthHeaderTemplate = function getMonthHeaderTemplate() {
  var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en-US';
  window.days = window.days || _toConsumableArray(Array(7)).map(function (_, i) {
    var baseDate = new Date(Date.UTC(2017, 0, i + 2)); // just a Sunday

    var dayName = baseDate.toLocaleDateString(locale, {
      weekday: 'long'
    });
    return {
      dayName: dayName,
      style: {
        msGridColumn: i + 1,
        gridColumnStart: i + 1
      }
    };
  });
  return window.days;
};

exports.getMonthHeaderTemplate = getMonthHeaderTemplate;

var getMonthTemplate = function getMonthTemplate(month, year) {
  // Number of days in month.
  var numDaysInMonth = daysInMonth(month, year); // Days between Sunday and start of month.

  var offset = new Date(year, month - 1, 1).getDay() + 1; // Fill in array with days of month.

  var monthTemplate = _toConsumableArray(Array(numDaysInMonth)).map(function (_, i) {
    return {
      date: new Date(year, month - 1, i + 1),
      style: {
        msGridRow: Math.ceil((offset + i) / 7),
        msGridColumn: (offset - 1 + i) % 7 + 1,
        gridRowStart: Math.ceil((offset + i) / 7),
        gridColumnStart: (offset - 1 + i) % 7 + 1
      }
    };
  });

  return monthTemplate;
};

exports.getMonthTemplate = getMonthTemplate;