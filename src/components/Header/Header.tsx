import './Header.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ButtonComponent } from 'UICommons';

export const Header = () => {
    return (
        <header>
            <nav>
                <img
                    alt='mimacom'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZ34TJeDTM7xoBNN4WZozlnL_FbN3ArqJgM5K9PbadVoDKoPFlUtsaMSOrjSWutBfPIo&usqp=CAU'
                />
                <ButtonComponent icon={<AiOutlineShoppingCart />} />
            </nav>
        </header>
    );
};
