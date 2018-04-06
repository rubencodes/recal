import {
  highlight,

  darkGray,
  gray,

  blue,
  lightBlue,
  lighterBlue
} from './variables.style.js';

export default {
  // .CalendarDay
  root: {
    fontFamily: "inherit",
    fontSize: "100%",
    lineHeight: "1.15",
    margin: "0",
    border: "none",
    userSelect: "none",
    position: "relative",
    padding: "4px 4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.2)",
    transition: "background 0.4s, transform 0.4s, box-shadow 0.4s",
    background: "white",
    color: "#666",
    cursor: "pointer"
  },
  // .CalendarDay.isDisabled
  isDisabled: {
    cursor: "default",
    opacity: "0.5"
  },
  // .CalendarDay:not(.isDisabled):hover
  isHovered: {
    transform: "scale(1.2)",
    boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.2)",
    zIndex: "100",
    background: `${lighterBlue}`
  },
  // .CalendarDay:not(.isDisabled):focus
  isFocused: {
    zIndex: "101",
    background: `${lighterBlue}`
  },
  // .CalendarDay.isToday:not(.isDisabled)
  isToday: {
    border: `1px dotted ${gray}`
  },
  // .CalendarDay.isHighlighted:not(.isDisabled)
  isHighlighted: {
    background: `${highlight}`,
    color: `${darkGray}`
  },
  // .CalendarDay.isInRange:not(.isDisabled)
  isInRange: {
    background: `${lightBlue}`,
    color: "white"
  },
  // .CalendarDay.isSelected:not(.isDisabled)
  isSelected: {
    fontWeight: "bold",
    background: `${blue}`,
    color: "white",
    zIndex: "100"
  }
}
