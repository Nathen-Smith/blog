import React from 'react';
import Link from 'next/link';

import { navLinks } from '../constants/navLinks';
import ColorModeToggle from './ColorModeToggle';

function NavBar() {
  return (
    <div className="md:w-40">
      <ColorModeToggle />
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
