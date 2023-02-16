import { useDispatch } from "react-redux"
import { setMode } from "@/state"
import { LightModeOutlined, DarkModeOutlined } from "@mui/icons-material"
import { useTheme, IconButton, useMediaQuery } from "@mui/material"

const ThemeButton = () => {
  const isNonMobile1000 = useMediaQuery("(min-width: 1000px)")
  const dispatch = useDispatch()
  const theme = useTheme()
  return (
    <IconButton onClick={() => dispatch(setMode())}>
      {theme.palette.mode === "dark" ? (
        <LightModeOutlined
          sx={{
            fontSize: "25px",
            color: theme.palette.text.primary,
          }}
        />
      ) : (
        <DarkModeOutlined
          sx={{
            fontSize: "25px",
            color: theme.palette.text.primary,
          }}
        />
      )}
    </IconButton>
  )
}

export default ThemeButton
