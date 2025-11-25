import Banner from "@/components/ui/Banner";
import Footer from "@/components/ui/Home Page/Footer";
import ProjectShowcase from "@/components/ui/Home Page/Projects";
import SectionOne from "@/components/ui/Home Page/SectionOne";
import SectionTwo from "@/components/ui/Home Page/SectionTwo";

export default function Home() {
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
