/**
 * Calculate work experience duration from start date to today
 * @param {string} startDate - Start date in YYYY-MM-DD, YYYY-MM, or YYYY format
 * @returns {string} - Formatted duration string (e.g., "9 years, 5 months, and 28 days")
 */
export function calculateWorkExperience(startDate = '2015-04-01') {
  const today = new Date();
  let start, end;

  // Parse the start date based on format
  if (startDate.match(/^\d{4}$/)) {
    // YYYY format - use January 1st of that year
    start = new Date(parseInt(startDate), 0, 1);
    end = new Date(today.getFullYear(), 0, 1); // January 1st of current year
  } else if (startDate.match(/^\d{4}-\d{2}$/)) {
    // YYYY-MM format - use 1st of that month
    const [year, month] = startDate.split('-');
    start = new Date(parseInt(year), parseInt(month) - 1, 1);
    end = new Date(today.getFullYear(), today.getMonth(), 1); // 1st of current month
  } else if (startDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
    // YYYY-MM-DD format - use exact date
    start = new Date(startDate);
    end = today;
  } else {
    // Fallback to exact date parsing
    start = new Date(startDate);
    end = today;
  }

  // Calculate the difference
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  // Adjust for negative days
  if (days < 0) {
    months--;
    // Get the last day of the previous month
    const lastMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += lastMonth.getDate();
  }

  // Adjust for negative months
  if (months < 0) {
    years--;
    months += 12;
  }

  // Format the output
  const parts = [];

  if (years > 0) {
    parts.push(`${years} year${years === 1 ? '' : 's'}`);
  }

  if (months > 0) {
    parts.push(`${months} month${months === 1 ? '' : 's'}`);
  }

  // Only include days for YYYY-MM-DD format
  if (startDate.match(/^\d{4}-\d{2}-\d{2}$/) && days > 0) {
    parts.push(`${days} day${days === 1 ? '' : 's'}`);
  }

  // Join with commas and "and" for the last item
  if (parts.length === 0) {
    return '0 days';
  } else if (parts.length === 1) {
    return parts[0];
  } else if (parts.length === 2) {
    return `${parts[0]} and ${parts[1]}`;
  } else {
    return `${parts.slice(0, -1).join(', ')}, and ${parts[parts.length - 1]}`;
  }
}
