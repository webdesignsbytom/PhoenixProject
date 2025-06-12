import React from 'react';

function CarouselItem({ item }) {
  return (
    <section
      className='carousel_item h-full rounded-2xl shadow-cardShadowBold'
      style={{
        background: item.backgroundStyle,
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
        <article className='carousel_item_content absolute top-1/2 left-4 lg:left-36 transform -translate-y-1/2 w-[400px] text-left text-white hidden md:block px-4'>
          <div
            className='text-3xl md:text-5xl lg:text-8xl uppercase font-bold leading-none opacity-0 animate-[animate_1s_ease-in-out_2.3s_forwards] lg:animate-[animate_1s_ease-in-out_1s_forwards]'
            style={{
              color: item.titleColor || '#14ff72cb',
              textShadow:
                item.textShadow ||
                `3px 4px 4px ${
                  item.textShadowColour || 'rgba(255,255,255,0.8)'
                }`,
            }}
          >
            {item.title}
          </div>

          <div
            className='text-3xl md:text-5xl lg:text-8xl uppercase font-bold leading-none text-shadow-md opacity-0 animate-[animate_1s_ease-in-out_2.6s_forwards] lg:animate-[animate_1s_ease-in-out_1.1s_forwards]'
            style={{
              color: item.nameColor || '#fff',
              textShadow:
                item.textShadow ||
                `3px 4px 4px ${
                  item.textShadowColour || 'rgba(255,255,255,0.8)'
                }`,
            }}
          >
            {item.name}
          </div>

          <div
            className='mt-[10px] mb-[20px] ml-[5px] lg:text-xl opacity-0 animate-[animate_1s_ease-in-out_2.9s_forwards] lg:animate-[animate_1s_ease-in-out_1.2s_forwards]'
            style={{ color: item.paraTextColour || '#14ff72cb' }}
          >
            {item.description}
          </div>

          <div className='flex gap-4 mt-4 opacity-0 animate-[animate_1s_ease-in-out_3.2s_forwards] lg:animate-[animate_1s_ease-in-out_1.3s_forwards]'>
            <a
              href='main-home'
              className='px-4 lg:px-8 py-2 rounded hover:brightness-110 transition shadow-cardShadowBold'
              style={{
                backgroundColor: item.buttonBgColor || '#ffffff',
                border: `2px solid ${item.buttonBorderColor || '#000000'}`,
                color: item.buttonTextColor || '#000000',
              }}
            >
              See More
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default CarouselItem;
