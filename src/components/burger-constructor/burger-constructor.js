import React from "react";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { BUN, SAUCE, MAIN } from '../../constants';
import Card from './burger-constructor-card/burger-constructor-card';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import styles from './burger-constructor.module.css';

const BurgerConstructor = ({ data }) => {
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

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default BurgerConstructor;