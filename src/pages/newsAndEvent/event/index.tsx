import { useGetComingSoonEvent } from "@/queries/event.queries";
import LargeEventCard from "@/shared/components/common/LargeEventCard";
import EventList from "@/shared/components/home/eventUpcoming/eventList";
import LayoutWebsite from "@/shared/components/layout/LayoutWebsite";
import Head from "next/head";

export function Event() {
    const {data: event} = useGetComingSoonEvent()
    return (
      <>
        <Head>
          <title>Sự kiện</title>
          <meta name="description" content="Trang chủ NGS" />
          <meta name="keywords" content="Công nghệ thông tin, Giải pháp số" />
        </Head>
        <section className="px-40 py-10">
            {event?.map((item) => (
                <LargeEventCard key={0} event={item}/>
            ))}
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
  Event.getLayout = (children: React.ReactNode) => (
    <LayoutWebsite>{children}</LayoutWebsite>
  );
  export default Event;
  