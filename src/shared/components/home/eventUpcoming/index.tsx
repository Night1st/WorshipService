import { motion } from "framer-motion";
import TitleSection from "../../common/TitleSection";
import EventCard from "./eventCard";
import router from "next/router";
import IconArrowRight from "../../icon/IconArrowRight";
import { useGetComingSoonEvent } from "@/queries/event.queries";

const EventUpcoming = () => {
  const MetaData = [
    {
      title: "Mừng Tết Nguyên đán Giáp Thìn 2024, giảm giá lên đến 50%",
      image: "/images/SuKien.png",
      description: "Từ 01/01/2024 , Nhang Đức Tuấn đón Tết Nguyên đán Giáp Thìn 2024, giảm giá tất cả mặt hàng đối với các đơn hàng trên 50.000 đồng. ",
      date: "Tháng 01 2023"
    },
    {
      title: "Mừng Tết Nguyên đán Giáp Thìn 2024, giảm giá lên đến 50%",
      image: "/images/SuKien.png",
      description: "Từ 01/01/2024 , Nhang Đức Tuấn đón Tết Nguyên đán Giáp Thìn 2024, giảm giá tất cả mặt hàng đối với các đơn hàng trên 50.000 đồng. ",
      date: "Tháng 01 2023"
    },
    {
      title: "Mừng Tết Nguyên đán Giáp Thìn 2024, giảm giá lên đến 50%",
      image: "/images/SuKien.png",
      description: "Từ 01/01/2024 , Nhang Đức Tuấn đón Tết Nguyên đán Giáp Thìn 2024, giảm giá tất cả mặt hàng đối với các đơn hàng trên 50.000 đồng. ",
      date: "Tháng 01 2023"
    },
  ]
  const {data: event} = useGetComingSoonEvent()
  return ( 
    <section className="p-4 laptop:px-32 laptop:py-8">
      <TitleSection
        title="SỰ KIỆN SẮP TỚI"
        description="Theo dõi chúng tôi để tham gia các sự kiện hấp dẫn"
      />
      <div className="w-full min-h-[300px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10 overflow-hidden">
        {event?.map((item, idx) => (
          <EventCard key={idx} title={item.title} summary={item.summary} image={item.image} public_date={item.public_date}/>
        ))}
      </div>
      <div className="flex justify-end items-end">
          <motion.button
            whileHover="hover"
            className={`bg-[white] relative flex justify-center items-center gap-3 text-[#550F17] border-[var(--primary-color-900)] border-2 text-left py-4 px-4 min-w-[200px] cursor-pointer mt-3`}
            onClick={() => router.push("/newsAndEvent/event")}
          >
            <p className="text-sm">{"Khám phá"}</p>
            <IconArrowRight  color="#550F17" />
            <motion.div
              className="absolute left-0 top-0 h-full w-0"
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            ></motion.div>
          </motion.button>
          </div>
    </section>
  );
};

export default EventUpcoming;
