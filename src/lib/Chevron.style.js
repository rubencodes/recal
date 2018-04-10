import {
  prefixedDisplay,
  prefixedTransform
} from './helpers.style.js';

export default {
  root: {
    ...prefixedDisplay('inline-block'),

    width: '0.45em',
    height: '0.45em',
    borderStyle: 'solid',
    borderWidth: '0.25em 0.25em 0 0',
    position: 'relative',
    verticalAlign: 'top'
  },
  right: {
    ...prefixedTransform('rotate(45deg)'),

    left: 0,
    top: '0.15em'
  },
  bottom: {
    ...prefixedTransform('rotate(135deg)'),

    left: '0.15em',
    top: 0
  },
  left: {
    ...prefixedTransform('rotate(-135deg)'),

    left: '0.25em',
    top: '0.15em'
  },
  top: {
    ...prefixedTransform('rotate(-45deg)'),
    
    left: '0.15em',
    top: '0.15em'
  }
};