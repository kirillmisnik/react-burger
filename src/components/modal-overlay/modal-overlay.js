import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal-overlay.module.css';

const ModalOverlay = ( {handleCloseModal} ) => {

    React.useEffect(() => {
        const keyDownCallback = function(e) {
            e = e || window.event;
            var isEscape = false;
            if ("key" in e) {
                isEscape = (e.key === "Escape" || e.key === "Esc");
            } else {
                isEscape = (e.keyCode === 27);
            }
            if (isEscape) {
                handleCloseModal();
            }
        };

        document.addEventListener("keydown", keyDownCallback);

        return () => document.removeEventListener("keydown", keyDownCallback);
    }, [handleCloseModal])

    return (
        <div className={styles.container} onClick={() => handleCloseModal()} />
    )
}

ModalOverlay.propTypes = {
    handleCloseModal: PropTypes.func.isRequired
}

export default ModalOverlay;