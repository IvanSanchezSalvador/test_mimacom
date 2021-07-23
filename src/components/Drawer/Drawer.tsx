import React from 'react';
import { DrawerContent } from './DrawerContent';
import { ButtonComponent } from 'UICommons';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatus } from 'store/drawer';
import { RootState } from 'store';
import './Drawer.scss';

export const Drawer = () => {
    const dispatch = useDispatch();
    const { drawer } = useSelector((store: RootState) => store.drawer);

    const openCloseDrawer = () => {
        dispatch(changeStatus(!drawer));
    };

    return (
        <nav className={`drawer ${drawer ? 'open' : 'close'}`}>
            <div className='closeButton'>
                <ButtonComponent
                    icon={<AiOutlineClose />}
                    clickButton={openCloseDrawer}
                />
            </div>
            <DrawerContent />
        </nav>
    );
};
