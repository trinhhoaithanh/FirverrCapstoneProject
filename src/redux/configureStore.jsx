import {configureStore} from '@reduxjs/toolkit'
import popularReducer from './reducers/popularReducer'
import userReducer from './reducers/userReducer'
export const store = configureStore({
    reducer:{
        userReducer:userReducer,
        popularReducer:popularReducer
    }
})