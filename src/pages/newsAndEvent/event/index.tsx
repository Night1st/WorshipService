import { useGetComingSoonEvent } from '@/queries/event.queries';
import LargeEventCard from '@/shared/components/common/LargeEventCard';
import EventList from '@/shared/components/home/eventUpcoming/eventList';
import LayoutWebsite from '@/shared/components/layout/LayoutWebsite';
import Head from 'next/head';
import React from 'react';

export function Event() {
  const { data: event } = useGetComingSoonEvent(5);
  return (
    <React.Fragment>
      <Head>
        <title>Sự kiện</title>
        <meta name='description' content='Đồ thờ cúng' />
        <meta name='keywords' content='Đồ thờ cúng' />
      </Head>
      <section className='p-10'>
        {event?.map((item, idx) => (idx === 0 ? <LargeEventCard key={idx} event={item} /> : ''))}
      </section>
      <EventList />
    </React.Fragment>
  );
}
Event.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default Event;
