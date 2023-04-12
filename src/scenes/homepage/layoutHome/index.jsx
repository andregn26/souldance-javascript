import React from "react"
import { useState } from "react"
import { Box, useMediaQuery } from "@mui/material"
import { Outlet } from "react-router-dom"
import Navbar from "@/scenes/homepage/layoutHome/navbar"
import Sidebar from "@/scenes/homepage/layoutHome/sidebar"
import Footer from "@/scenes/footer"

const MenuHome = (isTopOfPage) => {
  const isNonMobile = useMediaQuery("(min-width: 600px)")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  // console.log("side bar", isSidebarOpen)
  return (
    <>
      <Box display={isNonMobile ? null : "block"} width="100%" height="100%">
        <Sidebar
          isNonMobile={isNonMobile}
          drawerWidth="100vw"
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Box flexGrow={1}>
          <Navbar
            isTopOfPage={isTopOfPage}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </Box>
      </Box>
    </>
  )
}

export default MenuHome
