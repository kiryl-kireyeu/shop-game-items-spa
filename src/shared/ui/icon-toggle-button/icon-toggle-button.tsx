import type { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './icon-toggle-button.module.css';

type IconToggleButtonProps = {
    label: string;
    iconSrc: string;
    active?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label' | 'aria-pressed' | 'children'>;

const IconToggleButton = ({
    iconSrc,
    label,
    active = false,
    className,
    type = 'button',
    ...props
}: IconToggleButtonProps) => {
    return (
        <button
            type={type}
            title={label}
            aria-label={label}
            aria-pressed={active}
            className={clsx(styles.root, active && styles.rootActive, className)}
            {...props}
        >
            <img alt="icon" aria-hidden="true" className={styles.icon} src={iconSrc} />
        </button>
    );
};

export default IconToggleButton;
