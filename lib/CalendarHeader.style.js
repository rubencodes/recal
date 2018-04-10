"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _variablesStyle = require("./variables.style.js");

var _helpersStyle = require("./helpers.style.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = {
  root: _extends({}, (0, _helpersStyle.prefixedUserSelect)('none'), (0, _helpersStyle.prefixedDisplay)('grid'), (0, _helpersStyle.prefixedGridTemplate)('auto / 40px auto 40px'), (0, _helpersStyle.prefixedAlignItems)('center'), {
    margin: '0 auto',
    width: '100%',
    maxWidth: 300,
    color: 'black'
  }),
  h1: {
    textAlign: 'center',
    fontSize: '2em',
    margin: '.67em 0'
  },
  input: _extends({}, (0, _helpersStyle.prefixedTransform)('translateX(10px)'), (0, _helpersStyle.prefixedDisplay)('block'), {
    fontSize: 'small',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: '1.15',
    height: 18,
    width: 50,
    margin: '-2px auto',
    border: 'none',
    backgroundColor: 'transparent',
    fontFamily: 'inherit'
  }),
  button: _extends({}, (0, _helpersStyle.prefixedUserSelect)('none'), (0, _helpersStyle.prefixedDisplay)('flex'), (0, _helpersStyle.prefixedBoxShadow)('none'), (0, _helpersStyle.prefixedAlignSelf)('center'), (0, _helpersStyle.prefixedAlignItems)('center'), (0, _helpersStyle.prefixedJustifyContent)('center'), {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: '100%',
    lineHeight: '1.15',
    backgroundColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: _variablesStyle.lightGray,
    height: 40
  }),
  button_disabled: {
    opacity: '0.5'
  }
};
exports.default = _default;