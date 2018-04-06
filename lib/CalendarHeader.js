"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Chevron = _interopRequireDefault(require("./Chevron"));

var _Utils = require("./Utils");

var _CalendarHeaderStyle = _interopRequireDefault(require("./CalendarHeader.style.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CalendarHeader = function CalendarHeader(_ref) {
  var month = _ref.month,
      year = _ref.year,
      onBack = _ref.onBack,
      onForward = _ref.onForward,
      onChangeYear = _ref.onChangeYear,
      locale = _ref.locale,
      disabled = _ref.disabled;
  return _react.default.createElement("div", {
    className: "CalendarHeader",
    style: _CalendarHeaderStyle.default.root
  }, _react.default.createElement("button", {
    className: "BackButton",
    style: _extends({}, _CalendarHeaderStyle.default.button, disabled ? _CalendarHeaderStyle.default.button_disabled : {}),
    title: "Previous Month",
    onClick: onBack,
    disabled: disabled || !onBack
  }, _react.default.createElement(_Chevron.default, {
    direction: "left"
  })), _react.default.createElement("h1", {
    className: "MonthDisplay",
    style: _CalendarHeaderStyle.default.h1,
    "aria-live": "assertive"
  }, (0, _Utils.monthsOfYear)(locale)[month - 1], _react.default.createElement("input", {
    style: _CalendarHeaderStyle.default.input,
    title: "Edit Year",
    type: "number",
    value: year,
    onChange: onChangeYear,
    disabled: disabled
  })), _react.default.createElement("button", {
    className: "NextButton",
    style: _extends({}, _CalendarHeaderStyle.default.button, disabled ? _CalendarHeaderStyle.default.button_disabled : {}),
    title: "Next Month",
    onClick: onForward,
    disabled: disabled || !onForward
  }, _react.default.createElement(_Chevron.default, {
    direction: "right"
  })));
};

var _default = CalendarHeader;
exports.default = _default;