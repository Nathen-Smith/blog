/* eslint-disable react-hooks/rules-of-hooks */
import { useReducer } from 'react';

export function isDarkMode() {
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
    isDarkMode() ? 'dark' : 'light',
  );
  function toggle() {
    dispatch(theme === 'dark' ? 'light' : 'dark');
  }

  return {
    isDark: theme === 'dark',
    toggle,
  };
}
