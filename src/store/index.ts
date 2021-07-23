import { configureStore } from '@reduxjs/toolkit';
import listProductsReducer from './listProducts';
import drawerReducer from './drawer';

const store = configureStore({
    reducer: {
        listProducts: listProductsReducer,
        drawer: drawerReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
