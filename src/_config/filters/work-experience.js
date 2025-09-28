/**
 * Calculate work experience duration from start date to today
 * @param {string} startDate - Start date in YYYY-MM-DD format
 * @returns {string} - Formatted duration string (e.g., "9 years, 5 months, and 28 days")
 */
export function calculateWorkExperience(startDate = '2015-04-01') {
  const start = new Date(startDate);
  const today = new Date();

  // Calculate the difference
  let years = today.getFullYear() - start.getFullYear();
  let months = today.getMonth() - start.getMonth();
  let days = today.getDate() - start.getDate();

  // Adjust for negative days
  if (days < 0) {
    months--;
    // Get the last day of the previous month
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
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

  if (days > 0) {
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
