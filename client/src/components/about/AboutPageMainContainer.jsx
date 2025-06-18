import React from 'react';
// Constants
import { CONTACT_PAGE_URL, GALLERY_PAGE_URL } from '../../utils/Routes';
// Components
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
// Images
import ArtistImagePhone from '../../assets/images/people/phoenix-headdress-blue-and-futuristic-main.jpg';

function AboutPageMainContainer() {
  return (
    <main role='main' className='grid w-full px-6 md:px-12 lg:px-24 py-8'>
      {/* 1 */}
      <SectionOne />

      {/* Image */}
      <div className='container mx-auto px-8'>
        <section className='grid h-fit lg:hidden relative -ml-4 lg:ml-0'>
          <figure className='z-10'>
            <img
              src={ArtistImagePhone}
              alt='The artist working joyfully in the studio on a headdress'
              className='w-full h-full object-contain object-center lg:max-w-[20vw]'
            />
            <figcaption className='sr-only'>
              The artist smiling while working on a custom feather headdress.
            </figcaption>
          </figure>
          <div className='absolute border-4 border-blue-600 border-solid -top-4 -right-4 lg:-top-10 lg:-right-10 h-full w-full'></div>
        </section>
      </div>

      {/* 2 */}
      <SectionTwo />

      {/* cta */}
      <section className='grid h-fit pt-12'>
        <div className='grid gap-y-2 lg:grid-cols-2 gap-x-4 px-8 lg:max-w-3xl lg:mx-auto'>
          <a
            href={GALLERY_PAGE_URL}
            className='bg-colour1 border-4 text-center border-solid border-colour2 hover:bg-colour5 px-2 lg:px-12 py-2 shadow-md active:scale-95'
          >
            See More
          </a>
          <a
            href={CONTACT_PAGE_URL}
            className='bg-colour1 border-4 text-center border-solid border-colour2 hover:bg-colour5 px-2 lg:px-12 py-2 shadow-md active:scale-95'
          >
            Commision Piece
          </a>
        </div>
      </section>
    </main>
  );
}

export default AboutPageMainContainer;
