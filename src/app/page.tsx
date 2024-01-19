"use client"

import CTA from "@/components/CTA"
import CTA1 from "@/components/CTA1"
import CTA2 from "@/components/CTA2"
import Features from "@/components/Features"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import LogoGrids from "@/components/LogoGrid"
import SiteNavbar from "@/components/Navbar"
import Reviews from "@/components/Reviews"
import Testimonials from "@/components/Testimonials"

export default function Home() {
  return (
    <>
      <SiteNavbar />
      <Hero />
      <LogoGrids />
      <CTA />
      <CTA1 />
      <Features />
      <Reviews />
      <Testimonials />
      <CTA2 />
      <Footer />
    </>
  )
}

