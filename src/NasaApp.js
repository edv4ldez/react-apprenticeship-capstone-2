import ImageProvider from './providers/Images.provider';
import { AppRouter } from './routes/AppRoute';

export const NasaApp = () => {
  return (
    <ImageProvider>
      <AppRouter />
    </ImageProvider>
  );
};
