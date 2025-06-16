import React from 'react';
import AboutTheArtist from './AboutTheArtist';
import { headdressImagesArray } from '../../utils/data/DisplayData';

function HomePageMainContainer() {
  return (
    <main role='main' id='main-home' className='grid w-full h-full'>
      {/* Headdress Image Gallery */}
      <section
        aria-labelledby='headdress-gallery-title'
        className='grid w-full'
      >
        <div className='grid w-full px-8 md:max-w-[85vw] mx-auto'>
          <h2
            id='headdress-gallery-title'
            className='text-2xl font-semibold mb-6 text-center'
          >
            Featured Headdress Collection
          </h2>
          <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {headdressImagesArray.map(({ name, src }) => {
              // turn filename into a human-readable caption
              const caption = name
                .replace(/IMG-\d{8}-WA/, 'View ')
                .replace(/-/g, ' ')
                .replace('.jpg', '');

              return (
                <li
                  key={name}
                  className='overflow-hidden rounded-2xl shadow-lg'
                >
                  <div className='group relative overflow-hidden'>
                    <img
                      src={src}
                      alt={caption}
                      loading='lazy'
                      className='w-full h-64 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-focus:scale-110'
                    />
                    <figcaption className='absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-sm py-1 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      {caption}
                    </figcaption>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* About */}
      <AboutTheArtist />
    </main>
  );
}

export default HomePageMainContainer;
