import PropTypes from 'prop-types'

import styles from './ingredient-details.module.css';

const IngredientDetails = ({ orderNumber }) => {
    return (
        <div className={styles.container}>
            <div className={styles.infoItem}>
                <p className="text text_type_digits-large">{orderNumber}</p>
                <p className="text text_type_main-medium">идентификатор заказа</p>
            </div>
            <img src="/accept.svg" alt="accept" />
            <div className={styles.infoItem}>
                <p className="text text_type_main-default">Ваш заказ начали готовить</p>
                <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
            </div>
        </div>
    )

}

IngredientDetails.propTypes = {
    orderNumber: PropTypes.number.isRequired
}

export default IngredientDetails;