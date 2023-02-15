import { useTheme, useMediaQuery } from "@mui/material"
import { Button } from "@mui/material"

function MainButton({ children, onClick }) {
  const isNonMobile800 = useMediaQuery("(min-width: 800px)")
  const isNonMobile1200 = useMediaQuery("(min-width: 1200px)")
  const theme = useTheme()
  return (
    <Button
      fullWidth={isNonMobile800 ? false : true}
      onClick={onClick}
      variant="contained"
      sx={{
        "&.MuiButton-root:hover": {
          backgroundColor: theme.palette.primary[600],
        },
      }}
    >
      {children}
    </Button>
  )
}

function SecondaryButton({ children, onClick }) {
  const isNonMobile800 = useMediaQuery("(min-width: 800px)")
  const isNonMobile1200 = useMediaQuery("(min-width: 1200px)")
  const theme = useTheme()
  return (
    <Button
      fullWidth={isNonMobile800 ? false : true}
      onClick={onClick}
      variant="outlined"
    >
      {children}
    </Button>
  )
}

function NavButton({ children, onClick }) {
  const isNonMobile800 = useMediaQuery("(min-width: 800px)")
  const isNonMobile1200 = useMediaQuery("(min-width: 1200px)")
  const theme = useTheme()
  return (
    <button onClick={onClick} className="glowing-btn">
      {children}
    </button>
  )
}

export { MainButton, SecondaryButton, NavButton }
