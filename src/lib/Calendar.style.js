import {
  lightGray,
  lighterGray
} from './variables.style.js';
import {
  prefixedUserSelect,
  prefixedDisplay,
  prefixedGridTemplate,
  prefixedGridGap
} from './helpers.style.js';

export default {
  root: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: lightGray,
    width: 'calc(100% - 20px)',
    maxWidth: 320,
    margin: '0 auto',
    padding: 10
  },
  Calendar: {
    color: 'black'
  },
  CalendarHead: {
    ...prefixedDisplay('grid'),
    ...prefixedGridTemplate('auto / repeat(7, 1fr)'),
    
    marginBottom: 5
  },
  CalendarHeadDayHeading: {
    ...prefixedUserSelect('none'),

    fontWeight: 'bold',
    fontSize: 'small',
    textAlign: 'center'
  },
  CalendarBody: {
    ...prefixedDisplay('grid'),
    ...prefixedGridTemplate('auto / repeat(7, 1fr)'),
    ...prefixedGridGap(1),

    backgroundColor: lighterGray,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: lighterGray
  }
};