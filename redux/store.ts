import { configureStore } from '@reduxjs/toolkit'
import rootReducers from './reducers'
import { useDispatch } from "react-redux"

export const initializeStore = (preloadedState) => {
    return configureStore({
        reducer: rootReducers,
        preloadedState,
        devTools: true,
        // This statement turn off checking if any serializable value is assigned to redux state which can generate errors inside console
        // and make redux-toolkit hard to debug.
        // https://stackoverflow.com/questions/62241708/how-to-overcome-a-non-serializable-value-detection
        // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        //     serializableCheck: false
        // }),
    })
}

export type RootStore = ReturnType<typeof rootReducers>

export type AppDispatch = ReturnType<typeof initializeStore>

// Export a hook that can be reused to resolve types
export const useAppDispatch = () => useDispatch<AppDispatch>()


