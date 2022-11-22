/* eslint-disable */

import { useState } from 'react';

function ColorModeToggle({ theme, dispatch }: any) {
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

  return (
    <div className="bg-blue-500">
      <button
        onClick={toggle}
        type="button"
        aria-label={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
        title={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
        className="hover:opacity-100 focus:opacity-100"
        style={{
          opacity: 0.65,
          position: `relative`,
          borderRadius: `4px`,
          width: `40px`,
          height: `25px`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          transition: `opacity 0.3s ease`,
          border: `none`,
          outline: `none`,
          background: `none`,
          cursor: `pointer`,
          padding: 0,
          appearance: `none`,
        }}
      >
        <div
          className={`
        relative h-6 w-6 scale-100 overflow-hidden rounded-[50%] border-none 
        bg-transparent shadow-[inset_8px_-8px_0px_0px_text-white] transition-all duration-[450ms] before:absolute 
        before:right-[-9px] before:top-[-9px] before:h-6 before:w-6
        before:translate-x-[14px] before:translate-y-[-14px]
        before:rounded-[50%] before:border-none before:opacity-0 
        before:transition-transform before:duration-[450ms] before:content-[""] after:absolute after:top-[50%] 
        after:left-[50%] after:mt-[-4px] after:mr-0 
        after:mb-0 after:ml-[-4px] after:h-2
        after:w-2 after:scale-0 after:rounded-[50%]
        after:shadow-[0_-23px_0_text-red-600,_0_23px_0_text-red-600,_23px_0_0_text-red-600,_-23px_0_0_text-red-600,_15px_15px_0_text-red-600,_-15px_15px_0_text-red-600,_15px_-15px_0_text-red-600,_-15px_-15px_0_text-red-600]
        after:transition-all after:duration-[350ms] after:content-[""] dark:scale-[0.55] dark:overflow-visible 
        dark:border-4 dark:border-solid dark:border-white dark:bg-white dark:shadow-none before:dark:translate-x-0 
        before:dark:translate-y-0
        before:dark:border-2 before:dark:border-solid before:dark:bg-opacity-100 after:dark:scale-100
        `}
        />
      </button>
    </div>
  );
}

export default ColorModeToggle;
