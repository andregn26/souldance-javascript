import React from "react"
import AboutUs from "@/scenes/homepage/aboutUs"
import Hero from "@/scenes/homepage/hero"
import Services from "@/scenes/homepage/services"
import SpeedDialTooltipOpen from "@/components/SpeedDial"
import MenuHome from "./layoutHome"

const Homepage = () => {
  return (
    <div>
      <SpeedDialTooltipOpen />
      <MenuHome />
      <Hero />
      <AboutUs />
      <Services />
    </div>
  )
}

export default Homepage
