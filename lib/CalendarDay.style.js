"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _variablesStyle = require("./variables.style.js");

var _helpersStyle = require("./helpers.style.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = {
  // .CalendarDay
  root: _extends({}, (0, _helpersStyle.prefixedUserSelect)('none'), (0, _helpersStyle.prefixedDisplay)('flex'), (0, _helpersStyle.prefixedTransition)('backgroundColor 0.4s, transform 0.4s, box-shadow 0.4s'), (0, _helpersStyle.prefixedBoxShadow)('0 0 0 0 rgba(0, 0, 0, 0.2)'), (0, _helpersStyle.prefixedAlignItems)('center'), (0, _helpersStyle.prefixedJustifyContent)('flex-start'), {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: '1.15',
    margin: 0,
    border: 'none',
    position: 'relative',
    padding: '4px 4px',
    backgroundColor: 'white',
    color: _variablesStyle.darkGray,
    cursor: 'pointer'
  }),
  // .CalendarDay.isDisabled
  isDisabled: {
    cursor: 'default',
    opacity: '0.5'
  },
  // .CalendarDay:not(.isDisabled):hover
  isHovered: _extends({}, (0, _helpersStyle.prefixedTransform)('scale(1.2)'), (0, _helpersStyle.prefixedBoxShadow)('0 0 3px 0 rgba(0, 0, 0, 0.2)'), {
    zIndex: '100',
    backgroundColor: "".concat(_variablesStyle.lighterBlue)
  }),
  // .CalendarDay:not(.isDisabled):focus
  isFocused: {
    zIndex: '101',
    backgroundColor: "".concat(_variablesStyle.lighterBlue)
  },
  // .CalendarDay.isToday:not(.isDisabled)
  isToday: {
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: _variablesStyle.gray
  },
  // .CalendarDay.isHighlighted:not(.isDisabled)
  isHighlighted: {
    backgroundColor: "".concat(_variablesStyle.highlight)
  },
  // .CalendarDay.isInRange:not(.isDisabled)
  isInRange: {
    backgroundColor: "".concat(_variablesStyle.lightBlue),
    color: 'white'
  },
  // .CalendarDay.isSelected:not(.isDisabled)
  isSelected: {
    fontWeight: 'bold',
    backgroundColor: "".concat(_variablesStyle.blue),
    color: 'white',
    zIndex: '100'
  }
};
exports.default = _default;