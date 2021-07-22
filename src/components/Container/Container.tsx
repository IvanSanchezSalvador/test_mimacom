import React from 'react';


import { CardItem } from 'UICommons';
import { Drawer } from '../Drawer';
import { Item } from 'lib';
import { useSelector, useDispatch } from 'react-redux';
import { getListProducts } from 'store/listProducts';
import { RootState } from 'store';
import './Container.scss';

export const Container = () => {
    const dispatch = useDispatch();

    const { listProducts } = useSelector(
        (store: RootState) => store.listProducts,
    );

    React.useEffect(() => {
        dispatch(getListProducts());
    }, [dispatch]);

    return (
        <div className='container'>
            <div className='items'>
                {listProducts.map((item: Item, index: number) => (
                    <div key={index} className='card'>
                        <CardItem {...item} />
                    </div>
                ))}
            </div>
            <Drawer />
        </div>
    );
};
