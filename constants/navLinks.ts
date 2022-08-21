interface NavLinkMeta {
  name: string;
  to: string;
  isExternal: boolean;
}

export interface NavLinksMeta extends Array<NavLinkMeta> {}

export const navLinks: NavLinksMeta = [
  {
    name: 'Home',
    to: '/',
    isExternal: false,
  },
  {
    name: 'Portfolio',
    to: 'https://nathensmith.com',
    isExternal: true,
  },
  {
    name: 'GitHub',
    to: 'https://github.com/Nathen-Smith',
    isExternal: true,
  },
  {
    name: 'Contact',
    to: 'mailto:nathencsmith@gmail.com',
    isExternal: true,
  },
];
