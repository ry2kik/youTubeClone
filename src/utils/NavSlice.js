import { createSlice } from "@reduxjs/toolkit";

const NavSlice = createSlice({
    name: 'nav',
    initialState: {
        isMenuOpen: true
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },

        closeMenu: (state) => {
            state.isMenuOpen = false;
        }
    }
});

export default NavSlice.reducer;
export const { toggleMenu, closeMenu } = NavSlice.actions;