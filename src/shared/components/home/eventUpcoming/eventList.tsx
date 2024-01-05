import EventCard from './eventCard';
import { useGetComingSoonEvent } from '@/queries/event.queries';
import { motion } from 'framer-motion';
import IconArrowDown from '../../icon/IconArrowDown';
import { useEffect, useState } from 'react';

const EventList = () => {
  const [limit, setLimit] = useState(5);
  const { data: event, refetch } = useGetComingSoonEvent(limit);
  useEffect(() => {
    refetch();
  }, [limit]);
  return (
    <section className='p-10'>
      <div className='w-full min-h-[350px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10 overflow-hidden'>
        {event?.map((item, idx) => (idx === 0 ? '' : <EventCard key={idx} event={item} />))}
      </div>
      <div className='flex justify-center items-center'>
        <motion.button
          whileHover='hover'
          className={`bg-transparent hover:bg-white relative flex justify-center items-center gap-1 laptop:gap-3 text-[#550F17] border-[var(--primary-color-900)] text-left px-4 laptop:py-3 laptop:px-10 border-2 cursor-pointer mt-3`}
          onClick={() => limit && setLimit((prevLimit) => prevLimit + 5)}
        >
          <p className='text-sm'>{'Xem thêm'}</p>
          <IconArrowDown fill='#550F17' />
          <motion.div
            className='absolute left-0 top-0 h-full w-0'
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
          ></motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default EventList;
