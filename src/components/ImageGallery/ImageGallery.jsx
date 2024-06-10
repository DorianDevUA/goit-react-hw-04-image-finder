import { ImageGalleryItem } from '../ImageGalleryItem';
import { GalleryItem, GalleryList } from './ImageGallery.styled';

export function ImageGallery({ images }) {
  return (
    <GalleryList>
      {images.map(item => (
        <GalleryItem key={item.id}>
          <ImageGalleryItem item={item} />
        </GalleryItem>
      ))}
    </GalleryList>
  );
}
