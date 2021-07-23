import { createSlice } from '@reduxjs/toolkit';
import { InitialTypeDrawer } from 'lib';

const initialState: InitialTypeDrawer = {
    drawer: false,
};

export const drawerStatus = createSlice({
    name: 'drawer',
    initialState: initialState,
    reducers: {
        changeStatus: (state, { payload }) => {
            state.drawer = payload;
        },
    },
});

export const { changeStatus } = drawerStatus.actions;

export default drawerStatus.reducer;
