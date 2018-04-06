import React from 'react';

import {
	getClassName,
	mapPropsToStyles
} from './Utils';

import CalendarDayStyles from './CalendarDay.style.js';

const CalendarDay = ({ date, dateButtonRef, dateLabel, style, onSelect, onHover, ...props }) => (
	<button
		ref={ dateButtonRef }
		role="gridcell"
		title={ dateLabel }
		aria-label={ dateLabel }
		aria-selected={ props.isSelected ? 'true' : 'false' }
		tabIndex={ props.isSelected ? '0' : '-1' }
		className={ `CalendarDay ${getClassName(props)}` }
		style={ {
			...style,
			...CalendarDayStyles.root,
			...mapPropsToStyles({
				isDisabled: props.isDisabled,
				isToday: props.isToday,
				isHovered: props.isHovered,
				isFocused: props.isFocused,
				isHighlighted: props.isHighlighted,
				isInRange: props.isInRange,
				isSelected: props.isSelected
			}, CalendarDayStyles)
		} }
		onClick={ !props.isDisabled ? (() => onSelect(date)) : undefined }
		onMouseEnter={ !props.isDisabled ? (() => onHover(date)) : undefined }
		onMouseLeave={ !props.isDisabled ? (() => onHover(null)) : undefined }>
		{ date.getDate() }
	</button>
);

export default CalendarDay;