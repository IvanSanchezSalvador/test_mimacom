import { Item } from 'lib';

import { removeUnit, addUnit } from 'store/listProducts';
import { useDispatch } from 'react-redux';
import { ButtonComponent } from 'UICommons';

import { formatCurrency } from 'utils';

export const BasketItems = (props: { basketProducts: Item[] }) => {
    const { basketProducts } = props;
    const dispatch = useDispatch();

    const removeUnitClick = (e: React.MouseEvent<Element, MouseEvent>) => {
        const { id } = e.currentTarget;
        dispatch(removeUnit(id));
    };

    const addUnitClick = (e: React.MouseEvent<Element, MouseEvent>) => {
        const { id } = e.currentTarget;
        dispatch(addUnit(id));
    };

    return (
        <div className='containerListItems'>
            {basketProducts?.map(
                (
                    { id, image_url, productName, price, quantity }: Item,
                    index: number,
                ) => (
                    <div key={index} className='itemsDrawer'>
                        <div className='imageDrawer'>
                            <img alt='itemDrawer' src={image_url} />
                        </div>
                        <div className='detailsItem'>
                            <span>{productName}</span>
                            <div className='buttonsActions'>
                                <ButtonComponent id={id} text={'-'} clickButton={removeUnitClick} />
                                <input
                                    value={quantity}
                                    disabled
                                    type='text'
                                />
                                <ButtonComponent id={id} text={'+'} clickButton={addUnitClick} />
                            </div>
                        </div>
                        <div className='totalPrice'>
                            {formatCurrency(price * quantity!)} $
                        </div>
                    </div>
                ),
            )}
        </div>
    );
};
