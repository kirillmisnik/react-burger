import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from "react";

import { BUN } from '../../constants';
import { DataContext } from '../app/context/data-contex';
import Modal from '../modal/modal';
import IngredientDetails from '../order-details/order-details';
import styles from './burger-constructor.module.css';

const initialState = { total: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return { total: state.total + action.price };
        case "reset":
            return { total: 0 };
        default:
            throw new Error(`Wrong type of action: ${action.type}`);
    }
}

const BurgerIngredients = () => {
    const data = React.useContext(DataContext);
    const [buns, setBuns] = React.useState([]);
    const [visible, setVisible] = React.useState(false);
    const [orderNumber, setOrderNumber] = React.useState(0);
    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useMemo(() => {
        setBuns(data.find(ingredient => ingredient.type === BUN));
        dispatch({ type: "reset" });
        data.map((ingredient) => dispatch({ type: "add", price: ingredient.price }));
    }, [data])

    const handleOpenModal = () => {
        makeOrder();
        setVisible(true);
    };

    const handleCloseModal = () => {
        setVisible(false);
    };

    const makeOrder = () => {
        fetch('https://norma.nomoreparties.space/api/orders', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ingredients: data.map((ingredient) => ingredient._id)
            })
        })
            .then(res => res.ok ? res.json() : res.json().then((err) => Promise.reject(err)))
            .then(orderNumber => {
                setOrderNumber(orderNumber.order.number);
            })
    }

    return (
        <>
            {visible &&
                <Modal handleCloseModal={handleCloseModal}>
                    <IngredientDetails orderNumber={orderNumber} />
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
                        {data.filter(ingredient => ingredient.type !== BUN)
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
                            {state.total}
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

export default BurgerIngredients;