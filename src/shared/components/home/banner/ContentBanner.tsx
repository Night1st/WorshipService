import { AnimatePresence, motion } from "framer-motion";
import { Data } from ".";
import { Vujahday_Script } from "next/font/google";
export const staggerChildren = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};
interface Props {
  data: Data;
}
const vujahday = Vujahday_Script({ subsets: ["latin-ext"], display: 'swap', weight: ['400']})
const ContentBanner = ({ data }: Props) => {
  const src = data.cover_image
  return (
    <div className={`w-full flex min-h-screen flex-col justify-center items-center leading-[90%] tracking-wide ${src} lg:left-0 lg:items-center`} style={{backgroundSize: '100% 100%'}}>
      <div className="text-lg font-bold lg:text-6xl">
        <AnimatePresence mode="wait">
          <motion.span variants={staggerChildren} animate="animate" className={data.name == "Nhang Đức Tuấn" ? (vujahday.className) : ""} style={data.name == "Nhang Đức Tuấn" ? {color: '#FFE26F'} : {}}>
            {data.name}
          </motion.span>
        </AnimatePresence>
      </div>
      <motion.div className="text-sm text-center lg:text-2xl mt-5">
        {data.description}
      </motion.div>

    </div>
  );
};

export default ContentBanner;
