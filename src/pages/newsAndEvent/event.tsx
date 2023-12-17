import LargeEventCard from "@/shared/components/common/LargeEventCard";
import EventList from "@/shared/components/home/eventUpcoming/eventList";
import LayoutWebsite from "@/shared/components/layout/LayoutWebsite";
import Head from "next/head";

export function ProductDetail() {
    return (
      <>
        <Head>
          <title>Trang chủ</title>
          <meta name="description" content="Trang chủ NGS" />
          <meta name="keywords" content="Công nghệ thông tin, Giải pháp số" />
        </Head>
        <section className="px-40 py-10">
            <LargeEventCard title={"Mừng Tết Nguyên đán Giáp Thìn 2024, giảm giá lên đến 50%"} image={"/images/SuKien.png"} description={"Từ 01/01/2024 , Nhang Đức Tuấn đón Tết Nguyên đán Giáp Thìn 2024, giảm giá tất cả mặt hàng đối với các đơn hàng trên 50.000 đồng. "} date={"Tháng 01 2023"}/>
        </section>
        
        <EventList />
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
  