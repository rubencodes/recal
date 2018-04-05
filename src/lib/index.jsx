import React from 'react';
import addYears from 'date-fns/add_years';
import addMonths from 'date-fns/add_months';
import addWeeks from 'date-fns/add_weeks';
import addDays from 'date-fns/add_days';
import format from 'date-fns/format';
import isSameDay from 'date-fns/is_same_day';
import isWithinRange from 'date-fns/is_within_range';

import Calendar from './Calendar';

export const CalendarType = {
	DatePicker: 'DatePicker',
	DateRangePicker: 'DateRangePicker'
};

class CalendarController extends React.PureComponent {
	constructor(props) {
		super();
		
		const initialDate = props.date || (new Date());
		const month = initialDate.getMonth() + 1;
		const year = initialDate.getFullYear();
		this.state = { month, year };
		
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.onDateHovered = this.onDateHovered.bind(this);
		this.onDateSelected = this.onDateSelected.bind(this);
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

		if(enter) {
			if(isDateEnabled(focused)) {
				this.onDateSelected(focused);
			}
			return;
		}
		if(shiftKey + pageUp) {
			const nextDate = addYears(focused, -1);
			if(isDateEnabled(nextDate)) {
				this.onDateFocused(nextDate);
			}
			return;
		}
		if(shiftKey + pageDown) {
			const nextDate = addYears(focused, 1);
			if(isDateEnabled(nextDate)) {
				this.onDateFocused(nextDate);
			}
			return;
		}
		if(pageUp) {
			const nextDate = addMonths(focused, -1);
			if(isDateEnabled(nextDate)) {
				this.onDateFocused(nextDate);
			}
			return;
		}
		if(pageDown) {
			const nextDate = addMonths(focused, 1);
			if(isDateEnabled(nextDate)) {
				this.onDateFocused(nextDate);
			}
			return;
		}
		if(upArrow) {
			const nextDate = addWeeks(focused, -1);
			if(isDateEnabled(nextDate)) {
				this.onDateFocused(nextDate);
			}
			return;
		}
		if(downArrow) {
			const nextDate = addWeeks(focused, 1);
			if(isDateEnabled(nextDate)) {
				this.onDateFocused(nextDate);
			}
			return;
		}
		if(leftArrow) {
			const nextDate = addDays(focused, -1);
			if(isDateEnabled(nextDate)) {
				this.onDateFocused(nextDate);
			}
			return;
		}
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
		
		this.setState({
			year: parseInt(event.target.value)
		});
	}
	onChangeMonth(delta) {
		let nextMonth = this.state.month + delta;
		let nextYear = this.state.year;
		
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
		
		this.onDateFocused(date);
		if(type === CalendarType.DatePicker) {
			onDateSelected(date);
		}
		else if(type === CalendarType.DateRangePicker) {
			const noStartDate = !this.props.startDate;
			const allSelected = this.props.startDate && this.props.endDate;
			const dateIsPriorToStart = this.props.startDate && this.props.startDate > date;
			const needStartDate = noStartDate || allSelected || dateIsPriorToStart;
			if(needStartDate) {
				onStartDateSelected(date);
				onEndDateSelected(null);
			}
			else {
				onEndDateSelected(date);
			}
		}
	}
	onDateHovered(date) {
		const { onDateHovered } = this.props;
		
		onDateHovered(date);
	}
	onDateFocused(date) {
		let { month, year } = this.state;
		month = date.getMonth() + 1;
		year = date.getFullYear();
		
		this.setState({ focused: date, month, year }, () => {
			this[format(date, 'YYYYMMDD')].focus();
		});
	}
	
	isDateEnabled(date) {
		const { isDateEnabled } = this.props;
		
		return isDateEnabled(date);
	}
	isDateHighlighted(date) {
		const { isDateHighlighted } = this.props;
		
		return isDateHighlighted(date);
	}
	isDateSelected(date) {
		const selectedDays = this.props.type === CalendarType.DatePicker
					? [ this.props.date ]
					: [ this.props.startDate, this.props.endDate ];
		
		return selectedDays.some((selected) => {
			return selected ? isSameDay(selected, date) : false;
		});
	}
	isDateInRange(date) {
		if(this.props.type === CalendarType.DatePicker) return false;
		
		const startDate = this.props.startDate;
		const endDate = this.props.endDate || (this.props.startDate != this.state.focused ? this.state.focused : this.props.hoveredDate);
		if(!startDate || !endDate || endDate < startDate) return false;

		return isWithinRange(date, startDate, endDate);
	}

	createDateButtonRef(date) {
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
					date: this.props.date,
					startDate: this.props.startDate,
					endDate: this.props.endDate,
					hoveredDate: this.props.hoveredDate
				} }
				month={ this.state.month }
				year={ this.state.year }

				isDateSelected={ this.isDateSelected }
				isDateInRange={ this.isDateInRange }
				isDateHighlighted={ this.isDateHighlighted }
				isDateEnabled={ this.isDateEnabled }

				onDateSelected={ this.onDateSelected }
				onDateHovered={ this.onDateHovered }
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
	onDateSelected: (date) => console.log('Selected: ', date),
	onDateHovered: (date) => console.log('Hovered: ', date),
	disabled: false
};

export default CalendarController;