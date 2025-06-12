import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// Components
import LoadingScreen from './components/utils/LoadingScreen';
// Utils
import { AuthenticateAdmin } from './utils/user/AuthenticateUser';
import LoginAuth from './utils/user/LoginAuth';
// Constants
import {
  ADMIN_PAGE_URL,
  CONTACT_PAGE_URL,
  HOME_PAGE_URL,
  MAINTENANCE_PAGE_URL,
  POLICIES_PAGE_URL,
  ADMIN_CONTACT_FORM_PAGE_URL,
  ADMIN_CALLBACK_FORM_PAGE_URL,
  NEWSLETTER_PAGE_URL,
  NEWSLETTER_ADMIN_PAGE_URL,
} from './utils/Routes';
import { COOKIE_TIMER, CookiePolicyName } from './utils/Constants';
// Pages
// Public
import HomePage from './pages/home/HomePage';
import ContactPage from './pages/contact/ContactPage';
// Newsletter
import NewsletterSignUpPage from './pages/newsletter/NewsletterSignUpPage';
import NewsletterAdminPage from './pages/newsletter/admin/NewsletterAdminPage';
// Admin
import AdminPage from './pages/admin/AdminPage';
import ContactFormAdminPage from './pages/contact/admin/ContactFormAdminPage';
import CallbackFormAdminPage from './pages/contact/admin/CallbackFormAdminPage';
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

          {/* Newsletter routes */}
          <Route
            path={NEWSLETTER_PAGE_URL}
            element={<NewsletterSignUpPage />}
          />
          <Route
            path={NEWSLETTER_ADMIN_PAGE_URL}
            element={<NewsletterAdminPage />}
          />

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
          <Route
            path={`${ADMIN_CALLBACK_FORM_PAGE_URL}/:password`}
            element={
              <LoginAuth>
                <CallbackFormAdminPage />
              </LoginAuth>
            }
          />

          {/* Terms and conditions */}
          <Route path={POLICIES_PAGE_URL} element={<TermAndPoliciesPage />} />

          {/* Other */}
          <Route path={MAINTENANCE_PAGE_URL} element={<MaintenancePage />} />

          {/* Secured routes */}
          <Route
            path={ADMIN_PAGE_URL}
            element={
              <AuthenticateAdmin>
                <AdminPage />
              </AuthenticateAdmin>
            }
          />

          {/* Error routes */}
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
