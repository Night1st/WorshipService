import { useGetLatestNews } from "@/queries/news.queries";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import IconArrowDown from "../../icon/IconArrowDown";
import NewsCard from "./newsCard";

const NewsList = () => {
  const [limit, setLimit] = useState(5);
  const {data: news, refetch} = useGetLatestNews(limit)
  useEffect(() => {
    refetch();
  }, [limit]);
    return ( 
        <section className="p-4 laptop:p-10">
          <div className="w-full grid grid-cols-1 gap-5 laptop:grid-cols-2 mt-10 overflow-hidden">
            {news?.map((item, idx) => (
              idx === 0 ? ("")
              : (
                <NewsCard key={idx} news={item} />
              )
            ))}
          </div>
          <div className='flex justify-center items-center'>
        <motion.button
          whileHover='hover'
          className={`bg-transparent hover:bg-white relative flex justify-center items-center gap-3 text-[#550F17] border-[var(--primary-color-900)] text-left py-3 px-10 border-2 cursor-pointer mt-3`}
          onClick={() => limit && setLimit((prevLimit) => prevLimit + 5)}
        >
          <p className='text-sm'>{'Xem thêm'}</p>
          <IconArrowDown color='#550F17' />
          <motion.div
            className='absolute left-0 top-0 h-full w-0'
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
          ></motion.div>
        </motion.button>
      </div>
        </section>
      );
}

export default NewsList