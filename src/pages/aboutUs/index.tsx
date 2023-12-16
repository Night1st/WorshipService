import Head from 'next/head';
import LayoutWebsite from '@/shared/components/layout/LayoutWebsite';
import Banner from '@/shared/components/home/banner';
import Product from '@/shared/components/home/product';
import WhyUs from '@/shared/components/home/whyUs';
import ConnectForm from '@/shared/components/common/ConnectForm';
import EventUpcoming from '@/shared/components/home/eventUpcoming';

const homeData = {
  title: 'Nhang Đức Tuấn',
  description: 'Mang bình an tới mỗi gia đình Việt',
  image: 'bg-trangchu',
};

export function AboutUs() {
  return (
    <>
      <Head>
        <title>Về chúng tôi</title>
        <meta name='description' content='Trang chủ NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <Banner data={homeData} />
      <Product />
      <EventUpcoming />
      <WhyUs />
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
