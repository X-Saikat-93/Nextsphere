import {
  currentUser,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import HeroSection from "@/components/HeroSection/mainHeroSection";
import Navbar from "@/components/Header/navBar";
import Footer from "@/components/Footer/footer";
export default async function Page() {
  const user = await currentUser();
  return (
    <>
      <Navbar />

      {/* <HeroSection user={user} /> */}
      
    </>
  );
}
