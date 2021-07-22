import { ButtonComponent, ToogleButton } from 'UICommons';
import { AiOutlinePlus } from 'react-icons/ai';
import { Item } from 'lib';
import { formatCurrency } from 'utils';

import { addBasketItem } from 'store/listProducts';
import { useDispatch } from 'react-redux';

import './CardItem.scss';

export const CardItem = ({
    id,
    image_url,
    stock,
    productName,
    price,
    productDescription,
    favorite,
}: Item) => {
    const dispatch = useDispatch();

    const existStock = stock > 0 ? true : false;
    const isFavorite = favorite === '1' ? true : false;

    const clickButtonAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { id } = e.currentTarget as HTMLButtonElement;
        dispatch(addBasketItem(id));
    };

    return (
        <div className='cardContainer'>
            <div
                className={`favoriteButton ${
                    isFavorite ? 'isFavorite' : ''
                }`}
            >
                <ToogleButton active={true} />
            </div>
            <img alt='card' src={image_url} />
            <div className='detailsItem'>
                <div className='containerNameItem'>
                    <span className='nameItem'>{productName}</span>
                    <span className='priceItem'>
                        {formatCurrency(price)}$
                    </span>
                </div>
                <div className='productDescription'>
                    {productDescription}
                </div>
                <div className='containerFooter'>
                    <span
                        className={`stockItem ${
                            !existStock ? 'noStock' : ''
                        }`}
                    >{`${stock} left`}</span>
                    <ButtonComponent
                        text={'Add'}
                        icon={<AiOutlinePlus />}
                        disabled={!existStock}
                        clickButton={clickButtonAdd}
                        id={id}
                    />
                </div>
            </div>
        </div>
    );
};
