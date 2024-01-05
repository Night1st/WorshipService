import LayoutWebsite from "@/shared/components/layout/LayoutWebsite";
import Head from "next/head";
import NewsList from "@/shared/components/home/latestNews/newsList";
import LargeNewsCard from "@/shared/components/common/LargeNewsCard";
import { useGetLatestNews } from "@/queries/news.queries";

export function News() {
  const {data: news} = useGetLatestNews(5)
    return (
      <>
        <Head>
          <title>Trang chủ</title>
          <meta name="description" content="Đồ thờ cúng" />
          <meta name="keywords" content="Đồ thờ cúng" />
        </Head>
        <section className="p-4 laptop:p-10">
          {news?.map((item, idx) => (
            idx === 0 ? (
              <LargeNewsCard key={idx} news={item} />
            ) : ("")
          ))}
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
  