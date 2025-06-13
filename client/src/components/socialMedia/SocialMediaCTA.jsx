import React from 'react';
// Constants
import {
  INSTAGRAM_URL,
  X_URL,
} from '../../utils/Constants';
// Icons
import { FaInstagram } from "react-icons/fa";

// Components
import SocialMediaPin from './SocialMediaPin';

function SocialMediaCTA() {
  const navigateToSocialMedia = (url) => {
    window.open(url, '_blank');
  };

  const socialMediaPins = [
    {
      serviceName: 'Instagram',
      icon: <FaInstagram />,
      service: 'Instagram',
      url: INSTAGRAM_URL,
    },
  ];

  return (
    <section className='grid w-fit mx-auto'>
      <div className='grid grid-flow-col gap-2'>
        {socialMediaPins.map((pin) => (
          <SocialMediaPin
            key={pin.serviceName}
            serviceName={pin.serviceName}
            icon={pin.icon}
            func={() => navigateToSocialMedia(pin.url)}
            background={pin.background}
          />
        ))}
      </div>
    </section>
  );
}

export default SocialMediaCTA;
