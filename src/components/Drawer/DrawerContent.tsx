import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Item } from 'lib';
import { formatCurrency } from 'utils';
import { BasketItems } from './BasketItems';
import { Favorites } from './Favorites';
import { updateStock } from 'store/listProducts';

import { useDispatch } from 'react-redux';

import './Drawer.scss';

const calculateTotalBasket = (basketProducts: Item[]) => {
    const total = basketProducts.reduce(
        (previousValue: number, currentValue: Item) => {
            const value = currentValue.quantity! * currentValue.price;
            previousValue += value;

            return previousValue;
        },
        0,
    );
    return formatCurrency(total);
};

export const DrawerContent = () => {
    const dispatch = useDispatch();

    const { basketProducts, drawerView } = useSelector(
        (store: RootStateOrAny) => store.listProducts,
    );

    const checkoutBasket = (e: React.MouseEvent<Element, MouseEvent>) => {
        dispatch(updateStock());
    };

    return (
        <React.Fragment>
            {/basket/.test(drawerView) ? (
                <div className='containerDrawer'>
                    <div className='containerTitle'>
                        <span className='titleDrawer'>{`(${basketProducts.length}) Items in basket`}</span>
                    </div>
                    <div className='containerList'>
                        <BasketItems basketProducts={basketProducts} />
                    </div>
                    <div className='containerCheckout'>
                        <button onClick={checkoutBasket}>
                            Checkout {calculateTotalBasket(basketProducts)}
                            $
                        </button>
                    </div>
                </div>
            ) : (
                <Favorites />
            )}
        </React.Fragment>
    );
};
