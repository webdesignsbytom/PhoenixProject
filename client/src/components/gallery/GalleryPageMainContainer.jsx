import React, { useState } from 'react';
// Data
import { headdressGalleryGroupsArray } from '../../utils/data/GalleryData';

function GalleryPageMainContainer() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imgSrc, imgAlt) => {
    setSelectedImage({ src: imgSrc, alt: imgAlt });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <main
        role='main'
        className='grid w-full gap-y-36 lg:gap-y-44 px-6 md:px-12 lg:px-24 pb-12 py-8'
      >
        {headdressGalleryGroupsArray.map(
          ({ title, description, images }, index) => {
            const [mainImage, ...restImages] = images;

            return (
              <section key={index} className='grid gap-y-8 container mx-auto'>
                {/* Title + Hero Section */}
                <div className='grid md:grid-cols-reg gap-y- gap-x-12 items-center'>
                  {/* Main Image */}
                  <div className='hidden lg:block lg:max-w-[25vw] w-full mx-auto'>
                    <img
                      src={mainImage.src}
                      alt={mainImage.name}
                      className='w-full h-auto object-cover lg:max-h-[60vh]'
                    />
                  </div>

                  {/* Text Content */}
                  <article className='grid gap-y-8'>
                    <h2 className='text-2xl lg:text-3xl font-bold uppercase'>
                      {title}
                    </h2>
                    <div className='lg:hidden lg:max-w-[25vw] w-full mx-auto'>
                      <img
                        src={mainImage.src}
                        alt={mainImage.name}
                        className='w-full h-auto object-cover lg:max-h-[60vh]'
                      />
                    </div>
                    <p className='text-lg font-thin'>{description}</p>
                  </article>
                </div>

                {/* Gallery Grid */}
                <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 border-t-4 border-solid border-colour5 pt-6'>
                  {restImages.map(({ name, src }) => {
                    const caption = name
                      .replace(/IMG-\d{8}-WA/, 'View ')
                      .replace(/-/g, ' ')
                      .replace('.jpg', '');

                    return (
                      <li
                        key={name}
                        className='aspect-[3/4] w-full overflow-hidden cursor-pointer'
                        onClick={() => handleImageClick(src, caption)}
                      >
                        <figure className='relative w-full h-full group'>
                          <img
                            src={src}
                            alt={caption}
                            loading='lazy'
                            className='absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-focus:scale-110'
                          />
                          <figcaption className='absolute bottom-0 w-full bg-black bg-opacity-50 text-colour1 text-sm py-1 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            Click to Open
                          </figcaption>
                        </figure>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          }
        )}
      </main>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div className='fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center'>
          <div className='relative'>
            <button
              onClick={closeModal}
              className='absolute top-2 right-2 text-colour1 text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded'
              aria-label='Close'
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className='max-w-screen max-h-screen object-contain'
            />
          </div>
        </div>
      )}
    </>
  );
}

export default GalleryPageMainContainer;
