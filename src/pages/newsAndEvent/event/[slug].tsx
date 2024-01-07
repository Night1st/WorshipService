import { useGetComingSoonEvent } from '@/queries/event.queries';
import { IBaseResponse } from '@/schemas/baseResponse.type';
import { IEvent } from '@/schemas/event.type';
import { PreImage } from '@/shared/components/common/PreImage';
import EventCard from '@/shared/components/home/eventUpcoming/eventCard';
import IconChevronRight from '@/shared/components/icon/IconChevronRight';
import LayoutWebsite from '@/shared/components/layout/LayoutWebsite';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next/types';

type Props = {
  event: IBaseResponse<IEvent>;
};

export function EventDetail({ event }: Props) {
  const router = useRouter();
  const startDate = event && event.data && event.data.start_date ? new Date(event.data.start_date) : null;
  const endDate = event && event.data && event.data.end_date ? new Date(event.data.end_date) : null;
  const { data: otherEvent } = useGetComingSoonEvent(5);
  const breadcrumbs = ['Tin tức & Sự kiện', 'Sự kiện', 'Chi tiết sự kiện'];
  if (!event || !otherEvent) return <></>;
  return (
    <>
      <Head>
        <title>Chi tiết sự kiện</title>
        <meta name='description' content='Đồ thờ cúng' />
        <meta name='keywords' content='Đồ thờ cúng' />
      </Head>
      <section className='p-10 w-full phone:p-4 tablet:p-4'>
        <div className='flex items-center pb-5'>
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={'number' + index} className='flex justify-center items-center gap-2'>
              <p className='text-[#262417] cursor-pointer' onClick={() => router.push('/products')}>
                {breadcrumb}
              </p>
              {index !== breadcrumbs.length - 1 ? <IconChevronRight fill='#262417' /> : <></>}
            </div>
          ))}
        </div>
        <div className='w-full grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-6 justify-start items-start gap-8'>
          <div className='laptop:col-span-4 tablet:col-span-2 w-full flex flex-col justify-start items-start gap-7 text-black'>
            <PreImage width={1000} height={600} src={event.data.image} alt={''} />
            <h1 className='text-lg laptop:text-[34px] laptop:leading-[41px] font-semibold'>{event.data.title}</h1>
            <p className='text-base'>
              {startDate?.toLocaleDateString('en-GB')} - {endDate?.toLocaleDateString('en-GB')}
            </p>
            <p className='text-base'>{event.data.summary}</p>
            <p className='text-base'>{event.data.content}</p>
          </div>
          <div className='tablet:col-span-2 w-full min-h-[500px] flex flex-col justify-start items-start gap-8 phone:pt-16
          tablet:pt-16 desktop:pt-28 laptop:pt-28'>
            <h1 className='text-lg tablet:text-2xl laptop:text-[29px] text-[var(--primary-color-1000)]'>
              SỰ KIỆN KHÁC
            </h1>
            {otherEvent?.map((item, idx) => idx < 3 && <EventCard key={idx} event={item} />)}
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
