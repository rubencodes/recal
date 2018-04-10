import {
  highlight,

  darkGray,
  gray,

  blue,
  lightBlue,
  lighterBlue
} from './variables.style.js';
import {
  prefixedUserSelect,
  prefixedDisplay,
  prefixedTransition,
  prefixedTransform,
  prefixedBoxShadow,
	prefixedAlignItems,
	prefixedJustifyContent
} from './helpers.style.js';

export default {
  // .CalendarDay
  root: {
    ...prefixedUserSelect('none'),
    ...prefixedDisplay('flex'),
    ...prefixedTransition('backgroundColor 0.4s, transform 0.4s, box-shadow 0.4s'),
    ...prefixedBoxShadow('0 0 0 0 rgba(0, 0, 0, 0.2)'),
    ...prefixedAlignItems('center'),
    ...prefixedJustifyContent('flex-start'),

    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: '1.15',
    margin: 0,
    border: 'none',
    position: 'relative',
    padding: '4px 4px',
    backgroundColor: 'white',
    color: darkGray,
    cursor: 'pointer'
  },
  // .CalendarDay.isDisabled
  isDisabled: {
    cursor: 'default',
    opacity: '0.5'
  },
  // .CalendarDay:not(.isDisabled):hover
  isHovered: {
    ...prefixedTransform('scale(1.2)'),
    ...prefixedBoxShadow('0 0 3px 0 rgba(0, 0, 0, 0.2)'),

    zIndex: '100',
    backgroundColor: `${lighterBlue}`
  },
  // .CalendarDay:not(.isDisabled):focus
  isFocused: {
    zIndex: '101',
    backgroundColor: `${lighterBlue}`
  },
  // .CalendarDay.isToday:not(.isDisabled)
  isToday: {
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: gray
  },
  // .CalendarDay.isHighlighted:not(.isDisabled)
  isHighlighted: {
    backgroundColor: `${highlight}`
  },
  // .CalendarDay.isInRange:not(.isDisabled)
  isInRange: {
    backgroundColor: `${lightBlue}`,
    color: 'white'
  },
  // .CalendarDay.isSelected:not(.isDisabled)
  isSelected: {
    fontWeight: 'bold',
    backgroundColor: `${blue}`,
    color: 'white',
    zIndex: '100'
  }
}
