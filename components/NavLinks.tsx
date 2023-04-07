/* eslint-disable jsx-a11y/anchor-is-valid */

import Link from 'next/link';
import {
  HomeIcon as HomeIconSolid,
  EnvelopeIcon as EnvelopeIconSolid,
  UserCircleIcon as UserCircleIconSolid,
  CodeBracketSquareIcon,
} from '@heroicons/react/24/solid';

import {
  HomeIcon,
  EnvelopeIcon,
  UserCircleIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';

interface NavLinkMeta {
  name: string;
  to: string;
  isExternal: boolean;
  // eslint-disable-next-line no-unused-vars
  icon(isDark: boolean): JSX.Element;
}

interface NavLinksMeta extends Array<NavLinkMeta> {}

const navLinks: NavLinksMeta = [
  {
    name: 'Home',
    to: '/',
    isExternal: false,
    icon: (isDark) =>
      isDark ? (
        <HomeIconSolid className="h-6 w-6" />
      ) : (
        <HomeIcon className="h-6 w-6" />
      ),
  },
  {
    name: 'Portfolio',
    to: 'https://nathensmith.com',
    isExternal: true,
    icon: (isDark) =>
      isDark ? (
        <UserCircleIconSolid className="h-6 w-6" />
      ) : (
        <UserCircleIcon className="h-6 w-6" />
      ),
  },
  {
    name: 'GitHub',
    to: 'https://github.com/Nathen-Smith',
    isExternal: true,
    icon: (isDark) =>
      isDark ? (
        <CodeBracketSquareIcon className="h-6 w-6" />
      ) : (
        <CodeBracketIcon className="h-6 w-6" />
      ),
  },
  {
    name: 'Contact',
    to: 'mailto:nathencsmith@gmail.com',
    isExternal: true,
    icon: (isDark) =>
      isDark ? (
        <EnvelopeIconSolid className="h-6 w-6" />
      ) : (
        <EnvelopeIcon className="h-6 w-6" />
      ),
  },
];

export default function NavLinks() {
  return (
    <>
      {navLinks.map((item) => (
        <div key={item.name} className="flex items-center space-x-2">
          <div className="sm:hidden">
            <div className="block dark:hidden">{item.icon(false)}</div>
            <div className="hidden dark:block">{item.icon(true)}</div>
          </div>
          {item.isExternal ? (
            <a href={item.to}>{item.name}</a>
          ) : (
            <Link href={item.to}>
              <a>{item.name}</a>
            </Link>
          )}
        </div>
      ))}
    </>
  );
}
