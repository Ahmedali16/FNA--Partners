"use client"
import Footer from "@/components/website/footer/Footer";
import LandingPage from "@/components/website/landingPage/LandingPage";
import dynamic from "next/dynamic";
// import Navbar from "@/components/website/navbar/Navbar";
const Navbar = dynamic(
  () => import('@/components/website/navbar/Navbar'),
  { ssr: false }
);


export default function Home() {
  return (
<>
<Navbar/>
<LandingPage/>
<Footer/>
</>
  );
}
