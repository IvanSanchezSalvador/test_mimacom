import React from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { getFavorites } from 'store/listProducts';
import { formatCurrency } from 'utils';
import { Item } from 'lib';

export const Favorites = () => {
    const dispatch = useDispatch();
    const { favorites } = useSelector(
        (store: RootStateOrAny) => store.listProducts,
    );

    React.useEffect(() => {
        dispatch(getFavorites());
    }, [dispatch]);

    return (
        <div className='containerDrawer'>
            <div className='containerTitle'>
                <span className='titleDrawer'>Favorites</span>
            </div>
            <div className='containerList'>
                <div className='containerListItems'>
                    {favorites.map(
                        (
                            { image_url, productName, price }: Item,
                            index: number,
                        ) => (
                            <div
                                key={index}
                                className='itemsDrawer'
                                style={{ justifyContent: 'unset' }}
                            >
                                <div className='imageDrawer'>
                                    <img
                                        alt='itemDrawer'
                                        src={image_url}
                                    />
                                </div>
                                <div className='detailsItem'>
                                    <span>{productName}</span>
                                    <div className='totalPrice'>
                                        {formatCurrency(price)} $
                                    </div>
                                </div>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </div>
    );
};
