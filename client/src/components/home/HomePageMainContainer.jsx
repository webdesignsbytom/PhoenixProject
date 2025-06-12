import React from 'react';
import { useInView } from 'react-intersection-observer';
import MainVideo from '../../assets/videos/rotate/phoenix-yellow-feather-headdress-video-no-background.gif'
import AboutTheArtist from './AboutTheArtist';

function HomePageMainContainer() {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% visible
    triggerOnce: false,
  });

  return (
    <main role="main" id="main-home" className="grid w-full mt-12 h-full">
      <AboutTheArtist />

      <section aria-label="Video showcase of phoenix yellow feather headdress">
        <div>
          <video
            ref={ref}
            src={MainVideo}
            muted
            playsInline
            preload="metadata"
            loop={inView}
            autoPlay={inView}
            controls={false}
            aria-describedby="video-desc"
            style={{ width: '100%', height: 'auto' }}
          >
            Sorry, your browser does not support embedded videos.
          </video>
          <p id="video-desc" className="sr-only">
            Looping video showing a phoenix yellow feather headdress rotating with transparent background.
          </p>
        </div>
      </section>
    </main>
  );
}

export default HomePageMainContainer;
