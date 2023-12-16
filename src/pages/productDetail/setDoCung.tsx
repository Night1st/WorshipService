import ConnectForm from "@/shared/components/common/ConnectForm";
import MaybeInterested from "@/shared/components/common/MaybeInterested";
import ProductList from "@/shared/components/common/ProductList";
import Banner from "@/shared/components/home/banner";
import LayoutWebsite from "@/shared/components/layout/LayoutWebsite";
import { productData } from "@/shared/mock/product";
import Head from "next/head";

const homeData = {
    title: "SET ĐỒ CÚNG",
    description: "Thờ cúng tổ tiên là một trong những tín ngưỡng đã có từ lâu đời và in sâu trong dòng chảy văn hóa của người dân Việt Nam. Thông qua việc thờ cúng, con người gửi gắm những mong mỏi trong cuộc sống của mình vào đấng linh thiêng.",
    image: "bg-setdocung"
}

export function SetDoCung() {
    return (
      <>
        <Head>
          <title>Set đồ cúng</title>
          <meta name="description" content="Trang chủ NGS" />
          <meta name="keywords" content="Công nghệ thông tin, Giải pháp số" />
        </Head>
        <Banner data={homeData}/>
        <ProductList product={productData[3]} />
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
  SetDoCung.getLayout = (children: React.ReactNode) => (
    <LayoutWebsite>{children}</LayoutWebsite>
  );
  export default SetDoCung;