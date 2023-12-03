import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/dashboard/stateSlice'
export const store = configureStore({
    reducer: {
        userReducer
    },
})