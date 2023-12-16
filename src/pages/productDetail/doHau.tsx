import ConnectForm from "@/shared/components/common/ConnectForm";
import MaybeInterested from "@/shared/components/common/MaybeInterested";
import ProductList from "@/shared/components/common/ProductList";
import Banner from "@/shared/components/home/banner";
import LayoutWebsite from "@/shared/components/layout/LayoutWebsite";
import { productData } from "@/shared/mock/product";
import Head from "next/head";

const homeData = {
    title: "ĐỒ HẦU",
    description: "Nghi lễ tín ngưỡng thờ Mẫu được công nhận là di sản phi vật thể thứ 11 của dân tộc Việt Nam. Nhìn chung, tín ngưỡng thờ Mẫu này tạo nên tổng thể hài hòa của nhiều hoạt động đặc sắc, bao gồm các lễ hội dân gian, cuộc hành hương, nghi thức tế lễ hay những buổi tiệc thánh.",
    image: "bg-dohau"
}

export function DoHau() {
    return (
      <>
        <Head>
          <title>Đồ hầu</title>
          <meta name="description" content="Trang chủ NGS" />
          <meta name="keywords" content="Công nghệ thông tin, Giải pháp số" />
        </Head>
        <Banner data={homeData}/>
        <ProductList product={productData[4]} />
        <MaybeInterested />
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
  DoHau.getLayout = (children: React.ReactNode) => (
    <LayoutWebsite>{children}</LayoutWebsite>
  );
  export default DoHau;