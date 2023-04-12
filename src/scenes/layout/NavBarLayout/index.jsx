import * as React from "react"
import { Link } from "react-router-dom"
import FlexBetween from "@/components/FlexBetween"
import {
  useTheme,
  AppBar,
  Toolbar,
  Typography,
  Box,
  useScrollTrigger,
  useMediaQuery,
  CssBaseline,
} from "@mui/material"
import WidthContainer from "@/components/WidthContainer"
import ThemeButton from "@/components/ThemeButton"

function ElevationScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

export default function NavBarLayout({ props }) {
  const isNonMobile1000 = useMediaQuery("(min-width: 1000px)")
  const theme = useTheme()
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
          <WidthContainer>
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
              {/* LEFT SIDE */}
              <FlexBetween>
                <Link to="/">
                  <Typography
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: "bold",
                      letterSpacing: "1px",
                    }}
                  >
                    SOULDANCE
                  </Typography>
                </Link>
              </FlexBetween>

              {/* RIGHT SIDE */}
              <FlexBetween>
                {" "}
                <ThemeButton />
              </FlexBetween>
            </Toolbar>
          </WidthContainer>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  )
}
