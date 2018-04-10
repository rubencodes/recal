"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chevron = function Chevron(_ref) {
  var _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? "" : _ref$direction;
  return _react.default.createElement("span", {
    className: "Chevron ".concat(direction)
  });
};

var _default = Chevron;
exports.default = _default;