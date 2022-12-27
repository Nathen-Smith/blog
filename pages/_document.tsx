/* eslint-disable react/no-danger */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
                document.documentElement.style.backgroundColor = 'rgb(39 39 42)';
              } else {
                document.documentElement.classList.remove('dark');
                document.documentElement.style.backgroundColor = 'rgb(244 244 245)';
              }
            `,
          }}
        />
      </Head>
      <body className="bg-zinc-100 transition-colors dark:bg-zinc-800 sm:bg-white sm:dark:bg-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
