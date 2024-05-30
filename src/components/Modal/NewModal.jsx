import PropTypes from 'prop-types';
import { Component } from 'react';
import { Modal, Overlay } from './NewModal.styled';

export class NewModal extends Component {
  render() {
    const { image, tags } = this.props;
    return (
      <>
        <div>NewModal</div>
        <Overlay>
          <Modal>
            <img src={image} alt={tags} />
          </Modal>
        </Overlay>
      </>
    );
  }
}
