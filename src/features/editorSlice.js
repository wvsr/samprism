import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  padding: 32,
  bgColor: 'linear-gradient(to right, rgb(172, 182, 229), rgb(134, 253, 232))',
  darkMode: true,
  language: 'javascript',
  isBg: true,
  fontSize: '17px',
  frameNode: null,
}
export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    changePadding: (state, action) => {
      state.padding = action.payload
    },
    toggleBgImage: (state, action) => {
      state.isBg = action.payload
    },
    changeDarkMode: (state, action) => {
      state.darkMode = action.payload
    },
    reset: (state) => {
      state = initialState
    },

    setFrameNode: (state, action) => {
      state.frameNode = action.payload
    },
    changeLanguage: (state, action) => {
      state.language = action.payload
    },
    changeBgColor: (state, action) => {
      state.bgColor = action.payload
    },
  },
})

export const {
  changePadding,
  changeDarkMode,
  toggleBgImage,
  setFrameNode,
  reset,
  changeBgColor,
  changeLanguage,
} = editorSlice.actions

export default editorSlice.reducer
