import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Products from "@/components/Products";
import Featured from "@/components/Featured";
import Distributors from "@/components/Distributors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Products />
        <Featured />
        <Distributors />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
