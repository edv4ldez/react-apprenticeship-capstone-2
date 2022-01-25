import { useImage } from '../../providers/Images.provider';
import { ImageCardContent, ImageCardPicture } from './ImageCard.styles';

function ImageCard() {
  console.log('Image');
  const { image } = useImage();
  const { data, error } = image;
  return (
    <>
      {!error ? (
        <ImageCardContent role="image-content" className="image-content">
          <h1 role="image-title">{data.title}</h1>
          <p role="image-description">{data.explanation}</p>
          <ImageCardPicture role="image-picture" src={data.url} alt="Foto" />
        </ImageCardContent>
      ) : (
        <ImageCardContent role="image-content" className="image-content">
          <h1 role="image-title">{error}</h1>
          <ImageCardPicture
            role="image-picture"
            src={'./assets/error.gif'}
            alt="Foto"
          />
        </ImageCardContent>
      )}
    </>
  );
}

export default ImageCard;
