import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.module.css'

/**
 * Modal est un composant qui affiche une fenêtre modale.
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {boolean} props.isShowing - Indique si la fenêtre modale est affichée.
 * @param {Function} props.toggle - Une fonction qui permet de basculer l'affichage de la fenêtre modale.
 * @param {string} props.overlayClass - La classe CSS à appliquer à l'overlay.
 * @param {string} props.modalClass - La classe CSS à appliquer à la fenêtre modale.
 * @param {string} props.modalHeaderClass - La classe CSS à appliquer à l'en-tête de la fenêtre modale.
 * @param {string} props.headerBtnClass - La classe CSS à appliquer au bouton de l'en-tête.
 * @param {string} props.headerBtnIconClass - La classe CSS à appliquer à l'icône du bouton de l'en-tête.
 * @param {string} props.bodyClass - La classe CSS à appliquer au corps de la fenêtre modale.
 * @param {React.ReactNode} props.children - Les éléments enfants à afficher dans le corps de la fenêtre modale.
 * @returns {React.Component} Le composant Modal.
 */

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
