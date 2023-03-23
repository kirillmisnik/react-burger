import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React from "react";

import { BUN, MAIN, SAUCE } from '../../constants';
import { DataContext } from '../app/context/data-contex';
import Modal from '../modal/modal';
import OrderDetails from '../ingredient-details/ingredient-details';
import Card from './burger-ingredients-card/burger-ingredients-card';
import styles from './burger-ingredients.module.css';

const BurgerConstructor = () => {
    const data = React.useContext(DataContext);
    const [current, setCurrent] = React.useState(BUN);
    const [ingredient, setIngredient] = React.useState();

    const handleTab = (e) => {
        setCurrent(e);
        const element = document.getElementById(e);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleOpenModal = (ingredient) => {
        setIngredient(ingredient);
    }

    const handleCloseModal = () => {
        setIngredient(null);
    }

    return (
        <>
            {ingredient &&
                <Modal handleCloseModal={handleCloseModal} heading="Детали ингредиента">
                    <OrderDetails ingredient={ingredient} />
                </Modal>}
            <div className={styles.container}>
                <h1 className='text text_type_main-large'>
                    Соберите бургер
                </h1>
                <div style={{ display: 'flex' }}>
                    <Tab value={BUN} active={current === BUN} onClick={handleTab}>
                        Булки
                    </Tab>
                    <Tab value={SAUCE} active={current === SAUCE} onClick={handleTab}>
                        Соусы
                    </Tab>
                    <Tab value={MAIN} active={current === MAIN} onClick={handleTab}>
                        Начинки
                    </Tab>
                </div>
                <div className={styles.items}>
                    <div>
                        <div id={BUN} className={styles.menuSection}>
                            <p className='text text_type_main-medium'>Булки</p>
                        </div>
                        {data.filter(ingredient => ingredient.type === BUN)
                            .map((ingredient, index) => <div key={index} className={styles.menuItem} onClick={() => handleOpenModal(ingredient)}>
                                <Card ingredient={ingredient} /></div>)}
                    </div>
                    <div>
                        <div id={SAUCE} className={styles.menuSection}>
                            <p className='text text_type_main-medium'>Соусы</p>
                        </div>
                        {data.filter(ingredient => ingredient.type === SAUCE)
                            .map((ingredient, index) => <div key={index} className={styles.menuItem} onClick={() => handleOpenModal(ingredient)}>
                                <Card ingredient={ingredient} onClick={handleOpenModal} /></div>)}
                    </div>
                    <div>
                        <div id={MAIN} className={styles.menuSection}>
                            <p className='text text_type_main-medium'>Начинки</p>
                        </div>
                        {data.filter(ingredient => ingredient.type === MAIN)
                            .map((ingredient, index) => <div key={index} className={styles.menuItem} onClick={() => handleOpenModal(ingredient)}>
                                <Card ingredient={ingredient} onClick={handleOpenModal} /></div>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BurgerConstructor;