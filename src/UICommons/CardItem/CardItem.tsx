import './CardItem.scss';

type Item = {
    id: string;
    image: string;
    stock: number;
    productName: string;
    price: number;
    productDescription: string;
    favorite: string | number;
};

export const CardItem = (data: Item) => {
    const {
        id,
        image,
        stock,
        productName,
        price,
        productDescription,
        favorite,
    } = data;
    return (
        <div className='cardContainer'>
            <img alt='card' src={image} />
            <div className='detailsItem'>
                <div className='containerNameItem'>
                    <span className='nameItem'>{productName}</span>
                    <span className='priceItem'>{price}</span>
                </div>
                <div className="productDescription">{productDescription}</div>
            </div>
        </div>
    );
};
