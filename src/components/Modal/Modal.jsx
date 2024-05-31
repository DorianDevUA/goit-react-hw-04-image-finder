import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    const { onClose } = this.props;

    if (evt.code === 'Escape') {
      console.log('Натиснули ESC');
      onClose();
    }
  };

  handleBackdropClick = evt => {
    const { onClose } = this.props;

    if (evt.target === evt.currentTarget) {
      console.log('Click on Backdrop!');
      onClose();
    }
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalContent>
          {children}
        </ModalContent>
      </Backdrop>,
      modalRoot,
    );
  }
}
