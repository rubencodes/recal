import getDaysInMonth from 'date-fns/get_days_in_month';

export const getClassName = (props) => {
  return Object.keys(props).filter((key) => props[key]).join(' ');
};
export const mapPropsToStyles = (props, styles) => {
  const mappedStyles = Object.keys(props).reduce((soFar, key) => {
    return props[key] ? {
      ...soFar,
      ...(styles[key] || {})
    } : soFar;
  }, {});

  return mappedStyles;
}
export const daysOfWeek = (locale='en-US') => {
  window.days = window.days || Array.from({ length: 7 }).map((_, i) => {
    const baseDate = new Date(Date.UTC(2017, 0, i + 2)); // just a Sunday

    return baseDate.toLocaleDateString(locale, { weekday: 'long' });
  });

  return window.days;
};
export const monthsOfYear = (locale='en-US') => {
  window.months = window.months || Array.from({ length: 12 }).map((_, i) => {
    let baseDate = new Date(Date.UTC(2017, i + 1, 1));

    return baseDate.toLocaleDateString(locale, { month: 'long' });
  });

  return window.months;
};
export const daysInMonth = (month, year) => {
  return getDaysInMonth(new Date(year, month - 1));
};
export const getMonthTemplate = (month, year) => {
  // Number of days in month.
  const numDaysInMonth = daysInMonth(month, year);
  // Days between Sunday and start of month.
  const gridColumnStart = (new Date(year, month - 1, 1)).getDay() + 1;
  
  // Fill in array with days of month.
  const monthTemplate = Array.from({ length: numDaysInMonth })
    .map((_, i) => new Date(year, month - 1, i + 1));
  
  return {
    gridColumnStart,
    monthTemplate
  };
};