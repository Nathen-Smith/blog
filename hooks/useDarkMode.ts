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
  // stub for hydration mismatch
  if (typeof window === 'undefined') {
    return { isDark: false, toggle: () => {} };
  }
  // client-side only code
  function reducer(_: any, themeColor: 'light' | 'dark') {
    switch (themeColor) {
      case 'light':
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark');
        document
          .querySelector('meta[name="theme-color"]')
          ?.setAttribute('content', 'white');
        return 'light';
      case 'dark':
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
        document
          .querySelector('meta[name="theme-color"]')
          ?.setAttribute('content', 'rgb(24 24 27)');
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
