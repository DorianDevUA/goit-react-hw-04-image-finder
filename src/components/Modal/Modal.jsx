import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalContent } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeydown);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handleKeydown);
  };

  handleKeydown = evt => {
    const { onClose } = this.props;

    if (evt.code === 'Escape') {
      onClose();
    }
  };

  handleBackdropClick = evt => {
    const { onClose } = this.props;

    if (evt.target === evt.currentTarget) {
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
