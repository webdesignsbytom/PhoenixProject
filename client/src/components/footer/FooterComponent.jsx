import React from 'react';
import { Link } from 'react-router-dom';
// Constants
import {
  CompanyTagLine,
  CompanyName,
  CompanyEmailAddress,
} from '../../utils/Constants';
// Components
import FooterSocialCTA from './FooterSocialCTA';
// Data
import { FooterLinksArray } from '../../utils/data/FooterData';
// Images
import PhoenixLogo from '../../assets/images/logos/phoenix-headdress-logo.svg';
import SocialMediaCTA from '../socialMedia/SocialMediaCTA';

function FooterComponent() {
  return (
    <footer className='grid border-4 border-solid border-colour2 w-full overflow-hidden py-6 md:py-12 px-6 md:px-20 font-poppins'>
      <div className='grid lg:grid-cols-3 mx-auto gap-6 bg-colour1 px-2 md:px-10 py-8 w-full'>
        {/* Logo section */}
        <section className='grid h-fit my-auto gap-4 py-2 w-full'>
          <div className='grid items-center justify-center'>
            <div className={`grid gap-x-2 items-center`}>
              <figure
                role='img'
                aria-label='Phoenix Headdress Logo'
                className='w-8 h-8 mx-auto mb-2'
              >
                <img
                  src={PhoenixLogo}
                  alt='Phoenix Headdress Logo'
                  title='Phoenix Headdress Homepage'
                  className='w-8 h-8 object-contain mx-auto'
                />
              </figure>
              <span className='sr-only lg:not-sr-only' aria-hidden='false'>
                {CompanyName}
              </span>
              <span >
                {CompanyName}
              </span>
            </div>
          </div>
          <SocialMediaCTA />
        </section>

        {/* Footer links */}
        <section className='grid px-2 gap-2 w-full'>
          <section className='grid grid-rows-reg w-full lg:justify-center text-center'>
            <div className='text-left h-fit w-full'>
              <h6>Quick Links</h6>
              <div className='border-b-2 border-solid border-colour2 pt-2 mb-2'></div>
            </div>
            <ul className='text-left w-full'>
              {FooterLinksArray.map((link, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={link.route}
                      aria-label={`${link.name} page navigation tab`}
                      className={`text-sm`}
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                      aria-current={({ isActive }) =>
                        isActive ? 'page' : undefined
                      }
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        </section>

        {/* Social media links */}
        <section className='grid grid-rows-reg gap-2 w-fit px-2'>
          <section className='text-left'>
            <h6>Contact</h6>
            <div className='border-b-2 border-solid border-colour2 pt-2 mb-2'></div>
          </section>

          <section className='grid gap-1 h-fit text-sm'>
            {/* Email */}
            <div>
              <a href={`mailto:${CompanyEmailAddress}`}>
                <p>
                  <span className='font-semibold'>Email: </span>
                  {CompanyEmailAddress}
                </p>
              </a>
            </div>
            {/* Short address */}
            <div>
              <p>
                <span className='font-semibold'>Location: </span> UK
              </p>
            </div>
          </section>
        </section>
      </div>
    </footer>
  );
}

export default FooterComponent;
