"use client"

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Analyze from "@/components/Analyze"
import Enhance from "@/components/Enhance"
import Build from "@/components/Build"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Analyze />
      <Enhance />
      <Build />
      <Footer />
    </main>
  )
}
