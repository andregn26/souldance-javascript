import React from "react"
import Link from "./Link"
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
                color: theme.palette.secondary[600],
                backgroundColor: theme.palette.background.default,
                boxSizing: "border-box",
                borderWidth: isNonMobile ? 0 : "2px",
                width: drawerWidth,
              },
            }}
          >
            <Box width="100%">
              <Box m="1.5rem 2rem 2rem 3rem">
                <FlexBetween color={theme.palette.secondary.main}>
                  <Box display="flex" alignItems="center" gap="0.5rem">
                    <Typography variant="h4" fontWeight="bold">
                      Menu
                    </Typography>
                  </Box>
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronRight />
                  </IconButton>
                </FlexBetween>
              </Box>
              <List>
                <ListItem onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <ListItemText>
                    <Link page="Sobre Nós" />
                  </ListItemText>
                </ListItem>
                <ListItem onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <ListItemText>
                    <Link page="Serviços" />
                  </ListItemText>
                </ListItem>
                <ListItem onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <ListItemText>
                    <Link page="Link3" />
                  </ListItemText>
                </ListItem>
                <ListItem onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <ListItemText>
                    <Link page="Link4" />
                  </ListItemText>
                </ListItem>
              </List>
            </Box>

            <Box>
              <Divider />
              <FlexBetween
                textTransform="none"
                gap="1rem"
                m="1.5rem 2rem 2rem 3rem"
              >
                <Box textAlign="left">
                  <Typography
                    fontWeight="bold"
                    fontSize="0.9rem"
                    sx={{ color: theme.palette.secondary[100] }}
                  >
                    ahaha
                  </Typography>
                  <Typography
                    fontSize="0.8rem"
                    sx={{ color: theme.palette.secondary[200] }}
                  >
                    ahahah
                  </Typography>
                </Box>
                <SettingsOutlined
                  sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
                />
              </FlexBetween>
            </Box>
          </Drawer>
        )}
      </Box>
    </>
  )
}

export default Sidebar
