import React, { useReducer } from 'react';
import Link from 'next/link';

import { navLinks } from '../constants/navLinks';

function NavBar() {
  function reducer(_: string, themeColor: string) {
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

  // eslint-disable-next-line no-unused-vars
  const [theme, dispatch] = useReducer(reducer, 'light');

  return (
    <div className="md:w-40">
      <button onClick={() => dispatch('light')} type="button">
        Light
      </button>
      <button onClick={() => dispatch('dark')} type="button">
        Dark
      </button>

      <div className="mb-4 font-serif text-4xl">Nathen Smith</div>
      <div className="space-y-2 text-2xl font-semibold">
        {navLinks.map((item) => {
          if (item.isExternal) {
            return (
              <a
                href={item.to}
                key={item.name}
                className="block cursor-pointer text-zinc-600 sm:hover:text-black"
              >
                {item.name}
              </a>
            );
          }
          return (
            <Link href={item.to} key={item.name}>
              <div className="cursor-pointer text-zinc-600 sm:hover:text-black">
                {item.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NavBar;
