import { AiOutlineShoppingCart, AiFillStar } from 'react-icons/ai';
import { ButtonComponent } from 'UICommons';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { changeViewDrawer } from 'store/listProducts';
import { changeStatus } from 'store/drawer';
import './Header.scss';

export const Header = () => {
    const dispatch = useDispatch();
    const { basketProducts } = useSelector(
        (store: RootStateOrAny) => store.listProducts,
    );

    const changeDrawerView = (
        e: React.MouseEvent<Element, MouseEvent>,
    ) => {
        const { id } = e.currentTarget;
        dispatch(changeViewDrawer(id));
        dispatch(changeStatus(true));
    };

    return (
        <header data-testid='header'>
            <nav>
                <img
                    alt='mimacom'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZ34TJeDTM7xoBNN4WZozlnL_FbN3ArqJgM5K9PbadVoDKoPFlUtsaMSOrjSWutBfPIo&usqp=CAU'
                />
                <div className='containerButtons'>
                    <ButtonComponent
                        id={'favorites'}
                        icon={<AiFillStar />}
                        clickButton={changeDrawerView}
                        data-testid={'favorite'}
                    />
                    <div>
                        <span className='totalBasket'>{basketProducts.length}</span>
                        <ButtonComponent
                            id={'basket'}
                            icon={<AiOutlineShoppingCart />}
                            clickButton={changeDrawerView}
                            data-testid={'basket'}
                        />
                    </div>
                </div>
            </nav>
        </header>
    );
};
