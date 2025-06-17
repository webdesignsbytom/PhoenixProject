import React from 'react';
// Data
import { headdressGalleryGroupsArray } from '../../utils/data/GalleryData';

function GalleryPageMainContainer() {
  return (
    <main role='main' className='grid w-full gap-y-24 lg:gap-y-44 px-6 md:px-12 py-8'>
      {headdressGalleryGroupsArray.map(({ title, description, images }, index) => {
        const [mainImage, ...restImages] = images;

        return (
          <section key={index} className='grid gap-y-8 container mx-auto'>
            {/* Title + Hero Section */}
            <div className='grid md:grid-cols-2 gap-6 items-center'>
              {/* Main Image */}
              <div className='max-w-[25vw] w-full mx-auto'>
                <img
                  src={mainImage.src}
                  alt={mainImage.name}
                  className='w-full h-auto object-cover rounded-lg shadow-lg'
                />
              </div>

              {/* Text Content */}
              <article className='grid gap-y-4'>
                <h2 className='text-2xl font-bold uppercase'>{title}</h2>
                <p className='text-lg'>{description}</p>
              </article>
            </div>

            {/* Gallery Grid */}
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {restImages.map(({ name, src }) => {
                const caption = name
                  .replace(/IMG-\d{8}-WA/, 'View ')
                  .replace(/-/g, ' ')
                  .replace('.jpg', '');

                return (
                  <li key={name} className='aspect-[3/4] w-full overflow-hidden'>
                    <figure className='relative w-full h-full group'>
                      <img
                        src={src}
                        alt={caption}
                        loading='lazy'
                        className='absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-focus:scale-110'
                      />
                      <figcaption className='absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-sm py-1 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        {caption}
                      </figcaption>
                    </figure>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </main>
  );
}

export default GalleryPageMainContainer;
