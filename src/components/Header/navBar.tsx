import Link from "next/link";
import { ModeToggle } from "../modeToggle";
import {
  currentUser,
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from "../ui/button";
import { UserPlus, User } from "lucide-react";
import Image from "next/image";

export default async function Navbar() {
  const user = await currentUser();

  return (
    <header className=' border-b-2 top-0 z-50 sticky px-4 w-full border-black dark:border-slate-200  shadow-lg lg:shadow-xl shadow-slate-700/5 lg:backdrop-blur-sm backdrop-blur-lg lg:after:hidden rounded-xl dark:bg-inherit'>
      <div className='wrapper flex items-center justify-between py-4 mx-4 lg:mx-8  md:mx-4 '>
        <Link href='/' className='w-36 mr-4 flex  pl-4 items-center gap-x-3 flex-col lg:flex-row'>
          <Image src='/mascot.svg' height={40} width={40} alt='Mascot' />
          <h1 className=' text-lg font-extrabold text-primary tracking-wide lg:text-2xl'>
          WordFlow
          </h1>
        </Link>
        <div className='flex w-32 justify-end gap-3  '>
          <ModeToggle />
          {/* <Button asChild variant='secondary'>
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
          </Button> */}
          
          <ClerkLoading>
            <Loader className='h-5 w-5 text-muted-foreground animate-spin' />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <UserButton afterSignOutUrl='/' />
            </SignedIn>
            <SignedOut>
              <SignInButton
                mode='modal'
                afterSignInUrl='/learn'
                afterSignUpUrl='/learn'>
                <Button  variant='gooeyfyRight'>
                  {!user ? (
                    <UserPlus className='mr-2 h-4 w-4' />
                  ) : (
                    <User className='mr-2 h-4 w-4' />
                  )}
                  Login
                  {/* {!user ? "Login" : "Sign-up"} */}
                </Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}
