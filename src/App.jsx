import { useMemo, useState, useEffect } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import "./App.css"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import { useSelector, useDispatch } from "react-redux"
import { setSelectedPage } from "@/state"
import { themeSettings } from "./theme"
import Layout from "@/scenes/layout"
import Homepage from "@/scenes/homepage"
import FormPage from "@/scenes/form"

function App() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.global.selectedPage)
  console.log("🚀 ~ file: App.jsx:14 ~ App ~ page", page)
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        dispatch(setSelectedPage("inicio"))
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout isTopOfPage={isTopOfPage} />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/fala-connosco" element={<FormPage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
