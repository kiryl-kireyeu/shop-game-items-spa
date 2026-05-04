import styles from './page-title.module.css';

type PageTitleProps = {
    title: string;
};

const PageTitle = ({ title }: PageTitleProps) => {
    return <h1 className={styles.root}>{title}</h1>;
};

export default PageTitle;
