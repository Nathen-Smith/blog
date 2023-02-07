/* eslint-disable jsx-a11y/label-has-associated-control */

import Footer from './Footer';
import Navbar from './Navbar';
import NavLinks from './NavLinks';

interface HomeWrapperProps {
  children: JSX.Element;
}
export default function HomeWrapper({ children }: HomeWrapperProps) {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col lg:text-lg">
        <Navbar />
        <div className="prose prose-zinc mx-auto w-full max-w-[65ch] px-[14px] pt-8 dark:prose-invert sm:px-0 lg:prose-lg">
          {children}
        </div>
        <Footer />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay" />
        <ul className="prose prose-zinc flex w-48 flex-col bg-white p-6 text-xl font-bold dark:prose-invert dark:bg-zinc-900">
          <NavLinks />
        </ul>
      </div>
    </div>
  );
}
