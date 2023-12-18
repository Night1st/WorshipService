import LayoutWebsite from "@/shared/components/layout/LayoutWebsite";
import Head from "next/head";
import NewsList from "@/shared/components/home/latestNews/newsList";
import LargeNewsCard from "@/shared/components/common/LargeNewsCard";

export function News() {
    return (
      <>
        <Head>
          <title>Trang chủ</title>
          <meta name="description" content="Trang chủ NGS" />
          <meta name="keywords" content="Công nghệ thông tin, Giải pháp số" />
        </Head>
        <section className="px-40 py-10">
            <LargeNewsCard title={"Bài cúng Tất niên theo chuẩn phong tục cổ truyền dân tộc Việt"} image={"/images/TinTuc.png"} description={"Ngày tất niên có thể là ngày 30 tháng Chạp (nếu năm đủ) hoặc 29 tháng chạp (nếu năm thiếu). Đây là ngày các gia đình sẽ chuẩn bị mâm cơm và bài cúng tất niên. Vậy tại sao lại có tục lệ này? Ý nghĩa của chúng là gì? Ở bài viết này, chúng tôi sẽ lý giải cho bạn hiểu phong tục tập quán truyền thống trong ngày Tết âm lịch của nước ta mà không phải ai cũng biết."} date={"08/12/2023"} author={"Ngô Thị Thu"}/>
        </section>
        
        <NewsList />
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
  News.getLayout = (children: React.ReactNode) => (
    <LayoutWebsite>{children}</LayoutWebsite>
  );
  export default News;
  