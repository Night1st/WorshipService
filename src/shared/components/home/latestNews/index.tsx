import { motion } from "framer-motion";
import TitleSection from "../../common/TitleSection";
import router from "next/router";
import IconArrowRight from "../../icon/IconArrowRight";
import NewsCard from "./newsCard";

const LatestNews = () => {
    const MetaData = [
      {
        title: "Bài cúng Tất niên theo chuẩn phong tục cổ truyền dân tộc Việt",
        image: "/images/SuKien.png",
        author: "Ngô Thị Thu",
        date: "08/12/2023"
      },
      {
        title: "Bài cúng Tất niên theo chuẩn phong tục cổ truyền dân tộc Việt",
        image: "/images/SuKien.png",
        author: "Ngô Thị Thu",
        date: "08/12/2023"
      },      {
        title: "Bài cúng Tất niên theo chuẩn phong tục cổ truyền dân tộc Việt",
        image: "/images/SuKien.png",
        author: "Ngô Thị Thu",
        date: "08/12/2023"
      },      {
        title: "Bài cúng Tất niên theo chuẩn phong tục cổ truyền dân tộc Việt",
        image: "/images/SuKien.png",
        author: "Ngô Thị Thu",
        date: "08/12/2023"
      },      {
        title: "Bài cúng Tất niên theo chuẩn phong tục cổ truyền dân tộc Việt",
        image: "/images/SuKien.png",
        author: "Ngô Thị Thu",
        date: "08/12/2023"
      },      {
        title: "Bài cúng Tất niên theo chuẩn phong tục cổ truyền dân tộc Việt",
        image: "/images/SuKien.png",
        author: "Ngô Thị Thu",
        date: "08/12/2023"
      },
    ]
    return ( 
      <section className="px-40 py-10">
        <TitleSection
          title="TIN TỨC MỚI NHẤT"
          description="Theo dõi các tin tức mới nhất"
        />
        <div className="w-full min-h-[100px] grid grid-cols-1 gap-5 lg:grid-cols-2 mt-10 overflow-hidden">
          {MetaData.map((item, idx) => (
            <NewsCard key={idx} title={item.title} author={item.author} image={item.image} date={item.date}/>
          ))}
        </div>
        <div className="flex justify-end items-end">
            <motion.button
              whileHover="hover"
              className={`bg-[white] relative flex justify-center items-center gap-3 text-[#550F17] border-[var(--primary-color-900)] border-2 text-left py-4 px-4 min-w-[200px] cursor-pointer mt-3`}
              onClick={() => router.push("/news")}
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