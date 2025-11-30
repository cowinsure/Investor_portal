"use client";
import Banner from "@/components/ui/Banner";
import Footer from "@/components/ui/Home Page/Footer";
import ProjectShowcase from "@/components/ui/Home Page/Projects";
import SectionOne from "@/components/ui/Home Page/SectionOne";
import SectionTwo from "@/components/ui/Home Page/SectionTwo";
import { useAuth } from "@/core/context/AuthContext";
import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  const { userId } = useAuth();
  console.log(userId);
  return (
    <div className="">
      <Banner />
      <SectionOne />
      <SectionTwo />
      <ProjectShowcase />
      <Footer />
    </div>
  );
}
