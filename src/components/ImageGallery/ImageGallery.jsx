import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import { GalleryItem, GalleryList } from './ImageGallery.styled';

const ImageGallery = ({ images }) => {
  return (
    <GalleryList>
      {images.map(item => (
        <GalleryItem key={item.webformatURL}>
          <ImageGalleryItem item={item} />
        </GalleryItem>
      ))}
    </GalleryList>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
