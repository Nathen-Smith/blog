/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */

import Link from 'next/link';

import { Bars3Icon } from '@heroicons/react/24/solid';
import { navLinks } from '../constants/navLinks';
import ColorModeToggle from './ColorModeToggle';
import ConditionallyRender from './ConditionallyRender';

interface HomeWrapperProps {
  children: JSX.Element;
}
export default function HomeWrapper({ children }: HomeWrapperProps) {
  // return (
  //   <div className="mx-auto mt-10 flex max-w-5xl flex-col space-y-8 space-x-0 px-5 sm:mt-16 md:mt-20 md:flex-row md:space-y-0 md:space-x-4 md:px-6 xl:space-x-12">
  //     <NavBar />
  //     {children}
  //   </div>
  // );

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-white dark:bg-zinc-900">
        <div className="navbar mx-auto w-full max-w-7xl bg-zinc-100 pl-[14px] pr-1 transition-all duration-300 dark:bg-zinc-800 dark:text-white sm:bg-white sm:px-4 sm:dark:bg-zinc-900">
          <div className="flex-none sm:hidden">
            <label
              htmlFor="my-drawer"
              className="flex h-12 w-12 cursor-pointer items-center"
            >
              <Bars3Icon className="h-7 w-7" />
            </label>
          </div>
          <div className="flex-1 sm:pl-2">{`Nathen's Blog`}</div>
          <div className="hidden flex-none sm:block">
            <ul className="flex items-center space-x-4">
              {navLinks.map((item) => {
                if (item.isExternal) {
                  return (
                    <li key={item.name}>
                      <a href={item.to}>{item.name}</a>
                    </li>
                  );
                }
                return (
                  <li key={item.name}>
                    <Link href={item.to}>
                      <a>{item.name}</a>
                    </Link>
                  </li>
                );
              })}
              <li>
                <ConditionallyRender client>
                  <ColorModeToggle />
                </ConditionallyRender>
              </li>
            </ul>
          </div>
          <div className="block flex-none sm:hidden">
            <ConditionallyRender client>
              <ColorModeToggle />
            </ConditionallyRender>
          </div>
        </div>
        <div className="mx-auto px-[14px] pt-4 sm:px-4">{children}</div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay" />
        <ul className="prose prose-zinc flex w-60 flex-col bg-zinc-100 p-4 pt-8 text-xl font-bold dark:prose-invert dark:bg-zinc-800">
          {navLinks.map((item) => {
            if (item.isExternal) {
              return (
                <li key={item.name}>
                  <a href={item.to}>{item.name}</a>
                </li>
              );
            }
            return (
              <li key={item.name}>
                <Link href={item.to}>
                  <a>{item.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
