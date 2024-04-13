import Link from "next/link";
import {
    Facebook,
  LinkedinIcon,
  Github,
  InstagramIcon,
  CoffeeIcon,
} from "lucide-react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: "500", subsets: ["latin"] });
export default function Footer() {
  return (
    <footer className='w-full py-6'>
      <div className='container flex flex-col items-center justify-center gap-4 px-4 text-center md:flex-row md:items-start md:justify-between md:gap-8 md:px-6 lg:gap-10'>
        <h1 className='lg:text-3xl md:text-2xl font-bold text-xl'>
          <span className='text-[#14213d] dark:text-white'>Next</span>
          <span className='text-[#fca311] dark:text-[#e63946]'>Sphere</span>
        </h1>
        <nav className='grid max-w-xs w-full gap-1 text-sm md:justify-center md:max-w-none md:w-auto md:gap-4 lg:gap-2 xl:gap-4'>
          <Link
            className='text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300'
            href='#'>
            About
          </Link>
          <Link
            className='text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300'
            href='#'>
            Pricing
          </Link>
          <Link
            className='text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300'
            href='#'>
            Features
          </Link>
          <Link
            className='text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300'
            href='https://github.com/X-Saikat-93'
            target='_blank'>
            Contact
          </Link>
        </nav>
        <div className='flex items-center justify-center gap-4 md:gap-8 lg:gap-4'>
          <Link
            className='rounded-full border border-gray-200 w-8 h-8 flex items-center justify-center overflow-hidden shadow-sm hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50'
            href='https://github.com/X-Saikat-93'
            target='_blank'>
            <Facebook className='w-4 h-4' />
          </Link>
          <Link
            className='rounded-full border border-gray-200 w-8 h-8 flex items-center justify-center overflow-hidden shadow-sm hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50'
            href='https://github.com/X-Saikat-93'
            target='_blank'>
            <Github className='w-4 h-4' />
          </Link>
          <Link
            className='rounded-full border border-gray-200 w-8 h-8 flex items-center justify-center overflow-hidden shadow-sm hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50'
            href='https://www.instagram.com/pixutter'
            target='_blank'>
            <InstagramIcon className='w-4 h-4' />
          </Link>
          <Link
            className='rounded-full border border-gray-200 w-8 h-8 flex items-center justify-center overflow-hidden shadow-sm hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50'
            href='https://www.linkedin.com/in/saikat933/'
            target='_blank'>
            <LinkedinIcon className='w-4 h-4' />
          </Link>
        </div>
      </div>
      <div className={`${raleway.className}  mt-4`}>
        <Separator />

        <div className='text-base lg:text-xl tracking-wider  text-center flex items-center justify-center'>
          Built with
          <Image
            src='/nextjs-logo-svg.svg'
            height={30}
            width={30}
            alt='nextjs logo'
            className=' dark:bg-primary-foreground rounded-full dark:fill-white mx-4 '
          />
          by
          <Link
            href='https://github.com/X-Saikat-93'
            target='_blank'
            className=' mx-1'>
            Saikat
          </Link>
        </div>
      </div>
    </footer>
  );
}
