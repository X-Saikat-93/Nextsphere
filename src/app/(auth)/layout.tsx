import { ReactNode } from "react";

const layout = ({children}: {children:ReactNode}) => {
  return (
    <main className='fixed top-0 left-0 right-0 h-full w-full flex justify-center items-center'>
      {children}
    </main>
  );
};

export default layout;
