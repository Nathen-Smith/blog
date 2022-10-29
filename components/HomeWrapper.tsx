import NavBar from './Navbar';

interface HomeWrapperProps {
  children: JSX.Element;
}
export default function HomeWrapper({ children }: HomeWrapperProps) {
  return (
    <div className="lg:px-0 px-4 flex flex-col sm:flex-row max-w-5xl mx-auto mt-20">
      <NavBar />
      {children}
    </div>
  );
}
