import React from "react"
import AboutUs from "@/scenes/homepage/aboutUs"
import Hero from "@/scenes/homepage/hero"
import Services from "@/scenes/homepage/services"
import SpeedDialTooltipOpen from "@/components/SpeedDial"
import MenuHome from "./layoutHome"
import Footer from "../footer"

const Homepage = () => {
  return (
    <div>
      <SpeedDialTooltipOpen />
      <MenuHome />
      <Hero />
      <AboutUs />
      <Services />
      <Footer />
    </div>
  )
}

export default Homepage
