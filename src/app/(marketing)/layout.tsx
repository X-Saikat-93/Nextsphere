import { Footer } from "./footer";
import Navbar from "@/components/Header/navBar";
import { Header } from "./header";
type Props = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className='min-h-screen h-full flex flex-col'>
      {/* <Header /> */}
      <Navbar/>
      <main className='flex-1 flex flex-col items-center justify-center'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
