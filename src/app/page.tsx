import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import LiveCounters from "@/components/LiveCounters";
import FeaturedMenu from "@/components/FeaturedMenu";
import Gallery from "@/components/Gallery";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <LiveCounters />
        <FeaturedMenu />
        <Gallery />
        <ServiceAreas />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
