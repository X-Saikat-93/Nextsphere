import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  LinkedinIcon,
  Github,
  InstagramIcon,
  CoffeeIcon,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className='lg:max-w-screen-xl sm:block h-auto w-full border-t-2 border-slate-200 p-2 '>
      <div className='max-w-screen-lg mx-auto flex flex-wrap items-center justify-center h-full gap-y-4'>
        <Button size='lg' variant='ghost' className='w-full sm:w-1/2 md:w-1/5'>
          <Image
            src='/hr.svg'
            alt='Croatian'
            height={32}
            width={40}
            className='mr-4 rounded-md'
          />
          Croatian
        </Button>
        <Button size='lg' variant='ghost' className='w-full sm:w-1/2 md:w-1/5'>
          <Image
            src='/es.svg'
            alt='Spanish'
            height={32}
            width={40}
            className='mr-4 rounded-md'
          />
          Spanish
        </Button>
        <Button size='lg' variant='ghost' className='w-full sm:w-1/2 md:w-1/5'>
          <Image
            src='/fr.svg'
            alt='French'
            height={32}
            width={40}
            className='mr-4 rounded-md'
          />
          French
        </Button>
        <Button size='lg' variant='ghost' className='w-full sm:w-1/2 md:w-1/5'>
          <Image
            src='/it.svg'
            alt='Italian'
            height={32}
            width={40}
            className='mr-4 rounded-md'
          />
          Italian
        </Button>
        <Button size='lg' variant='ghost' className='w-full sm:w-1/2 md:w-1/5'>
          <Image
            src='/jp.svg'
            alt='Japanese'
            height={32}
            width={40}
            className='mr-4 rounded-md'
          />
          Japanese
        </Button>
      </div>
      <div className='w-full py-6 mt-16'>
        <div className='container flex flex-col items-center justify-center gap-4 px-4 text-center md:flex-row md:items-start md:justify-between md:gap-8 md:px-6 lg:gap-10'>
          <Link href='/'>
            <h1 className='lg:text-3xl md:text-2xl font-bold text-xl'>
              <span className='text-[#14213d] dark:text-white'>Word</span>
              <span className='text-[#fca311] dark:text-[#e63946]'>Flow</span>
            </h1>
          </Link>
          <div className='flex items-center justify-center gap-4 md:gap-8 lg:gap-4'>
            <Link
              className='rounded-full border border-gray-200 w-8 h-8 flex items-center justify-center overflow-hidden shadow-sm hover:bg-green-500 hover:text-gray-900 dark:border-gray-800 dark:hover:bg-green-600 dark:hover:text-gray-50 transition duration-500 ease-linear'
              href='https://github.com/X-Saikat-93'
              target='_blank'>
              <Github className='w-4 h-4' />
            </Link>
            <Link
              className='rounded-full border border-gray-200 w-8 h-8 flex items-center justify-center overflow-hidden shadow-sm hover:bg-green-500 hover:text-gray-900 dark:border-gray-800 dark:hover:bg-green-600 dark:hover:text-gray-50 transition duration-500 ease-linear'
              href='https://www.instagram.com/pixutter'
              target='_blank'>
              <InstagramIcon className='w-4 h-4' />
            </Link>
            <Link
              className='rounded-full border border-gray-200 w-8 h-8 flex items-center justify-center overflow-hidden shadow-sm hover:bg-green-500 hover:text-gray-900 dark:border-gray-800 dark:hover:bg-green-600 dark:hover:text-gray-50 transition duration-500 ease-linear'
              href='https://www.linkedin.com/in/saikat933/'
              target='_blank'>
              <LinkedinIcon className='w-4 h-4' />
            </Link>
          </div>
        </div>
        <div className={`  mt-4`}>
          <Separator />

          <div className='text-base lg:text-xl tracking-wider  text-center flex items-center justify-center'>
            Built with
            <Image
              src='/nextjs-logo-svg.svg'
              height={30}
              width={30}
              alt='nextjs logo'
              className=' dark:bg-secondary-foreground rounded-full dark:fill-white mx-4 '
            />
            by
            <Link
              href='https://github.com/X-Saikat-93'
              target='_blank'
              className=' mx-1 bg-gradient-to-r from-accent-foreground to-neutral-700 text-transparent bg-clip-text'>
              Saikat
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
