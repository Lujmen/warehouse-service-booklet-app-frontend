import React from 'react';
import CurrentColorComponent from './components/currentColorComponent';
import './homePage.css';
import LoadingSpinner from '../../components/loadingSpinner/loadingSpinner';

const HomePage = () => {
  return (
    <div>
      <CurrentColorComponent />
      {/* <LoadingSpinner /> */}
    </div>
  );
};

export default HomePage;
