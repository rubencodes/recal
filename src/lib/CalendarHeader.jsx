import React from 'react';

import Chevron from './Chevron';
import {
  monthsOfYear
} from './Utils';

import './CalendarHeader.css';

const CalendarHeader = ({ month, year, onBack, onForward, onChangeYear, locale, disabled }) => (
	<div className="CalendarHeader">
		<button title="Previous Month" onClick={ onBack } disabled={ disabled || !onBack }>
			<Chevron direction="left" />
		</button>
		<h1 aria-live="assertive">
			{ monthsOfYear(locale)[month - 1] }
			<input
				title="Edit Year"
				type="number"
				value={ year }
				onChange={ onChangeYear }
				disabled={ disabled } />
		</h1>
		<button title="Next Month" onClick={ onForward } disabled={ disabled || !onForward }>
			<Chevron direction="right" />
		</button>
	</div>
);

export default CalendarHeader;