import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import styles from './container.module.css';

type ContainerProps<T extends ElementType = 'div'> = {
    as?: T;
    children: ReactNode;
    className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

const Container = <T extends ElementType = 'div'>({
    as,
    children,
    className,
    ...props
}: ContainerProps<T>) => {
    const Component = as ?? 'div';
    const rootClassName = className ? `${styles.root} ${className}` : styles.root;

    return (
        <Component className={rootClassName} {...props}>
            {children}
        </Component>
    );
};

export default Container;
