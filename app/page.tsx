"use client";
import Image from "next/image";
import Header from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="mx-5">
      <div className="flex py-4 z-10">
        <div>
          <Image
            src="/globe.svg"
            alt="Therapist Office"
            width={50}
            height={50}
          />
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold">Dr. Serena Blake, PsyD.</h2>
          <p className="text-gray-600">Clinical Psychologist</p>
        </div>
      </div>
      <Header />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <About />
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <Services />
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <Faq />
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
