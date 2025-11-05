import React from 'react';
import { useInView } from 'react-intersection-observer';
// Images
import ArtistMainImage from '../../assets/images/people/phoenix-headdress-profile-photo.webp';
// Icons
import { ABOUT_PAGE_URL, CONTACT_PAGE_URL } from '../../utils/Routes';

function AboutTheArtist() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className='grid w-full py-12 md:py-20' ref={ref}>
      <div className='grid w-full lg:grid-cols-reg container mx-auto gap-x-12 h-fit gap-y-8 px-8 sm:px-10 md:px-12 lg:px-24'>
        {/* Image */}
        <section className='grid h-fit relative -mr-4 lg:mr-0'>
          <figure className='z-10'>
            <img
              src={ArtistMainImage}
              alt='A hand-crafted feather headdress by the artist, beautifully modeled'
              className={`w-full h-full object-contain opaci object-center lg:max-w-[20vw] `}
            />
            <figcaption className='sr-only'>
              A unique feather headdress crafted by the artist.
            </figcaption>
          </figure>

          <div className='absolute border-4 border-colour5 border-solid -top-4 -left-4 lg:-top-10 lg:-left-10 h-full w-full'></div>
        </section>

        {/* Article */}
        <section className='grid items-center'>
          <article
            className={`grid h-fit gap-y-8 text-left opacity-0 p-4 rounded-lg ${
              inView ? 'fade-up-hard-animation' : ''
            }`}
          >
            <div className='grid h-fit gap-y-8'>
              <h3
                id='about-intention'
                className='text-2xl lg:text-3xl font-semibold mb-2'
              >
                The Designer
              </h3>
              <p className='text-xl font-thin'>
                Behind every masterpiece lies intention, emotion, and vision.
                The artist creates exquisite, hand-crafted headdresses that
                blend natural elements with bold fantasy aesthetics. Each piece
                is a sculptural triumph, embodying elegance, power, and the
                essence of individuality.
              </p>
            </div>

            {/* cta */}
            <section className='grid h-fit lg:justify-end'>
              <div className='grid gap-y-2 lg:grid-cols-2 gap-x-4'>
                <a
                  href={ABOUT_PAGE_URL}
                  className='bg-colour1 border-4 border-solid text-center border-colour2 hover:bg-colour5 px-2 lg:px-8 xl:px-12 py-2 shadow-md active:scale-95'
                >
                  About The Artist
                </a>
                <a
                  href={CONTACT_PAGE_URL}
                  className='bg-colour1 border-4 border-solid text-center border-colour2 hover:bg-colour5 px-2 lg:px-8 xl:px-12 py-2 shadow-md active:scale-95'
                >
                  Commision Piece
                </a>
              </div>
            </section>
          </article>
        </section>
      </div>
    </section>
  );
}

export default AboutTheArtist;
