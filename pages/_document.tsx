/* eslint-disable react/no-danger */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="white" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
                document.querySelector('meta[name="theme-color"]').setAttribute('content', 'rgb(24 24 27)')
              } else {
                document.documentElement.classList.remove('dark')
              }
            `,
          }}
        />
      </Head>
      <body className="bg-white transition-colors duration-300 dark:bg-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
