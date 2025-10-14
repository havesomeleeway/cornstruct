/**
 * Custom element that displays dynamic work experience duration
 * Automatically calculates and updates the timespan from a start date to the current date
 * Usage: <work-experience start-date="2015-04-01"></work-experience>
 */
class WorkExperience extends HTMLElement {
  /**
   * Lifecycle callback when element is connected to the DOM
   * Calculates initial duration and schedules daily updates
   */
  connectedCallback() {
    const startDate = this.getAttribute('start-date') || '2015-04-01';
    const calculatedText = this.calculateWorkExperience(startDate);
    this.textContent = calculatedText;

    // Optional: Update every day at midnight
    this.scheduleNextUpdate(startDate);
  }

  /**
   * Calculate work experience duration from start date to today
   * @param {string} startDate - Start date in YYYY-MM-DD, YYYY-MM, or YYYY format
   * @returns {string} - Formatted duration string (e.g., "10 years, 6 months, and 13 days")
   */
  calculateWorkExperience(startDate) {
    const today = new Date();
    let start, end;

    if (startDate.match(/^\d{4}$/)) {
      start = new Date(parseInt(startDate), 0, 1);
      end = new Date(today.getFullYear(), 0, 1);
    } else if (startDate.match(/^\d{4}-\d{2}$/)) {
      const [year, month] = startDate.split('-');
      start = new Date(parseInt(year), parseInt(month) - 1, 1);
      end = new Date(today.getFullYear(), today.getMonth(), 1);
    } else if (startDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
      start = new Date(startDate);
      end = today;
    } else {
      start = new Date(startDate);
      end = today;
    }

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(end.getFullYear(), end.getMonth(), 0);
      days += lastMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const parts = [];
    if (years > 0) parts.push(`${years} year${years === 1 ? '' : 's'}`);
    if (months > 0) parts.push(`${months} month${months === 1 ? '' : 's'}`);
    if (startDate.match(/^\d{4}-\d{2}-\d{2}$/) && days > 0) {
      parts.push(`${days} day${days === 1 ? '' : 's'}`);
    }

    if (parts.length === 0) return '0 days';
    if (parts.length === 1) return parts[0];
    if (parts.length === 2) return `${parts[0]} and ${parts[1]}`;
    return `${parts.slice(0, -1).join(', ')}, and ${parts[parts.length - 1]}`;
  }

  /**
   * Schedule automatic update at midnight to keep duration current
   * @param {string} startDate - Start date to recalculate from
   */
  scheduleNextUpdate(startDate) {
    const now = new Date();
    const tomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    const msUntilMidnight = tomorrow - now;

    setTimeout(() => {
      this.textContent = this.calculateWorkExperience(startDate);
      this.scheduleNextUpdate(startDate);
    }, msUntilMidnight);
  }
}

customElements.define('work-experience', WorkExperience);
