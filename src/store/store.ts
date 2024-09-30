import { configureStore } from '@reduxjs/toolkit'
import navigationReducer from './reducers/navigationReducer'
import userReducer from './reducers/userReducer'

export const store = configureStore({
    reducer: {
      navigation: navigationReducer,
      user: userReducer
    }
  })
  
  export type RootState = ReturnType<typeof store.getState>

  export type AppDispatch = typeof store.dispatch
  export type AppStore = typeof store