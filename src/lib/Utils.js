import getDaysInMonth from 'date-fns/get_days_in_month';

// Constructs a className from a set of prop keys.
export const getClassName = (props) => {
  return Object.keys(props).filter((key) => props[key]).join(' ');
};

// Uses native JS dates to get the names of months of the year in a given locale.
export const monthsOfYear = (locale='en-US') => {
  // Cache result in window.months.
  window.months = window.months || [...Array(12)].map((_, i) => {
    // Get a date object set to the i-th month.
    const baseDate = new Date(Date.UTC(2017, i, 1));
    
    // Get full name of this month.
    return baseDate.toLocaleDateString(locale, { month: 'long' });
  });

  return window.months;
};

// Returns number of days in a given month.
export const daysInMonth = (month, year) => {
  return getDaysInMonth(new Date(year, month - 1));
};

// Returns an array of days of the week for a header (and Grid styles for IE compat).
export const getMonthHeaderTemplate = (locale='en-US') => {
  // Cache result in window.days.
  window.days = window.days || [...Array(7)].map((_, i) => {
    // Get a date object set to i+[random sunday offset]th day.
    const baseDate = new Date(Date.UTC(2017, 0, i + 2));
    
    // Get full name of this day.
    const dayName = baseDate.toLocaleDateString(locale, { weekday: 'long' });

    return {
      dayName,
      style: {
        msGridColumn: i + 1,
        gridColumnStart: i + 1
      }
    };
  });

  return window.days;
};

// Returns an array of days of the month (and Grid styles for IE compat).
export const getMonthTemplate = (month, year) => {
  // Number of days in month.
  const numDaysInMonth = daysInMonth(month, year);
  // Days between Sunday and start of month.
  const offset = (new Date(year, month - 1, 1)).getDay() + 1;
  
  // Fill in array with days of month.
  const monthTemplate = [...Array(numDaysInMonth)]
    .map((_, i) => ({
      date: new Date(year, month - 1, i + 1),
      style: {
        msGridRow: Math.ceil((offset + i) / 7),
        msGridColumn: (((offset - 1) + i) % 7) + 1,
        gridRowStart: Math.ceil((offset + i) / 7),
        gridColumnStart: (((offset - 1) + i) % 7) + 1
      }
    }));
  
  return monthTemplate;
};
