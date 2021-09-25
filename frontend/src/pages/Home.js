import React from 'react';
import EventCard from '../components/EventCard';
import EventsCarousel from '../components/EventsCarousel';
import Map from '../components/Map';

const Home = ({ events }) => {
  return (
    <div>
      <main className="main_screen">
        {/* current events */}
        <div>
          <h1 className="h1 text-cust-black font-header">Current Events</h1>
          <div className="md:relative">
            <section className="mb-8 md:absolute z-10">
              {events.slice(0, 4).map((event, idx) => (
                <EventCard
                  key={event.id}
                  event={event}
                  imgSrc={`/images/event${idx}.jpg`}
                />
              ))}
            </section>
            <section className="hidden md:block w-full">
              <Map events={events} />
            </section>
          </div>
        </div>
        {/* upcoming events */}
        <section className="mt-12">
          <h1 className="h1 text-cust-black font-header">Upcoming Events</h1>
          <EventsCarousel events={events} />
        </section>
      </main>
    </div>
  );
};

export default Home;
