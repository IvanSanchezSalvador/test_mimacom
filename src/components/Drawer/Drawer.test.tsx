import { Drawer } from '.';
import { render } from '@testing-library/react';

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
    useDispatch: () => jest.fn(),
    dispatch: jest.fn(),
}));

describe('Drawer Test', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

    beforeEach(() => {
        useSelectorMock.mockClear();

        useSelectorMock.mockReturnValue({
            drawer: true,
            favorites: mockData.basketProducts,
        });
    });

    test('By default should be hide', async () => {
        const component = render(<Drawer />);

        expect(
            component.container
                .querySelector('nav')
                ?.classList.contains('open'),
        ).toBe(true);
    });

    test('When change status open drawer', async () => {
        const component = render(<Drawer />);

        useSelectorMock.mockImplementation((callback) => {
            return callback({
                drawer: false,
                drawerView: 'basket',
                basketProducts: mockData.basketProducts,
            });
        });

        expect(
            component.container
                .querySelector('nav')
                ?.classList.contains('open'),
        ).toBe(true);
    });
});
