import React from 'react';
import { useInView } from 'react-intersection-observer';
// Images
import ArtistImage2 from '../../assets/images/people/phoenix-headdress-oragne-andhorned-spikey-headdress.jpg';

function SectionTwo() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className='grid w-full py-12' ref={ref}>
      <div className='grid w-full lg:grid-cols-rev container mx-auto gap-x-12 h-fit gap-y-8 px-8 sm:px-10'>
        {/* Text */}
        <section className='grid items-center'>
          <article
            className={`grid h-fit gap-y-6 text-left opacity-0 p-4 rounded-lg ${
              inView ? 'fade-up-hard-animation' : ''
            }`}
          >
            <div className='grid gap-y-4'>
              <h2 className='text-2xl lg:text-3xl font-semibold'>
                In the Studio: 
              </h2>
              <p className='text-base md:text-lg font-thin'>
                Every creation is the result of hours of
                focus, passion, and joy — a place where imperfection is part of
                the process and playfulness fuels perfection.
              </p>
              <p className='text-sm italic text-gray-500'>
                This isn’t just work. It’s love in motion.
              </p>
            </div>
          </article>
        </section>

        {/* Image */}
        <section className='grid h-fit relative -ml-4 lg:ml-0'>
          <figure className='z-10'>
            <img
              src={ArtistImage2}
              alt='The artist working joyfully in the studio on a headdress'
              className='w-full h-full object-contain object-center lg:max-w-[20vw]'
            />
            <figcaption className='sr-only'>
              The artist smiling while working on a custom feather headdress.
            </figcaption>
          </figure>
          <div className='absolute border-4 border-colour8 border-solid -top-4 -right-4 lg:-top-10 lg:-right-10 h-full w-full'></div>
        </section>
      </div>
    </section>
  );
}

export default SectionTwo;
