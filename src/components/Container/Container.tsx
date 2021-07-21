import { CardItem } from 'UICommons';
import './Container.scss';

type Item = {
    id: string;
    image: string;
    stock: number;
    productName: string;
    price: number;
    productDescription: string;
    favorite: string | number;
};

const mock = [
    {
        id: '1',
        image: 'https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair',
        stock: 8,
        productName: 'Unbranded Metal chair',
        price: 43,
        productDescription: 'Description',
        favorite: 1,
    },
    {
        id: '1',
        image: 'https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair',
        stock: 8,
        productName: 'Unbranded Metal chair',
        price: 43,
        productDescription: 'Description',
        favorite: 1,
    },
];

export const Container = () => {
    return (
        <div className='container'>
            {mock.map((item: Item, index: number) => (
                <div key={index} className='card'>
                    <CardItem {...item} />
                </div>
            ))}
        </div>
    );
};
