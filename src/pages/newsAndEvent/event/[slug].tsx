import { IBaseResponse } from '@/schemas/baseResponse.type';
import { IEvent } from '@/schemas/event.type';
import { PreImage } from '@/shared/components/common/PreImage';
import EventCard from '@/shared/components/home/eventUpcoming/eventCard';
import LayoutWebsite from '@/shared/components/layout/LayoutWebsite';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next/types';

type Props = {
  event: IBaseResponse<IEvent>
}

export function EventDetail({event}: Props) {
  if (!event) return <></>
  return (
    <>
      <Head>
        <title>Chi tiết sự kiện</title>
        <meta name='description' content='Trang chủ NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <section className='p-20 w-full'>
        <div className='w-full grid grid-cols-1 laptop:grid-cols-6 justify-start items-start gap-8'>
            <div className='md:col-span-4 w-full flex flex-col justify-start items-start gap-8 text-black'>
                <PreImage width={1000} height={600} src={event.data.image} alt={""} />
                <h1 className='text-lg md:text-3xl font-semibold'>{event.data.title}</h1>
                <p className="text-lg">{event.data.start_date} - {event.data.end_date}</p>
                <p className="text-xl">{event.data.summary}</p>
                <p className="text-xl">{event.data.content}</p>
            </div>
            <div className='md:col-span-2 w-full min-h-[500px] flex flex-col justify-start items-start gap-8'>
                <h1 className='text-lg laptop:text-4xl text-[var(--primary-color-1000)]'>SỰ KIỆN KHÁC</h1>
                {Array(3).fill(<EventCard event={event.data}/>)}
            </div>
        </div>
        </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ctx => {
  const slug = ctx.params?.slug;
  if (slug) {
    try {
      const res = await fetch(`https://www.dothocunggiadinh.com:8443/api/events/get-by-slug?slug=${slug}`);
      const event = await res.json();
      return {
        props: { event },
      };
    } catch (error) {
      return {
        props: {
          event: null,
          error: 'Failed to fetch product data',
        },
      };
    }
  } else {
    return {
      props: {},
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async _ctx => {
  return {
    paths: [],
    fallback: true,
  };
};

EventDetail.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default EventDetail;