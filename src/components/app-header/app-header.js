import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css';

function AppHeader() {

    return (
        <header className={styles.header}>
            <div className={styles.menuBlockLeft}>
                <button className={styles.menuItem}>
                    <BurgerIcon type="primary" />
                    <span className="text text_type_main-default">
                        Конструктор
                    </span>
                </button>
                <button className={styles.menuItem}>
                    <ListIcon type="secondary" />
                    <span className="text text_type_main-default text_color_inactive">
                        Лента заказов
                    </span>
                </button>
            </div>
            <Logo className={styles.logo} />
            <div className={styles.menuBlockRight}>
                <button className={styles.menuItem}>
                    <ProfileIcon type="secondary" />
                    <span className="text text_type_main-default text_color_inactive">
                        Личный кабинет
                    </span>
                </button>
            </div>
        </header>
    )
}

export default AppHeader;
