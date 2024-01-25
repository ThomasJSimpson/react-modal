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
  const { isShowing, toggle, openModal, closeModal } = useModal()

  return (
    <div>
      <button onClick={toggle}>Ouvrir la fenêtre modale</button>
      <Modal
        isShowing={isShowing}
        toggle={toggle}
        closeModal={closeModal}
        btnChildren={btnChildren}
        overlayClass='your-overlay-class'
        modalClass='your-modal-class'
        bodyClass='your-modal-body-class'
        btnClass='your-modal-btn-class'
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
- `btnClass` : La classe CSS à appliquer au bouton de l'en-tête. Par défaut, c'est la classe `.modalBtn` dans `styles.module.css`.
- `bodyClass` : La classe CSS à appliquer au corps de la fenêtre modale. Par défaut, c'est la classe `.modalBody` dans `styles.module.css`.

## useModal

`useModal` est un hook personnalisé pour gérer l'état d'affichage d'une fenêtre modale.

## Retour

- `isShowing` : Un booléen indiquant si la fenêtre modale est actuellement affichée.
- `toggle` : Une fonction qui permet de basculer l'affichage de la fenêtre modale.
- `openModal` : Une fonction qui permet d'activer l'affichage la fenêtre modale.
- `closeModal` : Une fonction qui permet de désactiver l'affichage de la fenêtre modale.

## styles.module.css

Ce fichier contient les styles par défaut pour le composant `Modal`. Vous pouvez les surcharger en passant vos propres classes CSS (string) aux props correspondantes du composant `Modal`.

Classes par défaut CSS du fichier `styles.module.css`:

```css
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.75);
}

.modal {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  max-width: 500px;
  box-sizing: border-box;
  width: 90%;
  background: #fff;
  padding: 15px 30px;
  text-align: left;
  scrollbar-width: none;
  border-radius: 5px;
  max-height: 300px;
}
.modalBody {
  overflow-y: auto;
  max-height: 300px;
}

.modalBtn {
  position: absolute;
  top: -12.5px;
  right: -12.5px;
  display: block;
  width: 30px;
  height: 30px;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA3hJREFUaAXlm8+K00Acx7MiCIJH/yw+gA9g25O49SL4AO3Bp1jw5NvktC+wF88qevK4BU97EmzxUBCEolK/n5gp3W6TTJPfpNPNF37MNsl85/vN/DaTmU6PknC4K+pniqeKJ3k8UnkvDxXJzzy+q/yaxxeVHxW/FNHjgRSeKt4rFoplzaAuHHDBGR2eS9G54reirsmienDCTRt7xwsp+KAoEmt9nLaGitZxrBbPFNaGfPloGw2t4JVamSt8xYW6Dg1oCYo3Yv+rCGViV160oMkcd8SYKnYV1Nb1aEOjCe6L5ZOiLfF120EjWhuBu3YIZt1NQmujnk5F4MgOpURzLfAwOBSTmzp3fpDxuI/pabxpqOoz2r2HLAb0GMbZKlNV5/Hg9XJypguryA7lPF5KMdTZQzHjqxNPhWhzIuAruOl1eNqKEx1tSh5rfbxdw7mOxCq4qS68ZTjKS1YVvilu559vWvFHhh4rZrdyZ69Vmpgdj8fJbDZLJpNJ0uv1cnr/gjrUhQMuI+ANjyuwftQ0bbL6Erp0mM/ny8Fg4M3LtdRxgMtKl3jwmIHVxYXChFy94/Rmpa/pTbNUhstKV+4Rr8lLQ9KlUvJKLyG8yvQ2s9SBy1Jb7jV5a0yapfF6apaZLjLLcWtd4sNrmJUMHyM+1xibTjH82Zh01TNlhsrOhdKTe00uAzZQmN6+KW+sDa/JD2PSVQ873m29yf+1Q9VDzfEYlHi1G5LKBBWZbtEsHbFwb1oYDwr1ZiF/2bnCSg1OBE/pfr9/bWx26UxJL3ONPISOLKUvQza0LZUxSKyjpdTGa/vDEr25rddbMM0Q3O6Lx3rqFvU+x6UrRKQY7tyrZecmD9FODy8uLizTmilwNj0kraNcAJhOp5aGVwsAGD5VmJBrWWbJSgWT9zrzWepQF47RaGSiKfeGx6Szi3gzmX/HHbihwBser4B9UJYpFBNX4R6vTn3VQnez0SymnrHQMsRYGTr1dSk34ljRqS/EMd2pLQ8YBp3a1PLfcqCpo8gtHkZFHKkTX6fs3MY0blKnth66rKCnU0VRGu37ONrQaA4eZDFtWAu2fXj9zjFkxTBOo8F7t926gTp/83Kyzzcy2kZD6xiqxTYnHLRFm3vHiRSwNSjkz3hoIzo8lCKWUlg/YtGs7tObunDAZfpDLbfEI15zsEIY3U/x/gHHc/G1zltnAgAAAABJRU5ErkJggg==');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  color: #fff;
  background-color: black;
  border: 1px solid #000;
  border-radius: 50%;
  font-size: 16px;
  padding: 10px;
}
.modalBtn:hover {
  cursor: pointer;
}

.modalBody::-webkit-scrollbar {
  display: none;
}
```

## License

MIT © [ThomasJSimpson](https://github.com/ThomasJSimpson)
