import React, { useReducer, createContext, useMemo, useEffect } from 'react';

export const ContactContext: any = createContext(null);

const initialState = {
  isDark: false,
};

export function isDarkMode() {
  return (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
}

const reducer = (_: any, action: any) => {
  switch (action.type) {
    case 'DARK':
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute('content', 'rgb(24 24 27)');
      return {
        isDark: true,
      };
    case 'LIGHT':
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute('content', 'white');
      return {
        isDark: false,
      };
    default:
      localStorage.removeItem('theme');
      throw new Error();
  }
};

export function ContactContextProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: isDarkMode() ? 'DARK' : 'LIGHT' });
  }, []);

  const x = useMemo(() => [state, dispatch], [state]);
  return (
    <ContactContext.Provider value={x}>{children}</ContactContext.Provider>
  );
}
