import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './app-header.module.css';

function AppHeader() {

    return (
        <header className={styles.header}>
            <div className={styles.menuBlockLeft}>
                <a href='/' className={styles.menuItem}>
                    <BurgerIcon type="primary" />
                    <span className="text text_type_main-default">
                        Конструктор
                    </span>
                </a>
                <a href='/' className={styles.menuItem}>
                    <ListIcon type="secondary" />
                    <span className="text text_type_main-default text_color_inactive">
                        Лента заказов
                    </span>
                </a>
            </div>
            <Logo className={styles.logo} />
            <div className={styles.menuBlockRight}>
                <a href='/' className={styles.menuItem}>
                    <ProfileIcon type="secondary" />
                    <span className="text text_type_main-default text_color_inactive">
                        Личный кабинет
                    </span>
                </a>
            </div>
        </header>
    )
}

export default AppHeader;
