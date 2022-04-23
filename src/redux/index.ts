import { reduxBatch } from '@manaflair/redux-batch'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { load, save } from "redux-localstorage-simple"
import vault from './vault/reducers'


const PERSISTED_KEYS: string[] = []
const devTools = process.env.NODE_ENV === 'development'
const store = configureStore({
  devTools,
  reducer: {
    vault,
  },
  middleware: [
    ...getDefaultMiddleware({ thunk: true ,serializableCheck: false }), 
    save({ states: PERSISTED_KEYS })],
  enhancers: [reduxBatch],
  preloadedState: load({ states: PERSISTED_KEYS }),
})


/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
