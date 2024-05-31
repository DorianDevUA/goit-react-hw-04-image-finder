import { Component } from 'react';
import { Modal } from '../Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  };

  handleClick = () => {
    this.toggleModal();
    console.log('Click on image');
  };

  render() {
    const { isModalOpen } = this.state;
    const { previewImg, image, tags } = this.props;

    return (
      <>
        <li>
          <img
            src={previewImg}
            alt={tags}
            width="240"
            onClick={this.toggleModal}
          />
        </li>
        {isModalOpen && (
          <Modal onClose={this.toggleModal}>
            <img src={image} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}
