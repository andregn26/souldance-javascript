import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  mode: "dark",
  selectedPage: "",
}

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light"
    },
    setSelectedPage: (state, actions) => {
      state.selectedPage = actions.payload
    },
  },
})

export const { setMode, setSelectedPage } = globalSlice.actions

export default globalSlice.reducer
