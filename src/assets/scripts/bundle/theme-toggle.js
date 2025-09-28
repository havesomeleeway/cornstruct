const storageKey = 'theme-preference';
const themeColors = {
  dark: '{{ meta.themeLight }}',
  light: '{{ meta.themeDark }}'
};

const theme = {
  value: getColorPreference()
};

window.onload = () => {
  const themeToggle = document.querySelector('#theme-toggle');

  if (!themeToggle) {
    return;
  }

  reflectPreference();
  updateMetaThemeColor();

  themeToggle.addEventListener('click', () => {
    const newTheme = theme.value === 'light' ? 'dark' : 'light';
    onClick(newTheme);
  });

  updateToggleButton();
};

// sync with system changes
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({matches: isDark}) => {
    theme.value = isDark ? 'dark' : 'light';
    updateToggleButton();
    setPreference();
    updateMetaThemeColor();
  });

function onClick(themeValue) {
  theme.value = themeValue;
  updateToggleButton();
  setPreference();
  updateMetaThemeColor();
}

function updateToggleButton() {
  const themeToggle = document.querySelector('#theme-toggle');

  if (themeToggle) {
    if (theme.value === 'light') {
      themeToggle.setAttribute('aria-label', 'Switch to dark mode');
      themeToggle.style.color = 'var(--color-gray-800)'; // Light mode color
    } else {
      themeToggle.setAttribute('aria-label', 'Switch to light mode');
      themeToggle.style.color = 'var(--color-gray-100)'; // Dark mode color
    }
  }
}

function getColorPreference() {
  if (localStorage.getItem(storageKey)) {
    return localStorage.getItem(storageKey);
  } else {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
}

function setPreference() {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
  updateMetaThemeColor();
}

function reflectPreference() {
  document.firstElementChild.setAttribute('data-theme', theme.value);
}

function updateMetaThemeColor() {
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  const newColor =
    theme.value === 'dark' ? themeColors.dark : themeColors.light;
  metaThemeColor.setAttribute('content', newColor);
}

// set early so no page flashes / CSS is made aware
reflectPreference();
