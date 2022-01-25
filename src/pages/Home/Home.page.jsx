import React, { lazy } from 'react';
import DatePicker from '../../components/DatePicker';
const ImageCard = lazy(() => import('../../components/ImageCard'));
import Navbar from '../../components/Navbar/Navbar.component';
import ImageProvider from '../../providers/Images.provider';
import './Home.styles.css';

function HomePage() {
  console.log('home');
  return (
    <>
      <div>
        <ImageProvider>
          <Navbar />
          <DatePicker />
          <React.Suspense fallback={<div>Loading...</div>}>
            <ImageCard />
          </React.Suspense>
        </ImageProvider>
      </div>
    </>
  );
}

export default HomePage;
