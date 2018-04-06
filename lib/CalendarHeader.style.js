"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _variablesStyle = require("./variables.style.js");

var _default = {
  root: {
    userSelect: "none",
    margin: "0 auto",
    width: "100%",
    maxWidth: "300px",
    color: "black",
    display: "grid",
    gridTemplateColumns: "40px auto 40px",
    alignItems: "center"
  },
  h1: {
    textAlign: "center",
    fontSize: "2em",
    margin: ".67em 0"
  },
  input: {
    display: "block",
    fontSize: "small",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: "1.15",
    height: "18px",
    width: "50px",
    margin: "-2px auto",
    transform: "translateX(10px)",
    border: "none",
    background: "transparent",
    fontFamily: "inherit"
  },
  button: {
    boxShadow: "none",
    fontFamily: "monospace",
    fontWeight: "bold",
    fontSize: "100%",
    lineHeight: "1.15",
    userSelect: "none",
    background: "white",
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: _variablesStyle.lightGray,
    // border: `1px solid ${lightGray}`,
    height: "40px",
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  button_disabled: {
    opacity: "0.5"
  }
};
exports.default = _default;