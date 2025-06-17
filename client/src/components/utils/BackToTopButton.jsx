// components/common/BackToTopButton.js
import React, { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      aria-label='Back to Top'
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black`}
    >
      <FaChevronUp />
    </button>
  );
}

export default BackToTopButton;
