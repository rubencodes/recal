import React from 'react';
import format from 'date-fns/format';
import isToday from 'date-fns/is_today';

import CalendarHeader from './CalendarHeader';
import CalendarDay from './CalendarDay';
import {
  daysOfWeek,
  getMonthTemplate
} from './Utils';

import './Calendar.css';

const Calendar = (props) => {
	const {
		month,
		year,

		isDateSelected,
		isDateInRange,
		isDateHighlighted,
		isDateEnabled,

		onDateSelected,
		onDateHovered,
		onChangeMonth,
		onChangeYear,

		calendarRef,
		createDateButtonRef,
		disabled,
		locale
	} = props

	const dayNames = daysOfWeek(locale);
	const {
		gridColumnStart,
		monthTemplate
	} = getMonthTemplate(month, year);

	return (
		<div className="CalendarContainer">
			<CalendarHeader
				month={ month }
				year={ year }
				onBack={ onChangeMonth(-1) }
				onForward={ onChangeMonth(1) }
				onChangeYear={ onChangeYear }
				locale={ locale }
				disabled={ disabled } />
			<div className="Calendar" ref={ calendarRef }>
				<div className="head">
					{ dayNames.map((dayName) => (
						<div key={ dayName } className="day-heading" role="columnheader" aria-label={ dayName }>
							<abbr>{ dayName.slice(0, 3) }</abbr>
						</div>
					)) }
				</div>
				<div className="body" role="grid">
					{ monthTemplate.map((day, i) => {
						const date = day ? new Date(year, month - 1, day) : null;
						const label = day ? format(date, 'dddd, MMMM D, YYYY') : null;
						const isDayToday = day ? isToday(date) : null;
						
						return (
							<CalendarDay
								key={ date }
								date={ date }
								dateButtonRef={ createDateButtonRef(date) }
								dateLabel={ label }
								style={ i === 0 ? { gridColumnStart } : {} }
								isToday={ isDayToday }
								isSelected={ isDateSelected(date) }
								isInRange={ isDateInRange(date) }
								isHighlighted={ isDateHighlighted(date) }
								isDisabled={ disabled || !isDateEnabled(date) }
								onSelect={ onDateSelected }
								onHover={ onDateHovered } />
						);
					}) }
				</div>
			</div>
		</div>
	);
};

export default Calendar;