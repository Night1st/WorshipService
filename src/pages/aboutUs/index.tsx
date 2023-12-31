import Head from 'next/head';
import LayoutWebsite from '@/shared/components/layout/LayoutWebsite';
import Banner from '@/shared/components/home/banner';
import ConnectForm from '@/shared/components/common/ConnectForm';
import History from '@/shared/components/home/whyUs/history';
import Address from '@/shared/components/home/whyUs/address';
import OurQuote from '@/shared/components/common/OurQuote';
import { Quote } from '@/shared/mock/whyUs';

const homeData = {
  name: 'Nhang Đức Tuấn',
  description: 'Mang bình an tới mỗi gia đình Việt',
  cover_image: 'bg-gioithieu',
};

export function AboutUs() {
  return (
    <>
      <Head>
        <title>Về chúng tôi</title>
        <meta name='description' content='Đồ thờ cúng' />
        <meta name='keywords' content='Đồ thờ cúng' />
      </Head>
      <Banner data={homeData} />
      <OurQuote data={Quote}/>
      <History image={'/images/LichSu.jpg'} description={'Năm ..., Nhang Đức Tuấn chính thức được thành lập, nhằm cung cấp sản phẩm chính là hương cúng và tiền vàng. Năm ..., Nhang Đức Tuấn mở rộng kinh doanh các sản phẩm cúng lễ khác như nến, đồ hầu,...'} />
      <Address image={'/images/Banner/Sản_phẩm.jpg'} description={''}/>
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
AboutUs.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default AboutUs;
