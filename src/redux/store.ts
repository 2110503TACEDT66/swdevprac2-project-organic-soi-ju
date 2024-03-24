import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import shopSlice from "./features/shopSlice";
import { useSelector, TypedUseSelectorHook } from "react-redux";

const persistConfig = {
    key: "rootPersist",
    storage
};

const rootReducer = combineReducers({shopSlice});
const reduxPersistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer:{
        reduxPersistedReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;