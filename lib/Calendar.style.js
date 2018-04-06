"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _variablesStyle = require("./variables.style.js");

var _default = {
  root: {
    border: "1px solid ".concat(_variablesStyle.lightGray),
    width: "calc(100% - 20px)",
    maxWidth: "320px",
    margin: "0 auto",
    padding: "10px"
  },
  Calendar: {
    color: "black"
  },
  CalendarHead: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)"
  },
  CalendarHeadDayHeading: {
    userSelect: "none",
    fontWeight: "bold",
    fontSize: "small",
    textAlign: "center",
    marginBottom: "5px"
  },
  CalendarBody: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gridGap: "1px",
    background: "".concat(_variablesStyle.lighterGray),
    border: "1px solid ".concat(_variablesStyle.lighterGray)
  }
};
exports.default = _default;