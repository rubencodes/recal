import getDaysInMonth from 'date-fns/get_days_in_month';

export const getClassName = (props) => {
  return Object.keys(props).filter((key) => props[key]).join(' ');
};
export const monthsOfYear = (locale='en-US') => {
  window.months = window.months || [...Array(12)].map((_, i) => {
    let baseDate = new Date(Date.UTC(2017, i + 1, 1));

    return baseDate.toLocaleDateString(locale, { month: 'long' });
  });

  return window.months;
};
export const daysInMonth = (month, year) => {
  return getDaysInMonth(new Date(year, month - 1));
};
export const getMonthHeaderTemplate = (locale='en-US') => {
  window.days = window.days || [...Array(7)].map((_, i) => {
    const baseDate = new Date(Date.UTC(2017, 0, i + 2)); // just a Sunday
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