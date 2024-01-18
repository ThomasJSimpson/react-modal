import React from 'react'

import { Modal } from 'react-modal-jkf'
import { useModal } from 'react-modal-jkf'
import 'react-modal-jkf/dist/index.css'

const App = () => {
  const { isShowing, toggle } = useModal()
  return (
    <Modal isShowing={isShowing} toggle={toggle}>
      <p>Congratulations!</p>
    </Modal>
  )
}

export default App
