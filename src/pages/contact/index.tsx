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
