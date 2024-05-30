export function ImageGalleryItem({ previewImg, image, tags }) {
  return (
    <li>
      <img src={previewImg} alt={tags} width="240"/>
    </li>
  );
}
