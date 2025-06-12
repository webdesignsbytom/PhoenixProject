import React from 'react';

function CarouselItem({ item }) {
  return (
    <div
      className="carousel_item"
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <div className="carousel_item_content">
        <div
          className="title"
          style={{ color: item.titleColor || 'inherit' }}
        >
          {item.title}
        </div>
        <div
          className="name"
          style={{ color: item.nameColor || 'inherit' }}
        >
          {item.name}
        </div>
        <div className="des">{item.description}</div>
        <div className="btn">
          <button>See More</button>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
