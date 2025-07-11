"use client";

import { Divider } from "@mui/material";
import AppAppBar from "./components/AppAppBar";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import LogoCollection from "./components/LogoCollection";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <AppAppBar />
      <Hero />
      <div>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </>
  );
}
