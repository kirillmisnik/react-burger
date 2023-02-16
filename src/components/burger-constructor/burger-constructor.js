import React from "react";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Card from './burger-constructor-card/burger-constructor-card';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import styles from './burger-constructor.module.css';

const BurgerConstructor = ({ data }) => {
    const [current, setCurrent] = React.useState('bun');
    const [visible, setVisible] = React.useState(false);
    const [ingredient, setIngredient] = React.useState({});

    const handleTab = (e) => {
        setCurrent(e);
        const element = document.getElementById(e);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleOpenModal = (ingredient) => {
        setVisible(true);
        setIngredient(ingredient);
    }
    
    const handleCloseModal = () => {
        setVisible(false);
    }

    return (
        <>
            {visible && 
                <Modal handleCloseModal={handleCloseModal} heading="Детали ингредиента">
                    <OrderDetails ingredient={ingredient} />
                </Modal>}
            <div className={styles.container}>
                <h1 className='text text_type_main-large'>
                    Соберите бургер
                </h1>
                <div style={{ display: 'flex' }}>
                    <Tab value='bun' active={current === 'bun'} onClick={handleTab}>
                        Булки
                    </Tab>
                    <Tab value='sauce' active={current === 'sauce'} onClick={handleTab}>
                        Соусы
                    </Tab>
                    <Tab value='main' active={current === 'main'} onClick={handleTab}>
                        Начинки
                    </Tab>
                </div>
                <div className={styles.items}>
                    <div>
                        <div id='bun' className={styles.menuSection}>
                            <p className='text text_type_main-medium'>Булки</p>
                        </div>
                        {data.filter(ingredient => ingredient.type === 'bun')
                            .map((ingredient, index) => <div key={index} className={styles.menuItem} onClick={() => handleOpenModal(ingredient)}>
                                <Card ingredient={ingredient} /></div>)}
                    </div>
                    <div>
                        <div id='sauce' className={styles.menuSection}>
                            <p className='text text_type_main-medium'>Соусы</p>
                        </div>
                        {data.filter(ingredient => ingredient.type === 'sauce')
                            .map((ingredient, index) => <div key={index} className={styles.menuItem} onClick={() => handleOpenModal(ingredient)}>
                                <Card ingredient={ingredient} onClick={handleOpenModal} /></div>)}
                    </div>
                    <div>
                        <div id='main' className={styles.menuSection}>
                            <p className='text text_type_main-medium'>Начинки</p>
                        </div>
                        {data.filter(ingredient => ingredient.type === 'main')
                            .map((ingredient, index) => <div key={index} className={styles.menuItem} onClick={() => handleOpenModal(ingredient)}>
                                <Card ingredient={ingredient} onClick={handleOpenModal} /></div>)}
                    </div>
                </div>
            </div>
        </>
    )
}

BurgerConstructor.propTypes = {
    data: PropTypes.array
}

export default BurgerConstructor;