import React from 'react';
// Analytics
import { usePageTracking } from '../../hooks/useAnalytics';
// Components
import FooterComponent from '../../components/footer/FooterComponent';
import HomePageMainContainer from '../../components/home/HomePageMainContainer';
import HomePageHeader from '../../components/home/HomePageHeader';
import Navbar from '../../components/nav/Navbar';
import BackToTopButton from '../../components/utils/BackToTopButton';
import FloatingButtons from '../../components/utils/FloatingButtons';

const HomePage = React.memo(() => {
  usePageTracking();

  return (
    <>
      {/* Page */}
      <div className='grid min-h-screen overflow-hidden bg-colour1 text-colour2 dark:bg-colour2 dark:text-colour1 font-poppins'>
        <div className='grid'>
          <Navbar />
          {/* Navigation */}
          <HomePageHeader />

          {/* Main page content */}
          <HomePageMainContainer />

          {/* Footer */}
          <FooterComponent />
        </div>
        
        <BackToTopButton />
        <FloatingButtons />
      </div>
    </>
  );
});

export default HomePage;
