import React from "react"
import Link from "../../../../components/Link"
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material"
import { SettingsOutlined, ChevronRight } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import FlexBetween from "@/components/FlexBetween"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined"
import InstagramIcon from "@mui/icons-material/Instagram"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import ThemeButton from "../../../../components/ThemeButton"

const Sidebar = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation()
  const [active, setActive] = useState("")
  const navigate = useNavigate()
  const theme = useTheme()

  useEffect(() => {
    setActive(pathname.substring(1))
  }, [pathname])

  return (
    <>
      <Box component="nav">
        {isSidebarOpen && (
          <Drawer
            open={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            variant="persistent"
            anchor="right"
            sx={{
              width: drawerWidth,
              "& .MuiDrawer-paper": {
                backgroundColor: theme.palette.background.default,
                boxSizing: "border-box",
                borderWidth: isNonMobile ? 0 : "2px",
                width: drawerWidth,
              },
            }}
          >
            <Box
              width="100%"
              height="100%"
              sx={{
                p: "1.5rem 2rem 2rem 3rem",
                border: "solid red 3px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Margins and padding box */}
              {/* Menu Header Box */}
              <FlexBetween>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    Menu
                  </Typography>
                </Box>
                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <ChevronRight />
                </IconButton>
              </FlexBetween>
              {/* Menu Actions Box */}
              <List>
                <ListItem
                  disableGutters
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                  <ListItemText>
                    <Link page="Sobre Nós" />
                  </ListItemText>
                </ListItem>
                <ListItem
                  disableGutters
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                  <ListItemText>
                    <Link page="Serviços" />
                  </ListItemText>
                </ListItem>
                <ListItem
                  disableGutters
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                  <ListItemText>
                    <Link page="Link3" />
                  </ListItemText>
                </ListItem>
                <ListItem
                  disableGutters
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                  <ListItemText>
                    <Link page="Link4" />
                  </ListItemText>
                </ListItem>
              </List>
              {/* Menu Footer Box */}{" "}
              <Box>
                <Divider />
                <FlexBetween
                  textTransform="none"
                  // gap="1rem"
                  // m="1.5rem 2rem 2rem 3rem"
                  mt="2rem"
                  mb="1rem"
                >
                  <Box display="flex" gap="2rem">
                    <FacebookOutlinedIcon />
                    <InstagramIcon />
                    <WhatsAppIcon />
                    <EmailOutlinedIcon />
                  </Box>
                  <ThemeButton />
                </FlexBetween>
              </Box>
            </Box>
          </Drawer>
        )}
      </Box>
    </>
  )
}

export default Sidebar
