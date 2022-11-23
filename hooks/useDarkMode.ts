/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useReducer } from 'react';

function isDarkMode() {
  return (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
}

export default function useDarkMode(): { isDark: boolean; toggle: () => void } {
  if (typeof window === 'undefined') {
    return { isDark: false, toggle: () => {} };
  }
  // client-side only code
  function reducer(_: any, themeColor: 'light' | 'dark') {
    switch (themeColor) {
      case 'light':
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark');
        return 'light';
      case 'dark':
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
        return 'dark';
      default:
        localStorage.removeItem('theme');
        return 'dark';
    }
  }

  const [theme, dispatch] = useReducer(
    reducer,
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',
  );
  useEffect(() => {
    // initialization on reload
    if (isDarkMode()) {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
      dispatch('dark');
    } else {
      localStorage.theme = 'dark';
      document.documentElement.classList.remove('dark');
      dispatch('light');
    }
  }, []);

  function toggle() {
    dispatch(theme === 'dark' ? 'light' : 'dark');
  }

  return {
    isDark: theme === 'dark',
    toggle,
  };
}
