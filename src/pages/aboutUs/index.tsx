import Head from 'next/head';
import LayoutWebsite from '@/shared/components/layout/LayoutWebsite';
import Banner from '@/shared/components/home/banner';
import ConnectForm from '@/shared/components/common/ConnectForm';
import History from '@/shared/components/home/whyUs/history';
import Address from '@/shared/components/home/whyUs/address';
import OurQuote from '@/shared/components/common/OurQuote';
import { Quote } from '@/shared/mock/whyUs';
import {useGetComingSoonEvent} from "@/queries/event.queries";
import {useGetHistory} from "@/queries/history.queries";
import {useGetSlogan} from "@/queries/slogan.queries";

const homeData = {
  name: 'Nhang Đức Tuấn',
  description: 'Mang bình an tới mỗi gia đình Việt',
  cover_image: 'bg-gioithieu',
};

export function AboutUs() {
  const { data: history } = useGetHistory();
  const { data: quote} = useGetSlogan();

  return (
    <>
      <Head>
        <title>Về chúng tôi</title>
        <meta name='description' content='Đồ thờ cúng' />
        <meta name='keywords' content='Đồ thờ cúng' />
      </Head>
      <div className={'about-background desktop:bg-cover laptop:bg-cover tablet:bg-[length:100%_69%] bg-no-repeat phone:bg-[length:100%_69%]'}>
        <Banner data={homeData} />
        <OurQuote data={quote||[]} />
        <History
          image={'/images/LichSu.jpg'}
          description={
            history ? history[0].description_vi : ''
          }
        />
        <Address image={'/images/Banner/Sản_phẩm.jpg'} description={''} />
        <ConnectForm />
      </div>
    </>
  );
}

AboutUs.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default AboutUs;
