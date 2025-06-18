import React from 'react';
// Constants
import { CompanyName } from '../../utils/Constants';
// Components
import Navbar from '../../components/nav/Navbar';
import { HelmetItem } from '../../components/utils/HelmetItem';
import AboutPageMainContainer from '../../components/about/AboutPageMainContainer';
import FooterComponent from '../../components/footer/FooterComponent';

function AboutPage() {
  return (
    <>
      {/* SEO & Metadata */}
      <HelmetItem
        PageName='About the Artist'
        desc={`Discover the creative force behind ${CompanyName}'s signature headdresses. Learn about the artist’s journey, philosophy, and inspiration behind each handcrafted design.`}
        keywords={`about the artist, phoenix headdress, creative process, handmade, ${CompanyName}, wearable art, designer bio`}
        additionalMeta={[
          { name: 'robots', content: 'index, follow' },
          { name: 'author', content: CompanyName },
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About the Artist',
          description: `Meet the artist behind ${CompanyName} and explore the passion that shapes each wearable masterpiece.`,
        }}
      />

      {/* Page Layout */}
      <div className='grid min-h-screen bg-colour1 text-colour2 dark:bg-colour2 dark:text-colour1 font-poppins'>
        <div className='grid grid-rows-reg'>
          {/* Navigation */}
          <Navbar />

          {/* Page Header */}
          <header className='grid relative w-full items-center justify-center text-center px-4 pt-12'>
            <div className='grid gap-y-8 py-16 md:py-24 lg:py-36'>
              <div className='grid h-fit gap-y-2'>
                <h1 className='text-2xl md:text-6xl font-bold uppercase'>
                  About the Artist
                </h1>
                <p className='text-sm md:text-lg tracking-wide'>
                  Vision | Craft | Expression
                </p>
              </div>
            </div>
          </header>
        </div>

        {/* Main About Page Content */}
        <AboutPageMainContainer />

        {/* Footer */}
        <FooterComponent />
      </div>
    </>
  );
}

export default AboutPage;
