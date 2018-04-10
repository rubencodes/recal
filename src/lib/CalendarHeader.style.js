import {
	lightGray
} from './variables.style.js';
import {
	prefixedUserSelect,
	prefixedDisplay,
	prefixedTransform,
	prefixedBoxShadow,
	prefixedGridTemplate,
	prefixedAlignItems,
	prefixedAlignSelf,
	prefixedJustifyContent
} from './helpers.style.js';

export default {
  root: {
		...prefixedUserSelect('none'),
		...prefixedDisplay('grid'),
		...prefixedGridTemplate('auto / 40px auto 40px'),
		...prefixedAlignItems('center'),

		margin: '0 auto',
		width: '100%',
		maxWidth: 300,
		color: 'black'
  },
  h1: {
		textAlign: 'center',
		fontSize: '2em',
		margin: '.67em 0'
  },
  input: {
		...prefixedTransform('translateX(10px)'),
		...prefixedDisplay('block'),
		
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
  },
  button: {
		...prefixedUserSelect('none'),
		...prefixedDisplay('flex'),
		...prefixedBoxShadow('none'),
		...prefixedAlignSelf('center'),
		...prefixedAlignItems('center'),
		...prefixedJustifyContent('center'),

		fontFamily: 'monospace',
		fontWeight: 'bold',
		fontSize: '100%',
		lineHeight: '1.15',
		backgroundColor: 'white',
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: lightGray,
		height: 40
  },
  button_disabled: {
		opacity: '0.5'
  }
};