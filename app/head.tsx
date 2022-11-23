'use client';

import Script from 'next/script';

export default function Head() {
  return (
    <>
      <title>Blog</title>
      <meta name="description" content="Blog" />
      <link rel="icon" href="/favicon.ico" />
      <Script id="Initialize dark mode">
        {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          `}
      </Script>
    </>
  );
}
