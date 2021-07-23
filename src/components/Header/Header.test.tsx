import { Header } from '.';
import { render, screen } from '@testing-library/react';

import * as reactRedux from 'react-redux';

const mockData = {
    listProducts: [
        {
            favorite: '1',
            id: '41fd4fd9-95c7-4809-96db-a147d352fdbb',
            image_url:
                'https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair',
            price: 43,
            productDescription:
                'Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.',
            productName: 'Unbranded Metal Chair',
            stock: 8,
        },
    ],
    basketProducts: [
        {
            favorite: '1',
            id: '41fd4fd9-95c7-4809-96db-a147d352fdbb',
            image_url:
                'https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair',
            price: 43,
            productDescription:
                'Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.',
            productName: 'Unbranded Metal Chair',
            stock: 8,
        },
    ],
    drawerView: 'basket',
    favorites: [],
};

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

describe('Header Test', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

    beforeEach(() => {
        useSelectorMock.mockClear();
        useDispatchMock.mockClear();

        useSelectorMock.mockReturnValue(mockData);
    });

    test('Header rendered correctly', async () => {
        render(<Header />);

        const header = await screen.findByTestId('header');

        expect(header).toBeInTheDocument();
    });

    test('Header rendered two buttons', async () => {
        const component = render(<Header />);

        const buttons =
            component.container.querySelectorAll('button').length;

        expect(buttons).toEqual(2);
    });
});
