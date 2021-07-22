import { configureStore } from '@reduxjs/toolkit';
import listProductsReducer from './listProducts';

const store = configureStore({
    reducer: {
        listProducts: listProductsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
