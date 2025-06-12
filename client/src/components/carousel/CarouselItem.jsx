import React from 'react';

function CarouselItem({ item }) {
  return (
    <section
      className="carousel_item h-full rounded-2xl overflow-hidden"
      style={{
        background: item.backgroundStyle,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div
        className="carousel_item rounded-2xl"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }}
      >
        <article className="carousel_item_content absolute top-1/2 left-4 lg:left-52 transform -translate-y-1/2 w-[400px] text-left text-white hidden md:block">
          <div
            className="text-3xl md:text-5xl lg:text-8xl uppercase font-bold leading-none text-[#14ff72cb] opacity-0 animate-[animate_1s_ease-in-out_2.3s_forwards]"
            style={{ color: item.titleColor || '#14ff72cb' }}
          >
            {item.title}
          </div>

          <div
            className="text-3xl md:text-5xl lg:text-8xl uppercase font-bold leading-none text-shadow-md opacity-0 animate-[animate_1s_ease-in-out_2.6s_forwards]"
            style={{
              color: item.nameColor || '#fff',
              textShadow: '3px 4px 4px rgba(255,255,255,0.8)',
            }}
          >
            {item.name}
          </div>

          <div className="mt-[10px] mb-[20px] ml-[5px] text-[18px] opacity-0 animate-[animate_1s_ease-in-out_2.9s_forwards]">
            {item.description}
          </div>

          <div className="flex gap-4 mt-4 opacity-0 animate-[animate_1s_ease-in-out_3.2s_forwards]">
            <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition">See More</button>
            <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">Subscribe</button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default CarouselItem;
