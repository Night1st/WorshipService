import { AnimatePresence, motion } from "framer-motion";
import { Data } from ".";
import { Vujahday_Script } from "next/font/google";
import { Roboto } from "next/font/google";
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
const roboto = Roboto({ subsets: ["latin-ext"], display: 'swap', weight: ['400']})
const ContentBanner = ({ data }: Props) => {
  const src = data.cover_image
  return (
    <div className={`w-full flex min-h-screen flex-col justify-center items-center leading-[90%] tracking-wide ${src} lg:left-0 lg:items-center`} style={{backgroundSize: '100% 100%'}}>
      <div className="text-lg font-bold laptop:text-6xl laptop:leading-[72px]">
        <AnimatePresence mode="wait">
          <motion.span variants={staggerChildren} animate="animate" className={data.name == "Nhang Đức Tuấn" ? (vujahday.className) : (roboto.className)} style={data.name == "Nhang Đức Tuấn" ? {color: '#FFE26F', fontSize: '96px', lineHeight: '116px'} : {}}>
            {data.name}
          </motion.span>
        </AnimatePresence>
      </div>
      <motion.div className="text-sm text-center laptop:text-2xl leading-[29px] mt-5">
        {data.description}
      </motion.div>

    </div>
  );
};

export default ContentBanner;
