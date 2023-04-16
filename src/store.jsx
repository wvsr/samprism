import { configureStore } from '@reduxjs/toolkit'
import editorReducer from './features/editorSlice'

const store = configureStore({
  reducer: {
    editor: editorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store
