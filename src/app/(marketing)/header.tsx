import Image from "next/image";
import { Loader } from "lucide-react";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/modeToggle";

export const Header = () => {
  return (
    <header className='h-20 w-full px-4 border-b-2 top-0 z-50 sticky  border-black dark:border-slate-200  shadow-lg lg:shadow-xl shadow-slate-700/5 lg:backdrop-blur-sm backdrop-blur-lg lg:after:hidden rounded-xl dark:bg-inherit'>
      <div className='lg:max-w-screen-lg mx-auto flex items-center justify-between h-full'>
        <div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
          <Image src='/mascot.svg' height={40} width={40} alt='Mascot' />
          <h1 className='text-2xl font-extrabold text-green-600 tracking-wide'>
            WordFlow
          </h1>
        </div>
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
              <Button size='lg' variant='ghost'>
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};
