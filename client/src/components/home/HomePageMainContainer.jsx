import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import MainVideo from '../../assets/videos/rotate/phoenix-yellow-feather-headdress-video-no-background.mp4';
import AboutTheArtist from './AboutTheArtist';

function HomePageMainContainer() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play().catch((e) => {
          // Handle play promise rejection
          console.log('Video play failed:', e);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [inView]);

  return (
    <main role="main" id="main-home" className="grid w-full mt-12 h-full">
      <AboutTheArtist />

      <section aria-label="Video showcase of phoenix yellow feather headdress">
        <div>
          <video
            ref={(node) => {
              ref(node);
              videoRef.current = node;
            }}
            src={MainVideo}
            muted
            playsInline
            preload="metadata"
            loop
            controls={false}
            aria-describedby="video-desc"
            style={{ width: '100%', height: 'auto' }}
            className="max-h-[90vh]"
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
