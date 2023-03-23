import PropTypes from 'prop-types';

import styles from './order-details.module.css';

const OrderDetails = ({ ingredient }) => {

    return (
        <div className={styles.container}>
            <img className={styles.image} src={ingredient.image} alt='ingredient' />
            <p className="text text_type_main-medium">{ingredient.name}</p>
            <div className={styles.info}>
                <div className={styles.infoItem}>
                    <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredient.calories}</p>
                </div>
                <div className={styles.infoItem}>
                    <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</p>
                </div>
                <div className={styles.infoItem}>
                    <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredient.fat}</p>
                </div>
                <div className={styles.infoItem}>
                    <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</p>
                </div>
            </div>
        </div>
    )
}

OrderDetails.propTypes = {
    ingredient: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired
    }).isRequired,
}

export default OrderDetails;