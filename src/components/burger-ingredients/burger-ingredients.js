import React from "react";
import { Button, CurrencyIcon, ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import styles from './burger-ingredients.module.css';

const BurgerIngredients = ({ data }) => {
    const [buns, setBuns] = React.useState([]);
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        setBuns(data.find(ingredient => ingredient.type === 'bun'));
    }, [data])

    const handleOpenModal = () => {
        setVisible(true);
    };
    
    const handleCloseModal = () => {
        setVisible(false);
    };

    return (
        <>
            {visible && 
                <Modal handleCloseModal={handleCloseModal}>
                    <IngredientDetails />
                </Modal>}
            <div className={styles.container}>
                <div>
                    <div className={styles.bunItem}>
                        <ConstructorElement
                            type='top'
                            isLocked={true}
                            text={buns.name + " (верх)"}
                            price={buns.price}
                            thumbnail={buns.image}
                        />
                    </div>
                    <div className={styles.items}>
                        {data.filter(ingredient => ingredient.type !== 'bun')
                            .map((ingredient, index) => 
                            <div key={index}>
                                <DragIcon type="primary" />
                                <ConstructorElement
                                    isLocked={false}
                                    text={ingredient.name}
                                    price={ingredient.price}
                                    thumbnail={ingredient.image}
                                />
                            </div>
                        )}
                    </div>
                    <div className={styles.bunItem}>
                        <ConstructorElement
                            type='bottom'
                            isLocked={true}
                            text={buns.name + " (низ)"}
                            price={buns.price}
                            thumbnail={buns.image}
                        />
                    </div>
                </div>
                <div className={styles.order}>
                    <div className={styles.orderPrice}>
                        <p className="text text_type_digits-medium">
                            999
                        </p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button htmlType="button" type="primary" size="large" onClick={handleOpenModal}>
                        Оформить заказ
                    </Button>
                </div>
            </div>
        </>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.array
}

export default BurgerIngredients;