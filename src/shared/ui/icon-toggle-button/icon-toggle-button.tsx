import type { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './icon-toggle-button.module.css';
import { preload } from 'react-dom';

type IconToggleButtonProps = {
    label: string;
    active?: boolean;
    disableHover?: boolean;
    iconSrc: string;
    iconClassName?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label' | 'aria-pressed' | 'children'>;

preload("/icons/toggle_off.svg", { as: 'image' });
preload("/icons/toggle_on.svg", { as: 'image' });

const IconToggleButton = ({
    type = 'button',
    label,
    active = false,
    iconSrc,
    className,
    disableHover = false,
    iconClassName,
    ...props
}: IconToggleButtonProps) => {
    return (
        <button
            type={type}
            title={label}
            aria-label={label}
            aria-pressed={active}
            className={clsx(
                styles.root,
                active && styles.rootActive,
                disableHover && styles.hoverDisabled,
                className,
            )}
            {...props}
        >
            <img
                alt=""
                aria-hidden="true"
                className={clsx(styles.icon, iconClassName)}
                src={iconSrc}
            />
        </button>
    );
};

export default IconToggleButton;
