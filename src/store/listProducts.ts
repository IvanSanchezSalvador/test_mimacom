import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Item } from 'lib';

export const getListProducts = createAsyncThunk(
    'listProducts/getListProducts',
    async () => {
        const response = await fetch('http://localhost:3000/grocery', {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        });
        if (response.ok) {
            return await response.json();
        }
    },
);

export const getFavorites = createAsyncThunk(
    'listProducts/getFavorites',
    async () => {
        const response = await fetch(
            'http://localhost:3000/grocery?favorite=1',
            {
                method: 'GET',
                headers: { 'Access-Control-Allow-Credentials': 'true' },
            },
        );
        if (response.ok) {
            return await response.json();
        }
    },
);

export const updateStock = createAsyncThunk(
    'listProducts/updateStock',
    async () => {
        
    },
)

const addRemoveUnit = (
    state: InitialType,
    payload: string,
    addRemoveAction: string,
) => {
    const itemBasket = state.basketProducts.find(
        (basket) => basket.id === payload,
    )!;
    const indexItem = state.basketProducts.findIndex(
        (basket) => basket.id === payload,
    );

    const units =
        addRemoveAction === 'add'
            ? ++itemBasket.quantity!
            : (itemBasket.quantity = --itemBasket.quantity!);
    if (units >= 1) {
        itemBasket.quantity = units;
        return (state.basketProducts[indexItem] = itemBasket);
    } else {
        return state.basketProducts.splice(indexItem, 1);
    }
};

type InitialType = {
    listProducts: Item[];
    basketProducts: Item[];
    loading: boolean;
    drawerView: string;
    favorites: Item[];
};

const initialState: InitialType = {
    listProducts: [],
    basketProducts: [],
    loading: false,
    drawerView: 'basket',
    favorites: [],
};

export const listProducts = createSlice({
    name: 'listProducts',
    initialState: initialState,
    reducers: {
        addBasketItem: (state, { payload }) => {
            const itemBasket = state.basketProducts.find(
                (basket) => basket.id === payload,
            );
            const selected = state.listProducts.find(
                (todo) => todo.id === payload,
            )!;
            if (!itemBasket) {
                selected.quantity = 1;
                state.basketProducts.push(selected);
            } else {
                const indexItem = state.basketProducts.findIndex(
                    (basket) => basket.id === payload,
                );
                itemBasket.quantity = ++itemBasket.quantity!;
                state.basketProducts[indexItem] = itemBasket;
            }
        },
        removeUnit: (state, { payload }) => {
            addRemoveUnit(state, payload, 'remove');
        },
        addUnit: (state, { payload }) => {
            addRemoveUnit(state, payload, 'add');
        },
        changeViewDrawer: (state, { payload }) => {
            state.drawerView = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            getListProducts.fulfilled,
            (state, { payload }) => {
                state.listProducts = payload;
            },
        );
        builder.addCase(getFavorites.fulfilled, (state, { payload }) => {
            state.favorites = payload;
        });
    },
});

export const { addBasketItem, removeUnit, addUnit, changeViewDrawer } =
    listProducts.actions;

export default listProducts.reducer;
