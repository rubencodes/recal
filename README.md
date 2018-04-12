<div align="center">
  <br /><br />
  <img alt="recal logo" src="https://github.com/rubencodes/recal/raw/master/docs/logo.png" height="150" />
  <br /><br />
</div>

# recal
![npm version](https://img.shields.io/npm/v/recal.svg)
![license](https://img.shields.io/github/license/rubencodes/recal.svg)
![bundle size](https://img.shields.io/bundlephobia/minzip/recal.svg)

>A minimal, accessible React/Preact calendar component using modern CSS, for modern browsers. It works with native Javascript dates, so there's no need to import any heavy dependencies like `moment`. For a set of functions for working with Javascript Dates, we recommend [`date-fns`](https://date-fns.org). For a more flexible, fully-featured set of calendar components, see [`react-dates`](https://github.com/airbnb/react-dates).

<br />
<img alt="example calendar" src="https://github.com/rubencodes/recal/raw/master/docs/example.png" height="370" />

[**See a Live Demo**](https://rubencodes.github.io/recal)

[**Try on CodePen**](https://codepen.io/rubencodes/pen/PRQzPo/)

## Installation
Using recal is simple. Just install the npm package:

```bash
npm i -S recal
```

Or, import recal and its stylesheet via CDN:

```html
<link rel="stylesheet" type="text/css" href="https://unpkg.com/recal/lib/index.css" />
<script src="https://unpkg.com/recal"></script>
```

## Usage

If you're using recal from npm, be sure to import the necessary modules into the file you wish to use it in.

```javascript
// You can use React or Preact here—just make sure you have the proper aliasing.
import React from 'react';

// Calendar components.
import { DatePicker, DateRangePicker } from 'recal';

// Stylesheet for calendar.
import 'recal/lib/index.css';
```

### Date Picker

To create a single date picker, use the `DatePicker` component as follows:

```javascript
class MyDatePicker extends React.Component {
  state = {};

  onDateSelected = (selectedDate) => {
    this.setState({
      selectedDate
    });
  }

  render() {
    return (
      <DatePicker
        date={ this.state.selectedDate }
        onDateSelected={ this.onDateSelected } />
    );
  }
}
```

### Date Range Picker

To create a date range picker, use the `DateRangePicker` component as follows:

```javascript
class MyDateRangePicker extends React.Component {
  state = {};

  onStartDateSelected = (startDate) => {
    this.setState({
      startDate
    });
  }
  onEndDateSelected = (endDate) => {
    this.setState({
      endDate
    });
  }

  render() {
    return (
      <DateRangePicker
        startDate={ this.state.startDate }
        endDate={ this.state.endDate }
        onStartDateSelected={ this.onStartDateSelected }
        onEndDateSelected={ this.onEndDateSelected } />
    );
  }
}
```

### Options

Both calendars have some required and some optional props.

```javascript
// Used by DatePicker
selectedDate: PropTypes.instanceOf(Date),
onDateSelected: PropTypes.func,

// Used by DateRangePicker
startDate: PropTypes.instanceOf(Date),
endDate: PropTypes.instanceOf(Date),
onStartDateSelected: PropTypes.func,
onEndDateSelected: PropTypes.func,

// Used by either (optional)
onDateHovered: PropTypes.func,
onDateFocused: PropTypes.func,
isDateHighlighted: PropTypes.func,
isDateEnabled: PropTypes.func,
locale: PropTypes.string,
disabled: PropTypes.bool
```

## Localization

Use the `locale` string prop on the calendar components to localize the month and days of the week into other languages *(e.g. "en-US", "es-MX", etc.)*.

## Accessibility

This set of calendars are optimized for screen readers as well as for keyboard-based navigation. The following shortcuts are available when the calendar is focused:

| Key               | Direction | Time    |
| ------------------| ----------| --------|
| Left Arrow        | Back      | 1 day   |
| Right Arrow       | Forward   | 1 day   |
| Up Arrow          | Back      | 1 week  |
| Down Arrow        | Forward   | 1 week  |
| Page Up           | Back      | 1 month |
| Page Down         | Forward   | 1 month |
| Shift + Page Up   | Back      | 1 year  |
| Shift + Page Down | Forward   | 1 year  |
