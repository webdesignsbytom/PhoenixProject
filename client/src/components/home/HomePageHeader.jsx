import React from 'react';
import { CONTACT_PAGE_URL } from '../../utils/Routes';
// Components

function HomePageHeader() {
  return (
    <header className='grid relative w-full items-center justify-center text-center px-4 pt-12'>
      <div className='grid gap-y-8 py-16 md:py-24 lg:py-36'>
        <div className='grid h-fit gap-y-2'>
          <h1 className='text-2xl md:text-6xl font-bold uppercase'>Phoenix Headdress</h1>
          <p className='text-lg md:text-2xl italic'>
            Rising in Art, Rebirth in Style
          </p>
          <p className='text-sm md:text-lg tracking-wide'>
            Custom Designs | Bold Statements | Eternal Flame
          </p>
        </div>

        <div>
          <a
            href={CONTACT_PAGE_URL}
            className='italic text-sm font-serif hover:text-colour6'
          >
            Enquire
          </a>
        </div>
      </div>
    </header>
  );
}

export default HomePageHeader;
