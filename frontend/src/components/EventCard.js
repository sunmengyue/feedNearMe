import React from 'react';
import { BookmarkIcon } from '@heroicons/react/outline';

const EventCard = ({ event, imgSrc }) => {
  return (
    <div className="flex justify-between py-4 px-6 border-b first:border-t cursor-pointer hover:opacity-80 hover:shadow-lg hover:-translate-y-2 transform transition-all sm:flex-row-reverse md:justify-evenly">
      <BookmarkIcon className="hidden sm:block h-5 stroke-1 text-cust-red cursor-pointer flex-shrink-0" />
      <div className="flex flex-col sm:w-96 ">
        <h4 className="text-custBlack font-main-text text-xs">
          {`${event.updated.substring(0, 10)}   ${event.updated.substring(
            11,
            19,
          )}`}
        </h4>
        <h2 className="text-lg py-2">{event.title}</h2>
        <div className="w-10 border-t flex-grow" />
        <div>
          {event.labels.map((label, idx) => (
            <p key={idx} className="inline-flex mr-3 text-gray-400">
              {label}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-end flex-shrink-0">
        <img
          src={imgSrc}
          width="150px"
          height="48px"
          className="rounded-xl mb-3 sm:mr-6"
        />
        <BookmarkIcon className="h-5 stroke-1 text-cust-red cursor-pointer sm:hidden" />
      </div>
    </div>
  );
};

export default EventCard;
