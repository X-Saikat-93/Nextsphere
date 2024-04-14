import { Menu,SquareMenu  } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <SquareMenu size={20} className='text-white' />
      </SheetTrigger>
      <SheetContent className='p-0 z-[100]' side='bottom'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
