import NavBar from './Navbar';

interface HomeWrapperProps {
  children: JSX.Element;
}
export default function HomeWrapper({ children }: HomeWrapperProps) {
  return (
    <div className="mx-auto mt-10 flex max-w-5xl flex-col space-y-8 space-x-0 px-5 sm:mt-16 md:mt-20 md:flex-row md:space-y-0 md:space-x-4 md:px-6 xl:space-x-12">
      <NavBar />
      {children}
    </div>
  );
}
