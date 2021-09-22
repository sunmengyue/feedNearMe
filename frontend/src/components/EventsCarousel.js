import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Carousel, { consts } from 'react-elastic-carousel';
import Item from './Item';
import '../style.css';

const EventsCarousel = ({ events }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 640, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1024, itemsToShow: 4 },
    { width: 1280, itemsToShow: 5 },
    { width: 1536, itemsToShow: 6 },
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    let pointer = '';
    if (type === consts.PREV) {
      if (!isEdge) {
        pointer = '◀︎';
      }
    } else {
      if (!isEdge) {
        pointer = '▶︎';
      }
    }
    return (
      <button onClick={onClick}>
        <p className="text-4xl">{pointer}</p>
      </button>
    );
  };

  return (
    <div className="rec rec-arrow">
      <Carousel breakPoints={breakPoints} renderArrow={myArrow}>
        {events.slice(5, 20).map((event, idx) => (
          <Item key={uuidv4()} imgSrc={`/images/event${idx + 6}.jpg`}>
            {event.title}
          </Item>
        ))}
      </Carousel>
    </div>
  );
};

export default EventsCarousel;
