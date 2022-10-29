import React from 'react';
import Link from 'next/link';

import { navLinks } from '../constants/navLinks';

function NavBar() {
  return (
    <div className="mt-20 xl:mr-10 -mr-6">
      <div className="block w-60">
        <div className="text-3xl mb-4 font-semibold">Nathen Smith</div>
        {navLinks.map((item) => {
          if (item.isExternal) {
            return (
              <a
                href={item.to}
                key={item.name}
                className="font-semibold text-zinc-600 hover:text-black cursor-pointer block"
              >
                {item.name}
              </a>
            );
          }
          return (
            <Link href={item.to} key={item.name}>
              <div className="font-semibold text-zinc-600 hover:text-black cursor-pointer">
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
