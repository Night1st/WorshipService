import { NGSDataService } from "@/shared/mock/service";
import { PreImage } from "../../common/PreImage";
import TitleSection from "../../common/TitleSection";
import ServiceSection from "./ServiceSection";
import { AnimatePresence, motion } from "framer-motion";
import router from "next/router";
import IconLineDirection from "../../icon/IconLineDirection";
import IconArrowRight from "../../icon/IconArrowRight";

const Service = () => {
  return (
    <section className="px-32 text-center py-10 bg-[rgb(230,234,239,0.5)]">
      <TitleSection
        title="CÓ THỂ BẠN QUAN TÂM"
        description="Một số câu hỏi thường gặp có thể giải đáp thắc mắc cho bạn"
      />
      <div className="w-full items-start justify-center">
        <AnimatePresence>
        <div className="flex flex-col justify-center items-center mt-10 gap-5">
          {NGSDataService.map((item, idx) => {
            return <ServiceSection key={idx} item={item} idx={idx} />;
          })}
        </div>
        </AnimatePresence>
      </div>
      <div className='mb-4 flex justify-end'>
        <motion.button
          whileHover="hover"
          className={`bg-[#1B3864] relative flex justify-between items-center gap-3 text-white text-left py-4 px-4 rounded cursor-pointer mt-3`}
          onClick={() => router.push('')}
        >
          <p className="text-sm">{"Tìm hiểu thêm "}</p>
          <IconArrowRight  color="#fff" />
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

export default Service;
