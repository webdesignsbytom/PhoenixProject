import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// Icons
import { IoMdMenu } from 'react-icons/io';
import { FaPhoenixSquadron } from 'react-icons/fa';
// Context
import { useUser } from '../../context/UserContext';
// Constants
import { HOME_PAGE_URL } from '../../utils/Routes';
import { CompanyName } from '../../utils/Constants';
// Hooks
import useNavigateToPage from '../../hooks/useNavigateToPage';
// Nav data
import { getNavLinkItemsArray } from '../../utils/data/NavData';
import { removeToken } from '../../utils/user/token';
import SocialMediaCTA from '../socialMedia/SocialMediaCTA';

function Navbar({ textColour, navBackgroundColour }) {
  const { user, setUser } = useUser();
  const navigateToPage = useNavigateToPage();
  const navLinkItemsArray = getNavLinkItemsArray(user);

  const [isPhoneNavOpen, setIsPhoneNavOpen] = useState(false);

  const togglePhoneNav = () => {
    setIsPhoneNavOpen((prev) => !prev);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    setUser({});
    removeToken();
    navigateToPage(HOME_PAGE_URL, { replace: true });
  };

  return (
    <nav
      role='navigation'
      aria-label='Main Navigation'
      className='relative h-fit z-20'
    >
      <section className='grid grid-cols-reg px-4 py-4'>
        <section className='pt-1'>
          <NavLink
            to={HOME_PAGE_URL}
            className={`grid grid-flow-col gap-x-2 items-center`}
            style={{ color: textColour }}
          >
            <FaPhoenixSquadron className='text-2xl' />{' '}
            <span>{CompanyName}</span>
          </NavLink>
        </section>

        <section className='grid justify-end'>
          {/* Mobile screen */}
          <button
            aria-label='Toggle navigation menu'
            onClick={togglePhoneNav}
            className='grid md:hidden w-fit h-fit items-center justify-center text-4xl text-white cursor-pointer'
          >
            <IoMdMenu
              className='active:scale-90 duration-300'
              style={{ color: textColour }}
            />
          </button>

          {/* Large screen */}
          <ul className='hidden md:grid grid-flow-col gap-6 items-center text-orange-600'>
            {navLinkItemsArray.map(({ path, label }) => (
              <NavItem
                key={label}
                url={path}
                title={label}
                textColour={textColour}
              />
            ))}
            {user?.email && (
              <li>
                <button
                  className='text-xl md:text-lg text-colour1 font-semibold font-titleFont hover:brightness-90 duration-200 active:scale-75'
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </section>
      </section>

      {/* Phone navbar */}
      <section
        className={`phone-nav absolute top-full left-0 w-full transition-transform duration-300 ${
          isPhoneNavOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        }`}
        style={{ backgroundColor: navBackgroundColour }}
      >
        <ul className='grid gap-8 items-center justify-center text-center text-orange-600 py-10'>
          {navLinkItemsArray.map(({ path, label }) => (
            <NavItem
              key={label}
              url={path}
              title={label}
              textColour={textColour}
            />
          ))}
          {user?.email && (
            <li>
              <button
                className='text-xl md:text-lg text-colour1 font-semibold font-titleFont hover:brightness-90 duration-200 active:scale-75'
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
        <div className='grid pb-6 text-3xl' style={{ color: textColour }}>
          <SocialMediaCTA />
        </div>
      </section>
    </nav>
  );
}

const NavItem = ({ url, title, textColour }) => {
  return (
    <li className='active:scale-90'>
      <NavLink
        to={url}
        aria-label={`${title} page navigation tab`}
        className='text-xl md:text-lg font-semibold font-titleFont hover:brightness-90 duration-200 active:scale-75'
        aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
        style={({ isActive }) => ({
          color: isActive ? '#f8fafc' : textColour,
        })}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default Navbar;
