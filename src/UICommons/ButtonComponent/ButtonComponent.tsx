import './ButtonComponent.scss';

type ButtonType = {
    text?: string;
    icon?: Object;
};
export const ButtonComponent = ({ text, icon }: ButtonType) => {
    return (
        <button className='button'>
            {text} {icon}
        </button>
    );
};
