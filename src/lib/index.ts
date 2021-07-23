export type Item = {
    id: string;
    image_url: string;
    stock: number;
    productName: string;
    price: number;
    productDescription: string;
    favorite: string | number;
    quantity?: number;
};

export type InitialTypeDrawer = {
    drawer: boolean;
};

export type ThunkApi = {
    dispatch: Function;
    getState: Function;
    extra?: any;
    requestId: string;
    signal: AbortSignal;
};

export type InitialListProducts = {
    listProducts: Item[];
    basketProducts: Item[];
    drawerView: string;
    favorites: Item[];
};

export type ButtonType = {
    text?: string;
    icon?: Object;
    disabled?: boolean;
    clickButton?: React.MouseEventHandler<HTMLButtonElement>;
    id?: string;
};

export type ToogleType = {
    active: boolean;
};
