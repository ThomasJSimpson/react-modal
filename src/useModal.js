import { useState } from 'react'

/**
 * Un hook personnalisé pour gérer l'état d'affichage d'une fenêtre modale.
 *
 * @example
 * const {isShowing, toggle} = useModal();
 *
 * @returns {Object} Un objet contenant deux propriétés :
 * - `isShowing` : Un booléen indiquant si la fenêtre modale est actuellement affichée.
 * - `toggle` : Une fonction qui permet de basculer l'affichage de la fenêtre modale.
 */

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false)

  const toggle = () => {
    const nextState = !isShowing
    setIsShowing(nextState)
    document.body.style.overflow = nextState ? 'hidden' : 'auto'
  }
  return { isShowing, toggle }
}

export default useModal
