import {
  lightGray,
  lighterGray
} from './variables.style.js';

export default {
  root: {
    border: `1px solid ${lightGray}`,
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
    background: `${lighterGray}`,
    border: `1px solid ${lighterGray}`
  }
};