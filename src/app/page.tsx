"use client";

import { skinlesion } from "actions/imageDetections";
import Hero from "components/Hero";
import HeaderPage from "components/HeaderPage";
import Footer from "components/Footer";
import Features from "components/Features";
import ImageUpload from "components/ImageUpload";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <HeaderPage />
      <Hero />
      <ImageUpload />
      <Features />
      <Footer />
    </main>
  );
}
