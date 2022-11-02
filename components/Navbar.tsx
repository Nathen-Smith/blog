import React from 'react';
import Link from 'next/link';

import { navLinks } from '../constants/navLinks';

function NavBar() {
  return (
    <div>
      <div className="text-4xl mb-4 font-serif">Nathen Smith</div>
      <div className="space-y-2 font-semibold text-2xl">
        {navLinks.map((item) => {
          if (item.isExternal) {
            return (
              <a
                href={item.to}
                key={item.name}
                className="block text-zinc-600 sm:hover:text-black cursor-pointer"
              >
                {item.name}
              </a>
            );
          }
          return (
            <Link href={item.to} key={item.name}>
              <div className="text-zinc-600 sm:hover:text-black cursor-pointer">
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
