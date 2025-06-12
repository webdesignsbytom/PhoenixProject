import React from 'react';

function CarouselItem({ item }) {
  return (
    <div
      className='carousel_item h-full rounded-2xl overflow-hidden'
      style={{
        background: item.backgroundStyle, // use custom gradient background
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div
        className='carousel_item rounded-2xl' 
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }}
      >
        <div className='carousel_item_content'>
          <div className='title' style={{ color: item.titleColor || 'inherit' }}>
            {item.title}
          </div>
          <div className='name' style={{ color: item.nameColor || 'inherit' }}>
            {item.name}
          </div>
          <div className='des'>{item.description}</div>
          <div className='btn'>
            <button>See More</button>
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
