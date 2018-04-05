import React from 'react';
import isSameDay from 'date-fns/is_same_day';
import isBefore from 'date-fns/is_before';

import Calendar, { CalendarType } from '../lib/index.jsx';

class DatePicker extends React.PureComponent {
	constructor() {
		super();
		
		this.state = {
			selectedDate: null
		};
		
		this.isDateEnabled = this.isDateEnabled.bind(this);
		this.onDateSelected = this.onDateSelected.bind(this);
	}
	
	isDateHighlighted(date) {
		const specialDays = [
			new Date(2018, 3, 20),
			new Date(2018, 4, 13),
			new Date(2018, 5, 21),
			new Date(2018, 6, 4)
		];
		
		return specialDays.some((special) => isSameDay(date, special));
	}
	isDateEnabled(date) {
		const now = new Date();
		const todayDay = now.getDate();
		const todayMonth = now.getMonth();
		const todayYear = now.getFullYear();
		const today = new Date(todayYear, todayMonth, todayDay);

		return !isBefore(date, today);
	}
	onDateSelected(date) {
		this.setState({
			selectedDate: date
		});
	}
	
	render() {
		const { selectedDate } = this.state;
		const locale = 'en-US';
		
		return (
			<div id="DatePickerExample">
				<b>Date Picker Example</b>
				<Calendar
					type={ CalendarType.DatePicker }
					date={ selectedDate }
					isDateHighlighted={ this.isDateHighlighted }
					isDateEnabled={ this.isDateEnabled }
					onDateSelected={ this.onDateSelected }
					onDateHovered={ this.onDateHovered }
					locale={ locale } />
			</div>
		);
	}
}

export default DatePicker;