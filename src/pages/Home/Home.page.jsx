import React, { lazy } from 'react';
import DatePicker from '../../components/DatePicker';
const ImageCard = lazy(() => import('../../components/ImageCard'));
import './Home.styles.js';
import { HomeStyle } from './Home.styles.js';

function HomePage() {
  console.log('home');
  return (
    <>
      <HomeStyle>
        <DatePicker />
        <React.Suspense fallback={<div>Loading...</div>}>
          <ImageCard />
        </React.Suspense>
      </HomeStyle>
    </>
  );
}

export default HomePage;
