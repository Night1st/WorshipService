import ConnectForm from "@/shared/components/common/ConnectForm";
import MaybeInterested from "@/shared/components/common/MaybeInterested";
import ProductList from "@/shared/components/common/ProductList";
import Banner from "@/shared/components/home/banner";
import LayoutWebsite from "@/shared/components/layout/LayoutWebsite";
import Head from "next/head";
import { productData } from "@/shared/mock/product";

const homeData = {
    title: "NẾN",
    description: "Việc giữ lửa thắp nến, đèn thờ cúng đối với người Việt ta luôn được giữ gìn. Ánh sáng tượng trưng cho sự linh thiêng, ấm cúng. Mà những ánh sáng được tạo ra từ nén hương đèn dầu hay nến đều có ý nghĩa đặc trưng mà các gia đình luôn để tâm tới.",
    image: "bg-nen"
}

export function Nen() {
    return (
      <>
        <Head>
          <title>Nến</title>
          <meta name="description" content="Trang chủ NGS" />
          <meta name="keywords" content="Công nghệ thông tin, Giải pháp số" />
        </Head>
        <Banner data={homeData}/>
        <ProductList product={productData[1]} />
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
  Nen.getLayout = (children: React.ReactNode) => (
    <LayoutWebsite>{children}</LayoutWebsite>
  );
  export default Nen;