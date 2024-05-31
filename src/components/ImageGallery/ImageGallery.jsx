import { ImageGalleryItem } from '../ImageGalleryItem';
import { Container, Gallery } from './ImageGallery.styled';

export function ImageGallery({ gallery }) {
  return (
    <Container>
      <Gallery>
        {gallery.map(({ id, webformatURL, largeImageURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              previewImg={webformatURL}
              image={largeImageURL}
              tags={tags}
            />
          );
        })}
      </Gallery>
    </Container>
  );
}
