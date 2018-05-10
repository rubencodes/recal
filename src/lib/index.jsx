import React from 'react';
import addYears from 'date-fns/add_years';
import addMonths from 'date-fns/add_months';
import addWeeks from 'date-fns/add_weeks';
import addDays from 'date-fns/add_days';
import format from 'date-fns/format';
import isSameDay from 'date-fns/is_same_day';
import isBefore from 'date-fns/is_before';
import isWithinRange from 'date-fns/is_within_range';

import Calendar from './Calendar';
import './index.css';

const CalendarType = {
	DatePicker: 'DatePicker',
	DateRangePicker: 'DateRangePicker'
};

class CalendarController extends React.PureComponent {
	constructor(props) {
		super();
		
		// Init to current month/year or provided date.
		const initialDate = props.date || (new Date());
		const month = initialDate.getMonth() + 1;
		const year = initialDate.getFullYear();
		this.state = { month, year };
		
		// Bind all functions to this.
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.onDateHovered = this.onDateHovered.bind(this);
		this.onDateSelected = this.onDateSelected.bind(this);
		this.onDateFocused = this.onDateFocused.bind(this);
		this.isDateHovered = this.isDateHovered.bind(this);
		this.isDateFocused = this.isDateFocused.bind(this);
		this.isDateSelected = this.isDateSelected.bind(this);
		this.isDateInRange = this.isDateInRange.bind(this);
		this.isDateEnabled = this.isDateEnabled.bind(this);
		this.isDateHighlighted = this.isDateHighlighted.bind(this);
		this.onChangeMonth = this.onChangeMonth.bind(this);
		this.onChangeYear = this.onChangeYear.bind(this);
		this.createDateButtonRef = this.createDateButtonRef.bind(this);
	}

	componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
	}
	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyPress);
	}

	handleKeyPress(event) {
		// Ignore key press if this component isn't focused.
		const componentHasFocus = this.calendar.contains(document.activeElement);
		if(!componentHasFocus) return;
		
		// Otherwise prevent default.
		event.preventDefault();
		
		const {
			shiftKey,
			keyCode,
		} = event;
		const enter = keyCode === 13;
		const pageUp = keyCode === 33;
		const pageDown = keyCode === 34;
		const leftArrow = keyCode === 37;
		const upArrow = keyCode === 38;
		const rightArrow = keyCode === 39;
		const downArrow = keyCode === 40;
		
		const { isDateEnabled } = this.props;
		let { focused } = this.state;

		// Enter key selects a day.
		if(enter) {
			if(isDateEnabled(focused)) {
				this.onDateSelected(focused);
			}
			return;
		}
		// Shift key + pageUp moves backward 1yr.
		if(shiftKey && pageUp) {
			const nextDate = addYears(focused, -1);
			if(isDateEnabled(nextDate)) {
				this.onDateFocused(nextDate);
			}
			return;
		}
		// Shift key + pageDown moves forward 1yr.
		if(shiftKey && pageDown) {
			const nextDate = addYears(focused, 1);
			if(isDateEnabled(nextDate)) {
				this.onDateFocused(nextDate);
			}
			return;
		}
		// pageUp moves backward 1mo.
		if(pageUp) {
			const nextDate = addMonths(focused, -1);
			if(isDateEnabled(nextDate)) {
				this.onDateFocused(nextDate);
			}
			return;
		}
		// pageDown moves forward 1mo.
		if(pageDown) {
			const nextDate = addMonths(focused, 1);
			if(isDateEnabled(nextDate)) {
				this.onDateFocused(nextDate);
			}
			return;
		}
		// Up Arrow moves backward 1wk.
		if(upArrow) {
			const nextDate = addWeeks(focused, -1);
			if(isDateEnabled(nextDate)) {
				this.onDateFocused(nextDate);
			}
			return;
		}
		// Down Arrow moves forward 1wk.
		if(downArrow) {
			const nextDate = addWeeks(focused, 1);
			if(isDateEnabled(nextDate)) {
				this.onDateFocused(nextDate);
			}
			return;
		}
		// Left Arrow moves backward 1day.
		if(leftArrow) {
			const nextDate = addDays(focused, -1);
			if(isDateEnabled(nextDate)) {
				this.onDateFocused(nextDate);
			}
			return;
		}
		// Right Arrow moves forward 1wk.
		if(rightArrow) {
			const nextDate = addDays(focused, 1);
			if(isDateEnabled(nextDate)) {
				this.onDateFocused(nextDate);
			}
			return;
		}
	}
	
	onChangeYear(event) {
		event.preventDefault();

		// Set year to value as Integer (or fall back to undefined if NaN)
		this.setState({
			year: parseInt(event.target.value) || undefined
		});
	}
	onChangeMonth(delta) {
		let { month, year=0 } = this.state;
		let nextMonth = month + delta;
		let nextYear = year;
		
		// Change current month by the given delta.
		// But bound month selection between 1 & 12.
		if(nextMonth < 1) {
			nextMonth = 12 + nextMonth;
			nextYear -= 1;
		}
		if(nextMonth > 12) {
			nextMonth = nextMonth - 12;
			nextYear += 1;
		}
		
		return () => {
			this.setState({
				month: nextMonth,
				year: nextYear
			});
		};
	}
	onDateSelected(date) {
		const {
			type,
			onDateSelected,
			onStartDateSelected,
			onEndDateSelected
		} = this.props;
		
		// DatePicker -> one date selected.
		if(type === CalendarType.DatePicker) {
			if(onDateSelected) onDateSelected(date);
		}
		// DateRangePicker -> either first or second date selected.
		else if(type === CalendarType.DateRangePicker) {
			const noStartDate = !this.props.startDate;
			const allSelected = this.props.startDate && this.props.endDate;
			const dateIsPriorToStart = this.props.startDate && this.props.startDate > date;
			const needStartDate = noStartDate || allSelected || dateIsPriorToStart;
			// No start date, make this the start date.
			if(needStartDate) {
				if(onStartDateSelected) onStartDateSelected(date);
				if(onEndDateSelected) onEndDateSelected(null);
			}
			// Has start date, make this the end date.
			else {
				if(onEndDateSelected) onEndDateSelected(date);
			}
		}
	}
	onDateHovered(date) {
		const { onDateHovered } = this.props;
		
		// Update date hovered in state.
		this.setState({ hovered: date }, () => {
			// If we have a prop hover handler, run it.
			if(onDateHovered) onDateHovered(date);
		});
	}
	onDateFocused(date) {
		const { onDateFocused } = this.props;
		const month = date.getMonth() + 1;
		const year = date.getFullYear();
		
		// Update date focused in state.
		this.setState({ focused: date, month, year }, () => {
			// Focus the DOM element only if it wasn't focused by the user.
			const dayDOM = this[format(date, 'YYYYMMDD')];
			if(document.activeElement !== dayDOM) {
				dayDOM.focus();
			}

			// If we have a prop focus handler, run it.
			if(onDateFocused) onDateFocused(date);
		});
	}
	
	isDateEnabled(date) {
		// Check with prop function whether date is enabled.
		const { isDateEnabled } = this.props;
		
		return isDateEnabled(date);
	}
	isDateHighlighted(date) {
		// Check with prop function whether date is highlighted.
		const { isDateHighlighted } = this.props;
		
		return isDateHighlighted(date);
	}
	isDateFocused(date) {
		// Is this date currently focused?
		return isSameDay(date, this.state.focused);
	}
	isDateHovered(date) {
		// Is this date currently hovered?
		return isSameDay(date, this.state.hovered);
	}
	isDateSelected(date) {
		// DatePicker/DateRangePicker have different dates.
		const selectedDays = this.props.type === CalendarType.DatePicker
					? [ this.props.date ]
					: [ this.props.startDate, this.props.endDate ];
		
		// Is this date selected?
		return selectedDays.some((selected) => {
			return selected ? isSameDay(selected, date) : false;
		});
	}
	isDateInRange(date) {
		// Only DateRangePicker can have a range.
		if(this.props.type === CalendarType.DatePicker) return false;
		
		// We can only have a range if there's a start date and either and endDate or a hovered/focusedDate.
		const { startDate: startRange, endDate } = this.props;
		const { focused, hovered } = this.state;
		const endRange = endDate || (startRange && focused && !isSameDay(startRange, focused) ? focused : hovered);
		if(!startRange || !endRange || isBefore(endRange, startRange)) return false;

		// Check if date is within the range of start/end.
		return isWithinRange(date, startRange, endRange);
	}

	createDateButtonRef(date) {
		// Generates a function ref to a button representing a date.
		return (ref) => {
			this[format(date, 'YYYYMMDD')] = ref;
		};
	}
	
	render() {
		return (
			<Calendar
				calendarRef={ (ref) => this.calendar = ref }
				createDateButtonRef={ this.createDateButtonRef }
				rerender={ {
					focused: this.state.focused,
					hovered: this.state.hovered,
					date: this.props.date,
					startDate: this.props.startDate,
					endDate: this.props.endDate
				} }
				month={ this.state.month }
				year={ this.state.year }

				isDateHovered={ this.isDateHovered }
				isDateFocused={ this.isDateFocused }
				isDateSelected={ this.isDateSelected }
				isDateInRange={ this.isDateInRange }
				isDateHighlighted={ this.isDateHighlighted }
				isDateEnabled={ this.isDateEnabled }

				onDateSelected={ this.onDateSelected }
				onDateHovered={ this.onDateHovered }
				onDateFocused={ this.onDateFocused }
				onChangeMonth={ this.onChangeMonth }
				onChangeYear={ this.onChangeYear }

				locale={ this.props.locale }
				disabled={ this.props.disabled } />
		);
	}
}
CalendarController.defaultProps = {
	type: CalendarType.DatePicker,
	locale: 'en-US',
	isDateHighlighted: (date) => false,
	isDateEnabled: (date) => true,
	disabled: false
};

export const DatePicker = (props) => <CalendarController type={ CalendarType.DatePicker } { ...props } />;
export const DateRangePicker = (props) => <CalendarController type={ CalendarType.DateRangePicker } { ...props } />;
