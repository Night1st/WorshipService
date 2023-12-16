import ConnectForm from "@/shared/components/common/ConnectForm";
import MaybeInterested from "@/shared/components/common/MaybeInterested";
import ProductList from "@/shared/components/common/ProductList";
import Banner from "@/shared/components/home/banner";
import LayoutWebsite from "@/shared/components/layout/LayoutWebsite";
import { productData } from "@/shared/mock/product";
import Head from "next/head";

const homeData = {
    title: "TIỀN VÀNG",
    description: "Tiền vàng mã là một loại vật phẩm quen thuộc được sử dụng trong những nghi lễ thờ cúng của người Việt. Hơn cả thế, tiền vàng mã còn mang trong mình những ý nghĩa tâm linh và là biểu tượng của tín ngưỡng thờ cúng tốt đẹp được cha ông ta lưu truyền bao đời nay.",
    image: "bg-tienvang"
}

export function TienVang() {
    return (
      <>
        <Head>
          <title>Tiền vàng</title>
          <meta name="description" content="Trang chủ NGS" />
          <meta name="keywords" content="Công nghệ thông tin, Giải pháp số" />
        </Head>
        <Banner data={homeData}/>
        <ProductList product={productData[2]} />
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
  TienVang.getLayout = (children: React.ReactNode) => (
    <LayoutWebsite>{children}</LayoutWebsite>
  );
  export default TienVang;