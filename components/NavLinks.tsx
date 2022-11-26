/* eslint-disable jsx-a11y/anchor-is-valid */

import Link from 'next/link';
import { navLinks } from '../constants/navLinks';

export default function NavLinks() {
  return (
    <>
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
    </>
  );
}
