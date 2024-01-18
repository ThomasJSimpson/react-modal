import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.module.css'

const Modal = ({
  isShowing,
  toggle,
  overlayClass,
  modalClass,
  modalHeaderClass,
  headerBtnClass,
  headerBtnIconClass,
  bodyClass,
  children
}) => {
  const mergedModalClass = `${styles.modal} ${modalClass}`
  const mergedOverlayClass = `${styles.modalOverlay} ${overlayClass}`
  const mergedBodyClass = `${styles.modalBody} ${bodyClass}`
  const mergedHeaderClass = `${styles.modalHeader} ${modalHeaderClass}`
  const mergedHeaderBtnClass = `${styles.modalHeaderBtn} ${headerBtnClass}`
  const mergedHeaderBtnIconClass = `${styles.modalHeaderBtnIcon} ${headerBtnIconClass}`

  return isShowing
    ? ReactDOM.createPortal(
        <div
          className={mergedOverlayClass}
          onClick={(e) => e.target === e.currentTarget && toggle()}
        >
          <section className={mergedModalClass}>
            <div className={mergedHeaderClass}>
              <button type='button' className={mergedHeaderBtnClass}>
                <span onClick={toggle} className={mergedHeaderBtnIconClass}>
                  &#x2715;
                </span>
              </button>
            </div>
            <div className={mergedBodyClass}>{children}</div>
          </section>
        </div>,
        document.body
      )
    : null
}
export default Modal
