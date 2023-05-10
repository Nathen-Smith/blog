/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';

import Tweet from '../components/Tweet';
import { ContactContextProvider } from '../context/counter';

const components = { Tweet };

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContactContextProvider>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ContactContextProvider>
  );
}

export default MyApp;
