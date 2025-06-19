import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// Components
import LoadingScreen from './components/utils/LoadingScreen';
// Utils
import LoginAuth from './utils/user/LoginAuth';
// Constants
import {
  CONTACT_PAGE_URL,
  HOME_PAGE_URL,
  MAINTENANCE_PAGE_URL,
  POLICIES_PAGE_URL,
  ADMIN_CONTACT_FORM_PAGE_URL,
  GALLERY_PAGE_URL,
  ABOUT_PAGE_URL,
} from './utils/Routes';
import { COOKIE_TIMER, CookiePolicyName } from './utils/Constants';
// Pages
// Public
import GalleryPage from './pages/gallery/GalleryPage';
import AboutPage from './pages/about/AboutPage';
import HomePage from './pages/home/HomePage';
import ContactPage from './pages/contact/ContactPage';
// Admin
import ContactFormAdminPage from './pages/contact/admin/ContactFormAdminPage';
// Terms and conditions
import TermAndPoliciesPage from './pages/policies/TermAndPoliciesPage';
// Maintainance
import MaintenancePage from './pages/maintenance/MaintenancePage';
// Error
import Error404 from './pages/error/Error404';

// Components
const CookieConsentModal = lazy(() =>
  import('./components/modals/CookieConsentModal')
);

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAgreedToCookies, setHasAgreedToCookies] = useState(true);

  useEffect(() => {
    const cookie = localStorage.getItem(CookiePolicyName);

    if (cookie) {
      setHasAgreedToCookies(true);
    } else {
      setHasAgreedToCookies(false);
    }
  }, []);

  useEffect(() => {
    if (hasAgreedToCookies) {
      setIsVisible(false);
    }

    const timer = setTimeout(() => {
      if (!hasAgreedToCookies) {
        setIsVisible(true);
      }
    }, COOKIE_TIMER);

    return () => clearTimeout(timer);
  }, [hasAgreedToCookies]);

  return (
    <>
      {isVisible && (
        <Suspense>
          <CookieConsentModal setHasAgreedToCookies={setHasAgreedToCookies} />
        </Suspense>
      )}

      {/* Suspense component wraps the lazy-loaded components */}
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          {/* Main page routes */}
          <Route path={HOME_PAGE_URL} index element={<HomePage />} />

          <Route path={ABOUT_PAGE_URL} element={<AboutPage />} />
          <Route path={GALLERY_PAGE_URL} element={<GalleryPage />} />

          {/* Contact routes */}
          <Route path={CONTACT_PAGE_URL} element={<ContactPage />} />


          {/* Contact admin routes */}
          <Route
            path={`${ADMIN_CONTACT_FORM_PAGE_URL}/:password`}
            element={
              <LoginAuth>
                <ContactFormAdminPage />
              </LoginAuth>
            }
          />

          {/* Terms and conditions */}
          <Route path={POLICIES_PAGE_URL} element={<TermAndPoliciesPage />} />

          {/* Other */}
          <Route path={MAINTENANCE_PAGE_URL} element={<MaintenancePage />} />


          {/* Error routes */}
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
