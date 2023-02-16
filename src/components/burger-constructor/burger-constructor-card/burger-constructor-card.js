import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor-card.module.css';
import PropTypes from 'prop-types'

const Card = ( {ingredient} ) => {
    return (
        <div className={styles.card}>
            <img src={ingredient.image} />
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
    ingredient: PropTypes.object
}

export default Card;