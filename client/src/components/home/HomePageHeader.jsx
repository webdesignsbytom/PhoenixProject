import React, { useEffect, useRef, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import { backgroundItemsArray } from '../../utils/data/BackgroundData';
import CarouselItem from '../carousel/CarouselItem';

function HomePageHeader() {
  const timeAutoNext = 6000;

  const containerRef = useRef(null);
  const timeRunningRef = useRef(null);

  // Track current index of visible carousel item
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate carousel & reset animation & update color every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      rotateCarousel();
    }, timeAutoNext);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Function to rotate carousel & reset animation
  const rotateCarousel = () => {
    const container = containerRef.current;
    if (container && container.children.length > 0) {
      const firstChild = container.children[0];
      container.removeChild(firstChild);
      container.appendChild(firstChild);
      
      // Update index (cycle through array)
      setCurrentIndex((prev) => (prev + 1) % backgroundItemsArray.length);
    }

    // Reset animation
    const timeRunningEl = timeRunningRef.current;
    if (timeRunningEl) {
      timeRunningEl.style.animation = 'none';
      void timeRunningEl.offsetWidth; // trigger reflow
      timeRunningEl.style.animation = 'runningTime 6s linear 1 forwards';
    }
  };

  // Handle manual NEXT button
  const handleNextClick = () => {
    rotateCarousel();
  };

  return (
    <section className='grid h-screen relative min-h-screen w-full'>
      <div
        ref={timeRunningRef}
        className='timeRunning absolute top-0 left-0 z-30 h-1 lg:h-2'
        style={{
          animation: 'runningTime 6s linear 1 forwards',
          backgroundColor: backgroundItemsArray[currentIndex].timebarColour,
        }}
      ></div>

      <div className='grid relative h-full w-full bg-cover bg-no-repeat'>
        <div className='absolute top-10 z-50'>
          <button onClick={handleNextClick}>NEXT</button>
        </div>

        <Navbar />

        <header ref={containerRef} className='grid h-full'>
          {backgroundItemsArray.map((item, idx) => (
            <CarouselItem key={idx} item={item} />
          ))}
        </header>
      </div>
    </section>
  );
}

export default HomePageHeader;
