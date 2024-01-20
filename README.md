# react-modal-jkf

> Un composant modal React

[![NPM](https://img.shields.io/npm/v/react-modal-jkf.svg)](https://www.npmjs.com/package/react-modal-jkf) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

```bash
npm install --save react-modal-jkf
```

## Utilisation

```jsx
import React from 'react'
import { Modal, useModal } from 'react-modal-jkf'
import 'react-modal-jkf/dist/index.css'

function Example() {
  const { isShowing, toggle } = useModal()

  return (
    <div>
      <button onClick={toggle}>Ouvrir la fenêtre modale</button>
      <Modal
        isShowing={isShowing}
        toggle={toggle}
        overlayClass='your-overlay-class'
        modalClass='your-modal-class'
        modalHeaderClass='your-modal-header-class'
        headerBtnClass='your-modal-header-btn-class'
        headerBtnIconClass='your-modal-header-btn-icon-class'
        bodyClass='your-modal-body-class'
      >
        Contenu de la fenêtre modale
      </Modal>
    </div>
  )
}
```

## Modal

`Modal` est un composant React qui affiche une fenêtre modale.

## Props

- `overlayClass` : La classe CSS à appliquer à l'overlay de la fenêtre modale. Par défaut, c'est la classe `.modalOverlay` dans `styles.module.css`.
- `modalClass` : La classe CSS à appliquer à la fenêtre modale. Par défaut, c'est la classe `.modal` dans `styles.module.css`.
- `modalHeaderClass` : La classe CSS à appliquer à l'en-tête de la fenêtre modale. Par défaut, c'est la classe `.modalHeader` dans `styles.module.css`.
- `headerBtnClass` : La classe CSS à appliquer au bouton de l'en-tête. Par défaut, c'est la classe `.modalHeaderBtn` dans `styles.module.css`.
- `headerBtnIconClass` : La classe CSS à appliquer à l'icône du bouton de l'en-tête. Par défaut, c'est la classe `.modalHeaderBtnIcon` dans `styles.module.css`.
- `bodyClass` : La classe CSS à appliquer au corps de la fenêtre modale. Par défaut, c'est la classe `.modalBody` dans `styles.module.css`.

## useModal

`useModal` est un hook personnalisé pour gérer l'état d'affichage d'une fenêtre modale.

## Retour

- `isShowing` : Un booléen indiquant si la fenêtre modale est actuellement affichée.
- `toggle` : Une fonction qui permet de basculer l'affichage de la fenêtre modale.

## styles.module.css

Ce fichier contient les styles par défaut pour le composant `Modal`. Vous pouvez les surcharger en passant vos propres classes CSS (string) aux props correspondantes du composant `Modal`.

Classes par défaut CSS du fichier `styles.module.css`:

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  animation: fadeIn 0.3s forwards;
}

.modal {
  z-index: 100;
  background: #fff;
  position: relative;
  border-radius: 5px;
  max-width: 500px;
  width: 30%;
  top: 50%;
  max-height: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-bottom: 2rem;
  opacity: 0;
  animation: fadeIn 0.3s forwards;
}

.modalHeader {
  display: flex;
  justify-content: flex-end;
}

.modalBody {
  padding: 0 1rem 0;
  white-space: pre-wrap;
  word-break: break-word;
  max-height: 300px;
  overflow: auto;
  overflow-x: hidden;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  scrollbar-width: none;
}

.modalHeaderBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;
  border: 0;
  background-color: transparent;
}

.modalHeaderBtnIcon {
  font-size: 18px;
  height: 18px;
  display: flex;
  align-items: center;
}

.modalBody::-webkit-scrollbar {
  display: none;
}
```

## License

MIT © [ThomasJSimpson](https://github.com/ThomasJSimpson)
