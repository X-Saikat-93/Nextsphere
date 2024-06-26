import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className='grid h-screen w-full place-content-center space-y-4 text-center'>
      <h2 className='text-9xl font-bold'>404</h2>

      <h1 className='text-2xl font-medium'>Oops... looks like you got lost</h1>

          <div className='flex items-center justify-center gap-2'>
              <Button asChild>
                  
        <Link href='/'>Back to home page</Link>
              </Button>
      </div>
    </main>
  );
}
