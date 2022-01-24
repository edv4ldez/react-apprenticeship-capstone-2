import { useImage } from '../../providers/Images.provider';
import { ImageCardContent, ImageCardPicture } from './ImageCard.styles';

function ImageCard() {
  const { data } = useImage();
  return (
    <ImageCardContent role="image-content" className="image-content">
      <h1 role="image-title">{data.title}</h1>
      <p role="image-description">{data.explanation}</p>
      <ImageCardPicture role="image-picture" src={data.url} alt="Foto" />
    </ImageCardContent>
  );
}

export default ImageCard;
