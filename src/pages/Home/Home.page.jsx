import React from 'react';
import DatePicker from '../../components/DatePicker';
import ImageCard from '../../components/ImageCard';
import Navbar from '../../components/Navbar/Navbar.component';
import ImageProvider from '../../providers/Images.provider';
import './Home.styles.css';

function HomePage() {
  return (
    <>
      <div>
        <ImageProvider>
          <Navbar />
          <DatePicker />
          <ImageCard />
        </ImageProvider>
      </div>
    </>
  );
}

export default HomePage;
