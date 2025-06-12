import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import { backgroundItemsArray } from '../../utils/data/BackgroundData';
import CarouselItem from '../carousel/CarouselItem';

function HomePageHeader() {
  let timeAutoNext = 7000;

  return (
    <section className='grid h-screen min-h-screen w-full'>
      {/* Time bar */}
      <div className='timeRunning absolute top-0 left-0 bg-pink-600 z-30 h-1 lg:h-2'></div>

      {/* Main background */}
      <div
        className='grid relative h-full w-full bg-cover bg-no-repeat'
      >
        {/* Nav */}
        <Navbar />

        {/* Header info */}
        <header className='grid h-full'>
          {backgroundItemsArray.map((item, index) => {
            return <CarouselItem key={index} item={item} />;
          })}
        </header>
      </div>
    </section>
  );
}

export default HomePageHeader;
