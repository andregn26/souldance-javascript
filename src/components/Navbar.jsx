import * as React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setMode } from "@/state"
import Link from "@/components/Link"
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
} from "@mui/icons-material"
import FlexBetween from "./FlexBetween"
import {
  useTheme,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useScrollTrigger,
  useMediaQuery,
  CssBaseline,
} from "@mui/material"
import WidthContainer from "./WidthContainer"
import { MainButton, NavButton } from "./Buttons"
import ThemeButton from "./ThemeButton"

function ElevationScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

export default function NavBar({
  isSidebarOpen,
  setIsSidebarOpen,
  isTopOfPage,
  props,
}) {
  const isNonMobile1000 = useMediaQuery("(min-width: 1000px)")
  const dispatch = useDispatch()
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = useState(null)
  const isOpen = Boolean(anchorEl)
  const handleClick = (event) => setAnchorEl(event.currentElement)
  const handleClose = () => setAnchorEl(null)
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          enableColorOnDark
          sx={{
            backgroundColor: theme.palette.background.default,
            // border: "solid red 2px",
          }}
        >
          {isNonMobile1000 && (
            <Box
              sx={{
                top: "50%",
                transform: "translateY(-50%)",
                position: "absolute",
                right: 16,
                zIndex: 1000000,
              }}
            >
              <ThemeButton />
            </Box>
          )}

          <WidthContainer>
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
              {/* LEFT SIDE */}

              <FlexBetween>
                <Typography
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: "bold",
                    letterSpacing: "1px",
                  }}
                >
                  SOULDANCE
                </Typography>
                {isNonMobile1000 && (
                  <Box width="100%" ml="4rem" display="flex" gap="3rem">
                    <Link page="Sobre Nós" />
                    <Link page="Serviços" />
                    <Link page="Link3" />
                    <Link page="Link4" />
                  </Box>
                )}
              </FlexBetween>

              {/* RIGHT SIDE */}
              <FlexBetween>
                {isNonMobile1000 && <MainButton>Sabe Mais</MainButton>}

                {!isNonMobile1000 && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <MenuIcon
                      sx={{
                        fontSize: "25px",
                        color: theme.palette.text.primary,
                      }}
                    />
                  </IconButton>
                )}
              </FlexBetween>
            </Toolbar>
          </WidthContainer>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  )
}
