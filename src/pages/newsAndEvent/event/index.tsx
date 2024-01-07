import { useGetComingSoonEvent } from '@/queries/event.queries';
import LargeEventCard from '@/shared/components/common/LargeEventCard';
import EventList from '@/shared/components/home/eventUpcoming/eventList';
import IconChevronRight from '@/shared/components/icon/IconChevronRight';
import LayoutWebsite from '@/shared/components/layout/LayoutWebsite';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const breadcrumbs = ['Tin tức & Sự kiện', 'Sự kiện'];
export function Event() {
  const { data: event } = useGetComingSoonEvent(5);
  const router = useRouter()
  return (
    <React.Fragment>
      <Head>
        <title>Sự kiện</title>
        <meta name='description' content='Đồ thờ cúng' />
        <meta name='keywords' content='Đồ thờ cúng' />
      </Head>
      <section className='p-10'>
      <div className='flex items-center pb-5'>
          {breadcrumbs.map((breadcrumb, index) => (
            <div className='flex justify-center items-center gap-2'>
              <p className='text-[#262417] cursor-pointer' onClick={() => router.push('/products')}>
                {breadcrumb}
              </p>
              {index !== breadcrumbs.length - 1 ? <IconChevronRight fill='#262417' /> : <></>}
            </div>
          ))}
        </div>
        {event?.map((item, idx) => (idx === 0 ? <LargeEventCard key={idx} event={item} /> : ''))}
      </section>
      <EventList />
    </React.Fragment>
  );
}
Event.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default Event;
