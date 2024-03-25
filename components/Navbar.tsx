/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Bars3Icon } from '@heroicons/react/24/solid';
import NavLinks from './NavLinks';

const ColorModeToggle = dynamic(() => import('./ColorModeToggle'), {
  ssr: false,
});

export default function NavBar() {
  return (
    <div className="navbar mx-auto w-full max-w-[65ch] px-0 transition-colors dark:text-white sm:bg-transparent sm:dark:bg-transparent">
      <div className="flex-none sm:hidden">
        <label
          htmlFor="my-drawer"
          className="flex h-12 w-12 cursor-pointer items-center"
        >
          <Bars3Icon className="mx-auto h-7 w-7" />
        </label>
      </div>
      <div className="flex-1">
        <Link href="/">
          <a className="py-2">{`Nathen's Blog`}</a>
        </Link>
      </div>
      <div className="hidden flex-none sm:block">
        <ul className="flex items-center space-x-4">
          <NavLinks />
          <li>
            <ColorModeToggle />
          </li>
        </ul>
      </div>
      <div className="block flex-none sm:hidden">
        <ColorModeToggle />
      </div>
    </div>
  );
}
