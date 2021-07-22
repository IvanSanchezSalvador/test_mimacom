import { DrawerContent } from './DrawerContent';
import './Drawer.scss';


export const Drawer = () => {
    return (
        <nav className='drawer open'>
            <DrawerContent />
        </nav>
    );
};
