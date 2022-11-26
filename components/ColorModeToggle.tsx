/* eslint-disable react-hooks/rules-of-hooks */
import { MoonIcon } from '@heroicons/react/24/solid';
import { SunIcon } from '@heroicons/react/24/outline';
import useDarkMode from '../hooks/useDarkMode';

function ColorModeToggle() {
  const { isDark, toggle } = useDarkMode();
  return (
    <div>
      <button
        onClick={toggle}
        type="button"
        aria-label={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
        title={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
        className="flex h-12 w-12 items-center"
      >
        {isDark ? (
          <SunIcon className="mx-auto h-8 w-8 text-white" />
        ) : (
          <MoonIcon className="mx-auto h-7 w-7 text-zinc-900" />
        )}
      </button>
    </div>
  );
}

export default ColorModeToggle;
