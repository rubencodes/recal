"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _variablesStyle = require("./variables.style.js");

var _helpersStyle = require("./helpers.style.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = {
  root: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: _variablesStyle.lightGray,
    width: 'calc(100% - 20px)',
    maxWidth: 320,
    margin: '0 auto',
    padding: 10
  },
  Calendar: {
    color: 'black'
  },
  CalendarHead: _extends({}, (0, _helpersStyle.prefixedDisplay)('grid'), (0, _helpersStyle.prefixedGridTemplate)('auto / repeat(7, 1fr)'), {
    marginBottom: 5
  }),
  CalendarHeadDayHeading: _extends({}, (0, _helpersStyle.prefixedUserSelect)('none'), {
    fontWeight: 'bold',
    fontSize: 'small',
    textAlign: 'center'
  }),
  CalendarBody: _extends({}, (0, _helpersStyle.prefixedDisplay)('grid'), (0, _helpersStyle.prefixedGridTemplate)('auto / repeat(7, 1fr)'), (0, _helpersStyle.prefixedGridGap)(1), {
    backgroundColor: _variablesStyle.lighterGray,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: _variablesStyle.lighterGray
  })
};
exports.default = _default;