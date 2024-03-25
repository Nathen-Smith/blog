/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import dynamic from 'next/dynamic';

import Tweet from '../components/Tweet';

const RedditPost = dynamic(() => import('../components/RedditPost'), {
  ssr: false,
});
const components = { Tweet, RedditPost };

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
