import React from 'react';

import {
  monthsOfYear
} from './Utils';

const CalendarHeader = ({ month, year='', onBack, onForward, onChangeYear, locale, disabled }) => (
	<div className="CalendarHeader">
		<button
			className="BackButton"
			title="Previous Month"
			onClick={ onBack }
			disabled={ disabled || !onBack }>
			&#10094;
		</button>
		<h1 className="MonthDisplay" aria-live="assertive">
			{ monthsOfYear(locale)[month - 1] }
			<input
				title="Edit Year"
				type="number"
				value={ year }
				onChange={ onChangeYear }
				disabled={ disabled } />
		</h1>
		<button
			className="NextButton"
			title="Next Month"
			onClick={ onForward }
			disabled={ disabled || !onForward }>
			&#10095;
		</button>
	</div>
);

export default CalendarHeader;