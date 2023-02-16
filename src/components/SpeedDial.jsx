import { useState } from "react"
import Box from "@mui/material/Box"
import {
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  Backdrop,
  ListItem,
} from "@mui/material"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined"
import InstagramIcon from "@mui/icons-material/Instagram"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
const link = (link) => {
  window.open("www.google.com/")
}

const SpeedDialTooltipOpen = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  const actions = [
    {
      icon: <WhatsAppIcon />,
      name: "Whatsapp",
      link: `https://www.google.com/search?q=google+fonts&rlz=1C1FCXM_pt-PTPT971PT972&oq=&aqs=chrome.1.69i57j69i59j35i39j69i65j69i60l2j69i65l2.2885j0j7&sourceid=chrome&ie=UTF-8`,
    },
    {
      icon: <FacebookOutlinedIcon />,
      name: "Facebook",
      link: `https://www.google.com/search?q=google+fonts&rlz=1C1FCXM_pt-PTPT971PT972&oq=&aqs=chrome.1.69i57j69i59j35i39j69i65j69i60l2j69i65l2.2885j0j7&sourceid=chrome&ie=UTF-8`,
    },
    {
      icon: <InstagramIcon />,
      name: "Instagram",
      link: `https://www.google.com/search?q=google+fonts&rlz=1C1FCXM_pt-PTPT971PT972&oq=&aqs=chrome.1.69i57j69i59j35i39j69i65j69i60l2j69i65l2.2885j0j7&sourceid=chrome&ie=UTF-8`,
    },
    {
      icon: <EmailOutlinedIcon />,
      name: "Email",
      link: `https://www.google.com/search?q=google+fonts&rlz=1C1FCXM_pt-PTPT971PT972&oq=&aqs=chrome.1.69i57j69i59j35i39j69i65j69i60l2j69i65l2.2885j0j7&sourceid=chrome&ie=UTF-8`,
    },
  ]

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
      }}
    >
      <SpeedDial ariaLabel="SpeedDial tooltip example" icon={<SpeedDialIcon />}>
        <SpeedDialAction
          icon={<InstagramIcon />}
          onClick={() => window.open("https://www.codexworld.com", "_blank")}
        />

        <SpeedDialAction
          icon={<FacebookOutlinedIcon />}
          onClick={() => window.open("https://www.codexworld.com", "_blank")}
        />
        <SpeedDialAction
          icon={<WhatsAppIcon />}
          onClick={() => window.open("https://www.codexworld.com", "_blank")}
        />
        <SpeedDialAction
          icon={<EmailOutlinedIcon />}
          onClick={() => window.open("https://www.codexworld.com", "_blank")}
        />
      </SpeedDial>
    </Box>
  )
}

export default SpeedDialTooltipOpen
