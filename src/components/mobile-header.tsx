import { MobileSidebar } from "./mobile-sidebar";
import { ModeToggle } from "./modeToggle";
export const MobileHeader = () => {
  return (
    <nav className='lg:hidden px-6 h-[50px] flex items-center bg-gradient-to-r from-primary to-primary/20 border-b fixed top-0 w-full z-50'>
      <MobileSidebar />
      <div className="">
        <ModeToggle />
      </div>

    </nav>
  );
};
