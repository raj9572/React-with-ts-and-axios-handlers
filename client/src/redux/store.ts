import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slice/cartSlice'
import appConfigSlice from './slice/appConfigSlice'

export const store = configureStore({
  reducer: {
    cartReducer: cartSlice,
    appConfigReducer:appConfigSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch