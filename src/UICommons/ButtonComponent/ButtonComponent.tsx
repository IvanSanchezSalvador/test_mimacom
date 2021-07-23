import './ButtonComponent.scss';
import { ButtonType } from 'lib';

export const ButtonComponent = ({
    text,
    icon,
    disabled,
    clickButton,
    id,
}: ButtonType) => {
    return (
        <button
            className='button'
            disabled={disabled}
            onClick={clickButton}
            id={id}
        >
            {text}
            {icon}
        </button>
    );
};
