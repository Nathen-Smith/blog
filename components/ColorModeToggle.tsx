/* eslint-disable */

import { useState } from 'react';
import { MoonIcon } from '@heroicons/react/24/solid';
import { SunIcon } from '@heroicons/react/24/outline';

interface ColorModeToggleProps {
  theme: string;
  dispatch: any;
  lightColor?: string; // CSS color
  darkColor?: string; // CSS color
}

function ColorModeToggle({
  theme,
  dispatch,
  lightColor,
  darkColor,
}: ColorModeToggleProps) {
  const [isDark, setIsDark] = useState(theme === 'dark');
  function toggle() {
    if (isDark) {
      dispatch('light');
      setIsDark(false);
    } else {
      dispatch('dark');
      setIsDark(true);
    }
  }

  const light = lightColor || 'white';
  const dark = darkColor || 'black';

  return (
    <div className="bg-none">
      <button
        onClick={toggle}
        type="button"
        aria-label={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
        title={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
        className="relative flex h-[25px] w-10 cursor-pointer appearance-none items-center justify-center rounded border-none bg-none p-0 opacity-70 outline-none transition-opacity duration-300 focus:opacity-100 sm:hover:opacity-100"
      >
        <div
          className={`
        relative h-6 w-6 scale-100 overflow-hidden rounded-[50%] border-none 
        bg-transparent shadow-[inset_8px_-8px_0px_0px_${dark}] transition-all duration-[450ms] before:absolute 
        before:right-[-9px] before:top-[-9px] before:h-6 before:w-6
        before:translate-x-[14px] before:translate-y-[-14px]
        before:rounded-[50%] before:border-none before:opacity-0 
        before:transition-transform before:duration-[450ms] before:content-[""] after:absolute after:top-[50%] 
        after:left-[50%] after:mt-[-4px] after:mr-0 
        after:mb-0 after:ml-[-4px] after:h-2
        after:w-2 after:scale-0 after:rounded-[50%]
        after:dark:shadow-[0_-23px_0_${light},_0_23px_0_${light},_23px_0_0_${light},_-23px_0_0_${light},_15px_15px_0_${light},_-15px_15px_0_${light},_15px_-15px_0_${light},_-15px_-15px_0_${light}]
        after:shadow-[0_-23px_0_${dark},_0_23px_0_${dark},_23px_0_0_${dark},_-23px_0_0_${dark},_15px_15px_0_${dark},_-15px_15px_0_${dark},_15px_-15px_0_${dark},_-15px_-15px_0_${dark}]
        after:transition-all after:duration-[350ms] after:content-[""] dark:scale-[0.55] dark:overflow-visible 
        dark:border-4 dark:border-solid dark:border-white dark:bg-white dark:shadow-none before:dark:translate-x-0 
        before:dark:translate-y-0
        before:dark:border-2 before:dark:border-solid before:dark:bg-opacity-100 after:dark:scale-100
        `}
        />
        {/* <div 
          className={`absolute h-3 w-2 rounded-lg bg-white shadow-[0_-23px_0_red,_0_23px_0_${light},_23px_0_0_${light},_-23px_0_0_${light},_15px_15px_0_${light},_-15px_15px_0_${light},_15px_-15px_0_${light},_-15px_-15px_0_${light}]
          `}
        />
        <div className="absolute h-8 w- align-center justify-center items-center">
          <div className="relative mx-auto bg-white h-2 w-1 rounded-lg" />
        </div> */}
      </button>

      <button
        onClick={toggle}
        type="button"
        aria-label={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
        title={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
        className="flex h-8 w-8 items-center"
      >
        {isDark ? (
          <SunIcon className="h-8 w-8 text-white" />
        ) : (
          <MoonIcon className="mx-auto h-7 w-7 text-zinc-900" />
        )}
      </button>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    </div>
  );
}

export default ColorModeToggle;
