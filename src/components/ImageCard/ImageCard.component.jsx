import { memo } from 'react';
import { useImage } from '../../providers/Images.provider';
import {
  ImageCardContent,
  ImageCardPicture,
  ImageCardVideo,
} from './ImageCard.styles';

function ImageCard() {
  const { image } = useImage();
  const { data, error } = image;
  return (
    <>
      {!error ? (
        <ImageCardContent role="image-content" className="image-content">
          <h1 role="image-title">{data.title}</h1>
          <p role="image-description">{data.explanation}</p>
          {data.media_type === 'image' ? (
            <ImageCardPicture role="image-picture" src={data.url} alt="Foto" />
          ) : (
            <ImageCardVideo role="image-video" src={data.url} alt="Foto" />
          )}
        </ImageCardContent>
      ) : (
        <ImageCardContent role="image-content-error" className="image-content">
          <h1 role="image-title">{error}</h1>
          <ImageCardPicture
            role="image-picture-error"
            src={'./assets/error.gif'}
            alt="Foto"
          />
        </ImageCardContent>
      )}
    </>
  );
}

export default memo(ImageCard);
