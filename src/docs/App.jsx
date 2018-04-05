import React from 'react';

import DatePicker from './DatePicker';
import DateRangePicker from './DateRangePicker';

import './App.css';

export default () => (
	<div id="App">
		<header id="AppHeader">
			<h1>recal</h1>
			<p>A minimal, accessible React calendar component using modern CSS.</p>
		</header>
		<DatePicker />
		<DateRangePicker />
	</div>
);