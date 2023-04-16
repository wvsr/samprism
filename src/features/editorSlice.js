import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  padding: 16,
  bgColor: 'red',
  darkMode: true,
  language: 'javascript',
  isBg: true,
  fontSize: 'xs',
  frameNode: null,
}
export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    changePadding: (state, action) => {
      state.padding = action.payload
    },
    toggleBgImage: (state) => {
      state.isBg = !state.isBg
    },
    changeDarkMode: (state) => {
      state.darkMode = !state.darkMode
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
