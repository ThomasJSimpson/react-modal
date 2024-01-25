import { useState } from 'react'

/**
 * A custom hook to manage the display state of a modal window.
 *
 * @example
 * const {isShowing, openModal, closeModal, toggle} = useModal();
 *
 * @returns {Object} An object containing four properties:
 * - `isShowing`: A boolean indicating if the modal window is currently displayed.
 * - `openModal`: A function to open the modal window.
 * - `closeModal`: A function to close the modal window.
 * - `toggle`: A function to toggle the display of the modal window.
 */

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false)

  const toggle = () => {
    const nextState = !isShowing
    setIsShowing(nextState)
    document.body.style.overflow = nextState ? 'hidden' : 'auto'
  }
  const openModal = () => {
    setIsShowing(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsShowing(false)
    document.body.style.overflow = 'auto'
  }
  return { isShowing, toggle, openModal, closeModal }
}

export default useModal
