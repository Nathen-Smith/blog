/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

import { navLinks } from '../constants/navLinks';
import ColorModeToggle from './ColorModeToggle';
import ConditionallyRender from './ConditionallyRender';

function NavBar() {
  return (
    <div className="prose prose-zinc space-y-2 dark:prose-invert md:w-40">
      <h1 className="">Nathen Smith</h1>
      <div className="space-y-2">
        {navLinks.map((item) => {
          if (item.isExternal) {
            return (
              <a href={item.to} key={item.name} className="block">
                {item.name}
              </a>
            );
          }
          return (
            <Link href={item.to} key={item.name}>
              <a>{item.name}</a>
            </Link>
          );
        })}
      </div>
      <ConditionallyRender client>
        <ColorModeToggle />
      </ConditionallyRender>
    </div>
  );
}

export default NavBar;
