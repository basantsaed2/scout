import Footer from "@/_components/Footer";
import Navbar from "@/_components/Navbar";
import Hero from "@/_components/sections/Hero";
import Plans from "@/_components/sections/Plans";
import Testimonial from "@/_components/sections/Testimonial";
import Dashboard from "@/_components/sections/Dashboard/Dashboard";
import Services from "@/_components/sections/Services";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main>
        <Hero />
        <Dashboard />
        <Services />
        <Testimonial />
        <Plans />
      </main>
      <Footer />
    </div>
  );
}