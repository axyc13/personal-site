import Hero from "@/src/components/home/Hero";
import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";

import "./globals.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
