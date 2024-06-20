import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name: 'search',
    initialState: {
        
    },
    reducers: {
        cacheResults: (state, action) => {
            state = Object.assign(state, action.payload)
        },

        // clearCache: (state, action) => {
        //     state.initialState.length = 0;
        // }
    }
})

export default SearchSlice.reducer;
export const { cacheResults } = SearchSlice.actions;