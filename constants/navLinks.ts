interface NavLinkMeta {
  name: string;
  to: string;
  isExternal: boolean;
}

export interface NavLinksMeta extends Array<NavLinkMeta> {}

export const navLinks: NavLinksMeta = [
  {
    name: 'Index',
    to: '/',
    isExternal: false,
  },
  {
    name: 'Blog',
    to: '/list',
    isExternal: false,
  },
];
