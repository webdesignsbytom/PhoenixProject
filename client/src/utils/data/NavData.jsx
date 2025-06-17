import {
  HOME_PAGE_URL,
  CONTACT_PAGE_URL,
  GALLERY_PAGE_URL,
  ABOUT_PAGE_URL,
} from '../Routes';

export const getNavLinkItemsArray = (user) => [
  { path: HOME_PAGE_URL, label: 'Home' },
  { path: ABOUT_PAGE_URL, label: 'About' },
  { path: GALLERY_PAGE_URL, label: 'Gallery' },
  { path: CONTACT_PAGE_URL, label: 'Contact' },
];
