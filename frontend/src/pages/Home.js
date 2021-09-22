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
          <div className="lg:flex lg:justify-between">
            <section className="mb-8">
              {events.slice(0, 4).map((event, idx) => (
                <EventCard
                  key={event.id}
                  event={event}
                  imgSrc={`/images/event${idx}.jpg`}
                />
              ))}
            </section>
            <section className="w-full lg:ml-6 flex justify-center">
              <Map events={events} />
            </section>
          </div>
        </div>
        {/* upcoming events */}
        <section>
          <h1 className="h1 text-cust-black font-header">Upcoming Events</h1>
          <EventsCarousel events={events} />
        </section>
      </main>
    </div>
  );
};

export default Home;
