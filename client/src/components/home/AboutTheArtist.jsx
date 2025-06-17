import React from 'react';
import { useInView } from 'react-intersection-observer';
// Constants
import { CompanyName } from '../../utils/Constants';
// Images
import ArtistMainImage from '../../assets/images/people/phoenix-headdress-product-no-background-phoenix-with-dark-headdress.png';
// Icons
import { FaPhoenixSquadron } from 'react-icons/fa';

function AboutTheArtist() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className='grid w-full py-12 md:py-20' ref={ref}>
      <div className='grid w-full h-fit gap-y-8 px-8 sm:px-10'>
        {/* Site Intro */}
        <section className='grid'>
          <div className='grid gap-y-4 text-colour5 justify-center text-center'>
            <FaPhoenixSquadron className='text-2xl mx-auto' />
            <h1
              className='text-3xl md:text-5xl lg:text-8xl uppercase font-bold leading-none'
              style={{
                textShadow: `3px 4px 4px ${'rgba(0,0,0,0.8)'}`,
              }}
            >
              {CompanyName}
            </h1>
          </div>
        </section>

        {/* Phone section */}
        <div className='grid lg:hidden'>
          <section className='grid'>
            <figure className='border-r-4 border-b-4 border-colour5 border-solid mt-4'>
              <img
                src={ArtistMainImage}
                alt='A hand-crafted feather headdress by the artist, beautifully modeled'
                className={`w-full h-full object-contain opacity-0 object-center border-b-4 border-colour5 border-solid ${
                  inView ? 'fade-up-animation' : ''
                }`}
              />
              <figcaption className='sr-only'>
                A unique feather headdress crafted by the artist.
              </figcaption>
            </figure>
          </section>

          {/* About Section */}
          <section aria-labelledby='about-the-artist' className='mt-24'>
            <article className='text-center'>
              <h2
                id='about-the-artist'
                className='text-2xl font-semibold mb-4'
                style={{
                  textShadow: `3px 4px 4px ${'rgba(255,255,255,0.8)'}`,
                }}
              >
                About the Artist
              </h2>
              <p className='mb-4'>
                Behind every masterpiece lies intention, emotion, and vision.
                This artist creates exquisite, hand-crafted headdresses that
                blend natural elements with bold fantasy aesthetics. Each piece
                is a sculptural triumph, embodying elegance, power, and the
                essence of individuality.
              </p>
              <p>
                Her work is rare and unapologetically original — often reserved
                for editorial shoots, private collectors, or those lucky enough
                to commission a one-of-a-kind creation. Now, with this platform,
                her artistry will finally have a dedicated space to shine and be
                celebrated for what it truly is: wearable art.
              </p>
            </article>
          </section>
        </div>

        {/* Large screen section */}
        <div className='hidden lg:grid lg:grid-rows-reg max-h-[110vh]'>
          <section>
            <h2
              id='about-the-artist'
              className='text-2xl font-semibold text-center mb-4'
            >
              About the Artist
            </h2>
          </section>

          <div className='relative h-screen overflow-hidden'>
            {/* Image Section */}
            <section className='w-full h-full'>
              <figure className='w-full h-full border-r-4 border-b-4 border-colour5 border-solid'>
                <img
                  src={ArtistMainImage}
                  alt='A hand-crafted feather headdress by the artist, beautifully modeled'
                  className={`w-full h-full object-contain opacity-0 object-center border-b-4 border-colour5 border-solid ${
                    inView ? 'fade-up-animation' : ''
                  }`}
                />
                <figcaption className='sr-only'>
                  A unique feather headdress crafted by the artist.
                </figcaption>
              </figure>
            </section>

            {/* Left Paragraph */}
            <section
              aria-labelledby='about-intention'
              className='absolute left-10 top-1/2 -translate-y-1/2 w-[30%]'
            >
              <article
                className={`text-center p-4 rounded-lg ${
                  inView ? 'fade-up-hard-animation' : ''
                }`}
              >
                <h3
                  id='about-intention'
                  className='text-2xl font-semibold mb-2'
                >
                  The Designer
                </h3>
                <p className='text-xl'>
                  Behind every masterpiece lies intention, emotion, and vision.
                  This artist creates exquisite, hand-crafted headdresses that
                  blend natural elements with bold fantasy aesthetics. Each
                  piece is a sculptural triumph, embodying elegance, power, and
                  the essence of individuality.
                </p>
              </article>
            </section>

            {/* Right Paragraph */}
            <section
              aria-labelledby='about-rarity'
              className='absolute right-10 top-1/2 -translate-y-1/2 w-[30%] text-center'
            >
              <article
                className={`text-center p-4 rounded-lg ${
                  inView ? 'fade-up-hard-animation' : ''
                }`}
              >
                <h3 id='about-rarity' className='text-2xl font-semibold mb-2'>
                  The Builder
                </h3>
                <p className='text-xl'>
                  Her work is rare and unapologetically original — often
                  reserved for editorial shoots, private collectors, or those
                  lucky enough to commission a one-of-a-kind creation. Now, with
                  this platform, her artistry will finally have a dedicated
                  space to shine and be celebrated for what it truly is:
                  wearable art.
                </p>
              </article>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTheArtist;
