"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helpersStyle = require("./helpers.style.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = {
  root: _extends({}, (0, _helpersStyle.prefixedDisplay)('inline-block'), {
    width: '0.45em',
    height: '0.45em',
    borderStyle: 'solid',
    borderWidth: '0.25em 0.25em 0 0',
    position: 'relative',
    verticalAlign: 'top'
  }),
  right: _extends({}, (0, _helpersStyle.prefixedTransform)('rotate(45deg)'), {
    left: 0,
    top: '0.15em'
  }),
  bottom: _extends({}, (0, _helpersStyle.prefixedTransform)('rotate(135deg)'), {
    left: '0.15em',
    top: 0
  }),
  left: _extends({}, (0, _helpersStyle.prefixedTransform)('rotate(-135deg)'), {
    left: '0.25em',
    top: '0.15em'
  }),
  top: _extends({}, (0, _helpersStyle.prefixedTransform)('rotate(-45deg)'), {
    left: '0.15em',
    top: '0.15em'
  })
};
exports.default = _default;