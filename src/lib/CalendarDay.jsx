import React from 'react';

import {
	getClassName
} from './Utils';

const CalendarDay = ({ date, dateButtonRef, dateLabel, style, onSelect, onHover, onFocus, ...props }) => (
	<button
		ref={ dateButtonRef }
		role="gridcell"
		title={ dateLabel }
		aria-label={ dateLabel }
		aria-selected={ props.isSelected ? 'true' : 'false' }
		tabIndex={ props.isSelected ? '0' : '-1' }
		className={ `CalendarDay ${getClassName(props)}` }
		style={ style }
		onClick={ !props.isDisabled ? (() => onSelect(date)) : undefined }
		onMouseEnter={ !props.isDisabled ? (() => onHover(date)) : undefined }
		onMouseLeave={ !props.isDisabled ? (() => onHover(null)) : undefined }
		onFocus={ !props.isDisabled ? () => onFocus(date) : undefined }>
		{ date.getDate() }
	</button>
);

export default CalendarDay;