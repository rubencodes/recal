"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Utils = require("./Utils");

var _CalendarDayStyle = _interopRequireDefault(require("./CalendarDay.style.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

var CalendarDay = function CalendarDay(_ref) {
  var date = _ref.date,
      dateButtonRef = _ref.dateButtonRef,
      dateLabel = _ref.dateLabel,
      style = _ref.style,
      onSelect = _ref.onSelect,
      onHover = _ref.onHover,
      props = _objectWithoutProperties(_ref, ["date", "dateButtonRef", "dateLabel", "style", "onSelect", "onHover"]);

  return _react.default.createElement("button", {
    ref: dateButtonRef,
    role: "gridcell",
    title: dateLabel,
    "aria-label": dateLabel,
    "aria-selected": props.isSelected ? 'true' : 'false',
    tabIndex: props.isSelected ? '0' : '-1',
    className: "CalendarDay ".concat((0, _Utils.getClassName)(props)),
    style: _extends({}, style, _CalendarDayStyle.default.root, (0, _Utils.mapPropsToStyles)({
      isDisabled: props.isDisabled,
      isToday: props.isToday,
      isHovered: props.isHovered,
      isFocused: props.isFocused,
      isHighlighted: props.isHighlighted,
      isInRange: props.isInRange,
      isSelected: props.isSelected
    }, _CalendarDayStyle.default)),
    onClick: !props.isDisabled ? function () {
      return onSelect(date);
    } : undefined,
    onMouseEnter: !props.isDisabled ? function () {
      return onHover(date);
    } : undefined,
    onMouseLeave: !props.isDisabled ? function () {
      return onHover(null);
    } : undefined
  }, date.getDate());
};

var _default = CalendarDay;
exports.default = _default;