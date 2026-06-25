import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import NewFeaturedMenu from "@/components/NewFeaturedMenu";
import Gallery from "@/components/Gallery";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import SeoDirectory from "@/components/SeoDirectory";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <NewFeaturedMenu />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <ServiceAreas />
        <FAQ />
        <Contact />
        <SeoDirectory />
      </main>
      <Footer />
      <FloatingCTA />
      <QuoteModal />
    </div>
  );
}
