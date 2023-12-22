import Head from 'next/head';
import LayoutWebsite from '@/shared/components/layout/LayoutWebsite';
import Banner from '@/shared/components/home/banner';
import ConnectForm from '@/shared/components/common/ConnectForm';

import EventUpcoming from '@/shared/components/home/eventUpcoming';
import LatestNews from '@/shared/components/home/latestNews';

const homeData = {
    name: 'TIN TỨC & SỰ KIỆN',
    description: 'Theo dõi các tin tức và sự kiện của chúng tôi',
    cover_image: 'bg-tintucsukien',
  };
  
  export function NewsAndEvent() {
    return (
      <>
        <Head>
          <title>Tin tức & Sự kiện</title>
          <meta name='description' content='Trang chủ NGS' />
          <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
        </Head>
        <Banner data={homeData} />
        <EventUpcoming/>
        <LatestNews/>
        <ConnectForm />
      </>
    );
  }
  // export async function getServerSideProps() {
  //   try {
  //     // Thực hiện yêu cầu API bằng Axios
  //     const response = await axios.get("API_URL");
  //     const data = response.data;
  
  //     return {
  //       props: {
  //         bannerData: data.bannerData,
  //         // Các dữ liệu phần tĩnh khác
  //       },
  //     };
  //   } catch (error) {
  //     // Xử lý lỗi nếu có
  //     console.error("Error fetching data:", error);
  //     return {
  //       props: {
  //         bannerData: [],
  //       },
  //     };
  //   }
  // }
  NewsAndEvent.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
  export default NewsAndEvent;
  