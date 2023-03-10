import React from "react"
import { useState } from "react"
import { Box, useMediaQuery } from "@mui/material"
import { Outlet } from "react-router-dom"
import NavBarLayout from "@/scenes/layout/navbar"

const Layout = (isTopOfPage) => {
  const isNonMobile = useMediaQuery("(min-width: 600px)")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  // console.log("side bar", isSidebarOpen)
  return (
    <Box display={isNonMobile ? null : "block"} width="100%" height="100%">
      <Box flexGrow={1}>
        <NavBarLayout
          isTopOfPage={isTopOfPage}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
