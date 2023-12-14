import ConnectForm from "@/shared/components/common/ConnectForm";
import ProductList from "@/shared/components/common/ProductList";
import Banner from "@/shared/components/home/banner";
import ProductType from "@/shared/components/home/productType";
import LayoutWebsite from "@/shared/components/layout/LayoutWebsite";
import Head from "next/head";

const homeData = {
    title: "SẢN PHẨM",
    description: "Chúng tôi luôn mong muốn mang đến các sản phẩm chất lượng nhất",
    image: "/images/BannerHome.png"
}

export function ProductDetail() {
    return (
      <>
        <Head>
          <title>Trang chủ</title>
          <meta name="description" content="Trang chủ NGS" />
          <meta name="keywords" content="Công nghệ thông tin, Giải pháp số" />
        </Head>
        <Banner data={homeData} text="Tìm hiểu thêm"/>
        <ProductType />
        <ProductList />
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
  ProductDetail.getLayout = (children: React.ReactNode) => (
    <LayoutWebsite>{children}</LayoutWebsite>
  );
  export default ProductDetail;
  