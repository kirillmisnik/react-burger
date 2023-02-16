import styles from './ingredient-details.module.css';

const IngredientDetails = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoItem}>
                <p className="text text_type_digits-large">034536</p>
                <p className="text text_type_main-medium">идентификатор заказа</p>
            </div>
            <img src = "/accept.svg"/>
            <div className={styles.infoItem}>
                <p className="text text_type_main-default">Ваш заказ начали готовить</p>
                <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
            </div>
        </div>
    )

}

export default IngredientDetails;