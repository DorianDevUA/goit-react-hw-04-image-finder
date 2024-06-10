import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalContent } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeydown);
    console.log("Component <Modal> didMount");
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handleKeydown);
    console.log("Component <Modal> willUnmount");
  };

  handleKeydown = evt => {
    const { onClose } = this.props;

    if (evt.code === 'Escape') {
      console.log('Натиснули ESC');

      // Call the toggleModal function as onClose()
      // OnClose comes as a component property from App.jsx
      onClose();
    }
  };

  handleBackdropClick = evt => {
    const { onClose } = this.props;

    if (evt.target === evt.currentTarget) {
      console.log('Click on Backdrop!');

      // Call the toggleModal function as onClose()
      // OnClose comes as a component property from App.jsx
      onClose();
    }
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalContent>{children}</ModalContent>
      </Backdrop>,
      modalRoot,
    );
  }
}
