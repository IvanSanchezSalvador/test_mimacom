import './Header.scss';
import { AiOutlineShoppingCart, AiFillStar } from 'react-icons/ai';
import { ButtonComponent } from 'UICommons';
import { useDispatch } from 'react-redux';
import { changeViewDrawer } from 'store/listProducts';

export const Header = () => {
    const dispatch = useDispatch();

    const changeDrawerView = (
        e: React.MouseEvent<Element, MouseEvent>,
    ) => {
        const { id } = e.currentTarget;
        dispatch(changeViewDrawer(id));
    };

    return (
        <header>
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
                    />
                    <ButtonComponent
                        id={'basket'}
                        icon={<AiOutlineShoppingCart />}
                        clickButton={changeDrawerView}
                    />
                </div>
            </nav>
        </header>
    );
};
