import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.module.css'

/**
 * Modal component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.isShowing - Flag indicating whether the modal is showing or not.
 * @param {Function} props.toggle - Function to toggle the modal.
 * @param {Function} props.closeModal - Function to close the modal.
 * @param {string} props.overlayClass - Additional CSS class for the modal overlay.
 * @param {string} props.modalClass - Additional CSS class for the modal.
 * @param {string} props.bodyClass - Additional CSS class for the modal body.
 * @param {string} props.btnClass - Additional CSS class for the modal button.
 * @param {ReactNode} props.children - The content of the modal body.
 * @param {ReactNode} props.btnChildren - The content of the modal button.
 * @returns {JSX.Element|null} The modal component.
 */

const Modal = ({
  isShowing,
  toggle,
  closeModal,
  overlayClass,
  modalClass,
  bodyClass,
  btnClass,
  children,
  btnChildren
}) => {
  const mergedOverlayClass = `${styles.modalOverlay} ${overlayClass}`
  const mergedModalClass = `${styles.modal} ${modalClass}`
  const mergedBodyClass = `${styles.modalBody} ${bodyClass}`
  const mergedBtnClass = `${styles.modalBtn} ${btnClass}`

  return isShowing
    ? ReactDOM.createPortal(
        <div
          className={mergedOverlayClass}
          onClick={(e) =>
            e.target === e.currentTarget && (toggle ? toggle() : closeModal())
          }
        >
          <section className={mergedModalClass}>
            <div className={mergedBodyClass}>{children}</div>
            <button
              type='button'
              className={mergedBtnClass}
              onClick={toggle || closeModal}
            >
              {btnChildren}
            </button>
          </section>
        </div>,
        document.body
      )
    : null
}

export default Modal
