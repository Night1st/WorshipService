import Head from 'next/head';
import LayoutWebsite from '@/shared/components/layout/LayoutWebsite';
import Banner from '@/shared/components/home/banner';
import ConnectForm from '@/shared/components/common/ConnectForm';
import ContactInfo from '@/shared/components/home/contactInfo';

const homeData = {
  name: 'LIÊN HỆ',
  description: 'Theo dõi các tin tức và sự kiện của chúng tôi',
  cover_image: 'bg-lienhe',
};

export function AboutUs() {
  return (
    <>
      <Head>
        <title>Liên hệ</title>
        <meta name='description' content='Đồ thờ cúng' />
        <meta name='keywords' content='Đồ thờ cúng' />
      </Head>
      <Banner data={homeData} />
      <ContactInfo/>
      <ConnectForm />
    </>
  );
}
AboutUs.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default AboutUs;
