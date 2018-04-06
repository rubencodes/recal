import React from 'react';

import Chevron from './Chevron';
import {
  monthsOfYear
} from './Utils';
import CalendarHeaderStyles from './CalendarHeader.style.js';

const CalendarHeader = ({ month, year, onBack, onForward, onChangeYear, locale, disabled }) => (
	<div className="CalendarHeader" style={ CalendarHeaderStyles.root }>
		<button
			className="BackButton"
			style={ { ...CalendarHeaderStyles.button, ...(disabled ? CalendarHeaderStyles.button_disabled : {}) } }
			title="Previous Month"
			onClick={ onBack }
			disabled={ disabled || !onBack }>
			<Chevron direction="left" />
		</button>
		<h1 className="MonthDisplay" style={ CalendarHeaderStyles.h1 } aria-live="assertive">
			{ monthsOfYear(locale)[month - 1] }
			<input
				style={ CalendarHeaderStyles.input }
				title="Edit Year"
				type="number"
				value={ year }
				onChange={ onChangeYear }
				disabled={ disabled } />
		</h1>
		<button
			className="NextButton"
			style={ { ...CalendarHeaderStyles.button, ...(disabled ? CalendarHeaderStyles.button_disabled : {}) } }
			title="Next Month"
			onClick={ onForward }
			disabled={ disabled || !onForward }>
			<Chevron direction="right" />
		</button>
	</div>
);

export default CalendarHeader;