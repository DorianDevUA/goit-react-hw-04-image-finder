import { Component } from 'react';
import { Modal } from '../Modal';
import { GalleryImage } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const {
      item: { tags, webformatURL, largeImageURL },
    } = this.props;

    return (
      <>
        <GalleryImage
          src={webformatURL}
          alt={tags}
          width="320"
          onClick={this.toggleModal}
        />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}
