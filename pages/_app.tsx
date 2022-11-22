import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import isDarkMode from '../utils/isDarkMode';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // initialization on reload
    if (isDarkMode()) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;
