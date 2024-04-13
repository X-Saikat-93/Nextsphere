
import Link from "next/link";
import { Button } from "../ui/button";

interface HeroProps {
  // @ts-ignore
  user?: User;
}

export default function Herosection({ user }: HeroProps) {
  return (
    <section className='w-full pt-12 md:pt-24 lg:pt-32 h-screen'>
      <div className='container flex flex-col items-center space-y-4 text-center'>
        <div className='space-y-2'>
          <h1 className='text-3xl pb-4 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-300  '>
            Your entire internet, organized
          </h1>
          <p className='max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 mx-auto'>
            Save, organize, and share your favorite web pages with ease. A
            single platform for your digital library.
          </p>
        </div>
        <div className='flex flex-col gap-2 min-[400px]:flex-row'>
          <Link
            className='inline-flex h-12 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
            href={!user ? "/sign-in" : "/todos"}>
            {!user ? "Login" : "Collections"}
          </Link>
          <Link
            className='inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
            href='#'>
            Tour
          </Link>
        </div>
      </div>
    </section>
  );
}
