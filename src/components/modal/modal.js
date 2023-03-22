import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.css';

const Modal = ( {children, handleCloseModal, heading} ) => {
    return (
        <>
            <ModalOverlay handleCloseModal={handleCloseModal}></ModalOverlay>
            <div className={styles.container}>
                <p className="text text_type_main-medium" style={{ display: 'contents' }}>
                    {heading}
                </p>
                <div className={styles.closeIcon}>
                    <CloseIcon type="primary" onClick={() => handleCloseModal()} />
                </div>
                {children}
            </div>
        </>
    )
}

Modal.propTypes = {
    handleCloseModal: PropTypes.func.isRequired,
    heading: PropTypes.string
}

export default Modal;