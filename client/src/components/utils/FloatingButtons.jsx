// components/common/FloatingButtons.js
import React, { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md";
import { CompanyEmailAddress } from '../../utils/Constants';

function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${CompanyEmailAddress}`; // replace with real email
  };

  return (
    <div
      className={`fixed bottom-6 z-50 flex items-center justify-between w-full px-6 pointer-events-none sm:hidden ${
        visible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-300`}
    >
      {/* Email button (left side) */}
      <button
        onClick={handleEmailClick}
        className='pointer-events-auto flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full shadow-lg'
      >
       <MdOutlineEmail />

        <span className='text-sm font-medium'>Email Me</span>
      </button>

      {/* Back to top button (right side) */}
      <button
        onClick={scrollToTop}
        className='pointer-events-auto p-3 rounded-full bg-black text-white dark:bg-white dark:text-black shadow-lg'
        aria-label='Back to Top'
      >
        <FaChevronUp />
      </button>
    </div>
  );
}

export default FloatingButtons;
