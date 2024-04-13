import Link from "next/link";
import { ModeToggle } from "../modeToggle";
import { currentUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { UserPlus, User } from "lucide-react";





export default async function Navbar() {
  const user = await currentUser();

  return (
    <header className=' border-b-2 top-0 z-50 sticky w-full border-black dark:border-slate-200  shadow-lg lg:shadow-xl shadow-slate-700/5 lg:backdrop-blur-sm backdrop-blur-lg lg:after:hidden rounded-xl dark:bg-inherit'>
      <div className='wrapper flex items-center justify-between py-4 mx-4 lg:mx-8  md:mx-4 '>
        <Link href='/' className='w-36 mr-4'>
          <h1 className='lg:text-3xl md:text-2xl font-bold text-xl'>
            <span className='text-[#14213d] dark:text-white'>Next</span>
            <span className='text-[#fca311] dark:text-[#e63946]'>Sphere</span>
          </h1>
        </Link>
        <div className='flex w-32 justify-end gap-3 '>
          <ModeToggle />
          <Button asChild variant="secondary">
            <Link
              href={!user ? "/sign-in" : "/collections"}
              className='rounded-xl lg:px-5 sm:px-2 py-3 font-medium text-white transition-all duration-200 flex items-center justify-center'>
              {!user ? (
                <UserPlus className='mr-2 h-4 w-4' />
              ) : (
                <User className='mr-2 h-4 w-4' />
              )}
              {!user ? "Login" : "Collections"}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
