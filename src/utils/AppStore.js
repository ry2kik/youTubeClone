import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./NavSlice";
import SearchSlice from "./SearchSlice";
import ChatSlice from "./ChatSlice";

const AppStore = configureStore({
    reducer: {
        nav: NavSlice,
        search: SearchSlice,
        chat: ChatSlice,
    }
});

export default AppStore;