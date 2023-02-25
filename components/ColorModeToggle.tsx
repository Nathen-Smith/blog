/* eslint-disable react-hooks/rules-of-hooks */
import { MoonIcon } from '@heroicons/react/24/solid';
import { SunIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { ContactContext } from '../context/counter';

function ColorModeToggle() {
  const [state, dispatch] = useContext(ContactContext);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: state.isDark ? 'LIGHT' : 'DARK' });
        }}
        type="button"
        aria-label={state.isDark ? `Activate Light Mode` : `Activate Dark Mode`}
        title={state.isDark ? `Activate Light Mode` : `Activate Dark Mode`}
        className="flex h-12 w-12 items-center"
      >
        {state.isDark ? (
          <SunIcon className="mx-auto h-8 w-8 text-white" />
        ) : (
          <MoonIcon className="mx-auto h-7 w-7 text-zinc-900" />
        )}
      </button>
    </div>
  );
}

export default ColorModeToggle;
