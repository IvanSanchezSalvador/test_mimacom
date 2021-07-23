import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { ToogleType } from 'lib';

export const ToogleButton = ({ active }: ToogleType) => {
    return (
        <React.Fragment>
            {active ? <AiOutlineHeart /> : <AiFillHeart />}
        </React.Fragment>
    );
};
