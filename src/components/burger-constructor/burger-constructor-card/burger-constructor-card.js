import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types'

import styles from './burger-constructor-card.module.css';

const Card = ({ ingredient }) => {
    return (
        <div className={styles.card}>
            <img src={ingredient.image} alt='ingredient' />
            <div className={styles.price}>
                <p className='text text_type_digits-default'>
                    {ingredient.price}
                </p>
                <CurrencyIcon type='primary' />
            </div>
            <p className='text text_type_main-default'>
                {ingredient.name}
            </p>
        </div>
    )
}

Card.propTypes = {
    ingredient: PropTypes.shape({
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired
}

export default Card;