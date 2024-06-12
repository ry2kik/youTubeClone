import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./NavSlice";

const AppStore = configureStore({
    reducer: {
        nav: NavSlice
    }
});

export default AppStore;