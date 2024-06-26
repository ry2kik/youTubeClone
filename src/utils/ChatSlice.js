import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./Constant";

const ChatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.splice(OFFSET_LIVE_CHAT, 1);
            state.messages.unshift(action.payload);
        }
    }
})

export default ChatSlice.reducer;
export const { addMessage } = ChatSlice.actions;