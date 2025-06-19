import React from 'react';
// Constants
import { CompanyName } from '../../utils/Constants';
// Components
import Navbar from '../../components/nav/Navbar';
import { HelmetItem } from '../../components/utils/HelmetItem';
import GalleryPageMainContainer from '../../components/gallery/GalleryPageMainContainer';
import BackToTopButton from '../../components/utils/BackToTopButton';
import FloatingButtons from '../../components/utils/FloatingButtons';
import FooterComponent from '../../components/footer/FooterComponent';

function GalleryPage() {
  return (
    <>
      {/* SEO & Tab Info */}
      <HelmetItem
        PageName='Headdress Gallery'
        desc={`Explore the unique hand-crafted Phoenix Headdress Collection by ${CompanyName}. Bold fantasy, vibrant colors, and wearable art in every piece.`}
        keywords={`headdress gallery, phoenix headdresses, handmade headpieces, fantasy costumes, ${CompanyName}, wearable art`}
        additionalMeta={[
          { name: 'robots', content: 'index, follow' },
          { name: 'author', content: CompanyName },
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Phoenix Headdress Gallery',
          description: 'A collection of hand-crafted fantasy headdresses.',
        }}
      />

      {/* Page Content */}
      <div className='grid min-h-screen bg-colour1 text-colour2 dark:bg-colour2 dark:text-colour1 font-poppins overflow-hidden invisible_scrollbar'>
        <div className='grid grid-rows-reg'>
          {/* Navigation */}
          <Navbar />
          <header className='grid relative w-full items-center justify-center text-center px-4 pt-12'>
            <div className='grid gap-y-8 py-16 md:py-24 lg:py-36'>
              <div className='grid h-fit gap-y-2'>
                <h1 className='text-2xl md:text-6xl font-bold uppercase'>
                  Gallery
                </h1>
                <p className='text-sm md:text-lg tracking-wide'>
                  Custom Designs | Bold Statements
                </p>
              </div>
            </div>
          </header>
        </div>

        {/* Main Gallery Content */}
        <GalleryPageMainContainer />

        <FooterComponent />

        <BackToTopButton />
        <FloatingButtons />
      </div>
    </>
  );
}

export default GalleryPage;
