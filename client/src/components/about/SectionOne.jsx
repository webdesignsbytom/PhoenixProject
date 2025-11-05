import React from 'react';
import { useInView } from 'react-intersection-observer';
// Images
import ArtistMainImage from '../../assets/images/people/phoenix-headdress-horned-spikey-headdress.webp';

function SectionOne() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className='grid w-full py-12' ref={ref}>
      <div className='grid w-full lg:grid-cols-reg container mx-auto gap-x-12 h-fit gap-y-8 px-8 sm:px-10'>
        {/* Image */}
        <section className='grid h-fit relative -mr-4 lg:mr-0'>
          <figure className='z-10'>
            <img
              src={ArtistMainImage}
              alt='A hand-crafted feather headdress by the artist, beautifully modeled'
              className='w-full h-full object-contain object-center lg:max-w-[20vw]'
            />
            <figcaption className='sr-only'>
              A unique feather headdress crafted by the artist.
            </figcaption>
          </figure>
          <div className='absolute border-4 border-colour5 border-solid -top-4 -left-4 lg:-top-10 lg:-left-10 h-full w-full'></div>
        </section>

        {/* Text */}
        <section className='grid items-center'>
          <article
            className={`grid h-fit gap-y-6 text-left opacity-0 p-4 rounded-lg ${
              inView ? 'fade-up-hard-animation' : ''
            }`}
          >
            <div className='grid gap-y-4'>
              <h1 className='text-2xl lg:text-3xl font-semibold'>
                The Artist Behind the Craft
              </h1>
              <p className='text-base md:text-lg font-thin'>
                Every headdress begins as an emotion, a spark of vision that’s
                transformed through careful hands into something extraordinary.
                Blending fantasy, nature, and individuality, each piece is a
                wearable sculpture — a celebration of power, beauty, and
                self-expression.
              </p>
              <p className='text-sm italic text-gray-500'>
                Each design is handcrafted and entirely unique — a personal
                reflection shaped through instinct and artistry.
              </p>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}

export default SectionOne;
