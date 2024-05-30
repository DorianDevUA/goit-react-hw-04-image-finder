import { ImageGalleryItem } from '../ImageGalleryItem';

export function ImageGallery({ gallery }) {
  return (
    <ul>
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
    </ul>
  );
}
