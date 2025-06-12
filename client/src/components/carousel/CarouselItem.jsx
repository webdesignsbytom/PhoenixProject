import React from 'react';

function CarouselItem({ item }) {
  return (
    <div
      className="carousel_item"
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <div className="content">
        <div className="title">{item.title}</div>
        <div className="name">{item.name}</div>
        <div className="des">
          {item.description}
        </div>
        <div className="btn">
          <button>See More</button>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
