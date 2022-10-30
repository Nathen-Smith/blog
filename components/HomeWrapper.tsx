import NavBar from './Navbar';

interface HomeWrapperProps {
  children: JSX.Element;
}
export default function HomeWrapper({ children }: HomeWrapperProps) {
  return (
    <div className="px-3.5 sm:px-5 md:px-6 flex flex-col md:flex-row space-y-8 md:space-y-0 max-w-5xl mx-auto mt-10 sm:mt-16 md:mt-20">
      <NavBar />
      {children}
    </div>
  );
}
