import Head from "next/head";
import LayoutWebsite from "@/shared/components/layout/LayoutWebsite";
import Banner from "@/shared/components/home/banner";
import ProductCard from "@/shared/components/home/product";
import WhyUs from "@/shared/components/home/whyUs";
import Testimonial from "@/shared/components/home/testimonial";
import Service from "@/shared/components/home/service";
import { WhyUsData } from "@/shared/mock/whyUs";
import ConnectForm from "@/shared/components/common/ConnectForm";
import EventUpcoming from "@/shared/components/home/eventUpcoming";

const homeData = {
  title: "KHẨU HIỆU",
  description: "",
  image: "/images/BannerHome.png"
}

export function Home() {
  return (
    <>
      <Head>
        <title>Trang chủ</title>
        <meta name="description" content="Trang chủ NGS" />
        <meta name="keywords" content="Công nghệ thông tin, Giải pháp số" />
      </Head>
      <Banner data={homeData} text="Tìm hiểu thêm"/>
      <ProductCard />
      <EventUpcoming />
      <WhyUs data={WhyUsData}/>
      <ConnectForm/>
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
Home.getLayout = (children: React.ReactNode) => (
  <LayoutWebsite>{children}</LayoutWebsite>
);
export default Home;
