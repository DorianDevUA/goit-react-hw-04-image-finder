import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from '../Modal';
import { GalleryImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ item: { tags, webformatURL, largeImageURL } }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <GalleryImage
        src={webformatURL}
        alt={tags}
        width="320"
        onClick={toggleModal}
      />
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
