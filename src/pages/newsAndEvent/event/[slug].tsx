import { useGetComingSoonEvent } from '@/queries/event.queries';
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
  const startDate = new Date(event.data.start_date)
  const endDate = new Date(event.data.end_date)
  const {data: otherEvent} = useGetComingSoonEvent()
  if (!event) return <></>
  return (
    <>
      <Head>
        <title>Chi tiết sự kiện</title>
        <meta name='description' content='Trang chủ NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <section className='p-20 w-full'>
        <div className='w-full grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-6 justify-start items-start gap-8'>
            <div className='laptop:col-span-4 tablet:col-span-2 w-full flex flex-col justify-start items-start gap-7 text-black'>
                <PreImage width={1000} height={600} src={event.data.image} alt={""} />
                <h1 className='text-lg laptop:text-[34px] laptop:leading-[41px] font-semibold'>{event.data.title}</h1>
                <p className="text-base">{startDate.toLocaleDateString('en-GB')} - {endDate.toLocaleDateString('en-GB')}</p>
                <p className="text-base">{event.data.summary}</p>
                <p className="text-base">{event.data.content}</p>
            </div>
            <div className='tablet:col-span-2 w-full min-h-[500px] flex flex-col justify-start items-start gap-8'>
                <h1 className='text-lg tablet:text-2xl laptop:text-[29px] text-[var(--primary-color-1000)]'>SỰ KIỆN KHÁC</h1>
                {otherEvent?.map((item, idx) => (
                  idx < 3 && <EventCard key={idx} event={item}/>
                ))}
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
