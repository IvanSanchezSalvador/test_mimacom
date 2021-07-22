import './ButtonComponent.scss';

type ButtonType = {
    text?: string;
    icon?: Object;
    disabled?: boolean;
    clickButton?: React.MouseEventHandler<HTMLButtonElement>;
    id?: string;
};

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
