import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { useDispatch, useSelector } from "react-redux"
import { setSelectedPage } from "@/state"
import { useTheme, Box } from "@mui/material"

const Link = ({ page }) => {
  const theme = useTheme()
  const selectedPage = useSelector((state) => state.global.selectedPage)
  // console.log("🚀 ~ file: Link.jsx:8 ~ Link ~ selectedPage", selectedPage)
  const lowerCasePage = page
    .toLowerCase()
    .split(" ")
    .join("-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
  const dispatch = useDispatch()

  // console.log("🚀 ~ file: Link.jsx:6 ~ Link ~ lowerCasePage", lowerCasePage)
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => dispatch(setSelectedPage(lowerCasePage))}
      // className={`${selectedPage === lowerCasePage ? "selectedLink" : ""}`}
    >
      <Box
        sx={{
          color:
            selectedPage === lowerCasePage
              ? theme.palette.text.selectedText
              : theme.palette.text.primary,
          fontWeight: "500",
          letterSpacing: "0.5px",
        }}
      >
        {page}
      </Box>
    </AnchorLink>
  )
}

export default Link
