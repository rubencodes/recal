"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ChevronStyle = _interopRequireDefault(require("./Chevron.style.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Chevron = function Chevron(_ref) {
  var _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? "" : _ref$direction;
  return _react.default.createElement("span", {
    className: "Chevron ".concat(direction),
    style: _extends({}, _ChevronStyle.default.root, _ChevronStyle.default[direction] || {})
  });
};

var _default = Chevron;
exports.default = _default;