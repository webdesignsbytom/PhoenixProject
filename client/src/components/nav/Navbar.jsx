import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// Icons
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { IoCloseOutline } from 'react-icons/io5';
// Context
import { useUser } from '../../context/UserContext';
// Constants
// Data
import { getNavLinkItemsArray } from '../../utils/data/NavData';
// Images
import { FaPhoenixSquadron } from 'react-icons/fa';
import { HOME_PAGE_URL } from '../../utils/Routes';
import { CompanyName } from '../../utils/Constants';

function Navbar() {
  const { user } = useUser();
  const navLinkItemsArray = getNavLinkItemsArray(user);
  const [isPhoneNavOpen, setIsPhoneNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1); // Add background after scrolling 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const togglePhoneNav = () => {
    setIsPhoneNavOpen((prev) => !prev);
  };

  return (
    <nav
      role='navigation'
      aria-label='Main Navigation'
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-75 ${
        isScrolled
          ? 'bg-colour1/80 dark:bg-colour2/80 duration-75'
          : 'bg-transparent duration-75'
      }`}
    >
      <section
        className={`grid grid-flow-col px-4 duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
      >
        <section className='lg:hidden'>
          <section className='pt-1'>
            <NavLink
              to={HOME_PAGE_URL}
              className={`grid grid-flow-col gap-x-2 items-center`}
            >
              <FaPhoenixSquadron className='text-2xl' />{' '}
              <span>{CompanyName}</span>
            </NavLink>
          </section>
        </section>
        <section className='grid justify-end lg:justify-center'>
          {/* Mobile screen */}
          <button
            aria-label='Toggle navigation menu'
            onClick={togglePhoneNav}
            className='grid lg:hidden w-fit h-fit items-center justify-center text-4xl text-colour2 dark:text-colour1 cursor-pointer'
          >
            <IoMdMenu className='active:scale-90 duration-300' />
          </button>

          {/* Large screen */}
          <ul className='hidden text-colour2 border-b-2 border-solid border-colour1 dark:border-colour1 lg:grid grid-flow-col gap-y-6 gap-4 2xl:gap-6 items-center dark:text-colour1'>
            {navLinkItemsArray.map(({ path, label }) => (
              <NavItem key={label} url={path} title={label} />
            ))}
          </ul>
        </section>
      </section>

      {/* Phone navbar */}
      <section
        className={`phone-nav absolute top-0 grid items-center gap-4 left-0 w-full bg-colour1 dark:bg-colour2 main_bg_phone min-h-screen transition-transform duration-300 ${
          isPhoneNavOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={togglePhoneNav}
          aria-label='Close navigation menu'
          className='absolute top-4 right-4 text-colour2 dark:text-colour1 text-4xl font-bold cursor-pointer active:scale-90 transition-transform duration-300 '
        >
          <IoCloseOutline />
        </button>

        {/* Menu */}
        <ul className='grid gap-y-3 md:gap-y-4 items-center justify-center h-fit text-center text-colour2 dark:text-colour1 py-10'>
          {navLinkItemsArray.map(({ path, label }) => (
            <NavItem key={label} url={path} title={label} />
          ))}
        </ul>
      </section>
    </nav>
  );
}

const NavItem = ({ url, title }) => {
  const location = useLocation();
  const isActive = location.pathname === url;

  return (
    <li className='active:scale-90 mx-auto'>
      <NavLink
        to={url}
        aria-label={`${title} page navigation tab`}
        className={`tracking-widest lg:tracking-normal text-colour2 dark:text-colour1 text-2xl lg:text-lg font-newsweekly relative px-4 py-2 transition duration-300
          hover:text-colour6 dark:hover:text-colour6 hover:shadow-neon active:scale-75 flex items-center gap-2 ${
            isActive ? 'text-colour5 font-semibold' : ''
          }`}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default Navbar;
