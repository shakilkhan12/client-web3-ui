import { configureStore } from '@reduxjs/toolkit'
import globalSlice from './slices/globalSlice'

export const store = configureStore({
  reducer: {
   globalSlice
  },
})
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch