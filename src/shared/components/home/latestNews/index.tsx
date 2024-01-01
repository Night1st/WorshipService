import { motion } from "framer-motion";
import TitleSection from "../../common/TitleSection";
import router from "next/router";
import IconArrowRight from "../../icon/IconArrowRight";
import NewsCard from "./newsCard";
import { useGetLatestNews } from "@/queries/news.queries";

const LatestNews = () => {
    const {data: latestNews} = useGetLatestNews()
    return ( 
      <section className="p-4 laptop:p-10">
        <TitleSection
          title="TIN TỨC MỚI NHẤT"
          description="Theo dõi các tin tức mới nhất"
        />
        <div className="w-full min-h-[100px] grid grid-cols-1 gap-5 lg:grid-cols-2 mt-10 overflow-hidden">
          {latestNews?.map((item, idx) => (
            <NewsCard key={idx} news={item}/>
          ))}
        </div>
        <div className="flex justify-end items-end">
            <motion.button
              whileHover="hover"
              className={`bg-transparent hover:bg-white relative flex justify-center items-center gap-3 text-[#550F17] border-[var(--primary-color-900)] border-2 text-left py-4 px-4 min-w-[200px] cursor-pointer mt-3`}
              onClick={() => router.push("/newsAndEvent/news")}
            >
              <p className="text-sm">{"Xem tất cả"}</p>
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
  
  export default LatestNews;