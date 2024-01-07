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
    <div className={`w-full flex h-screen flex-col justify-center leading-[90%] tracking-wide ${src} bg-cover bg-no-repeat px-3  object-scale-down tablet:px-5 laptop:px-[220px] ${data.name == "Nhang Đức Tuấn" ? "items-start" : "items-center"}`}>
      {data.name == "Nhang Đức Tuấn" ? 
      (<div className="flex flex-col items-center">
        <div className="font-bold text-[48px] leading-[58px] tablet:text-6xl tablet:leading-[72px] laptop:text-[96px] laptop:leading-[116px] text-[var(--secondary-color-500)] text-center">
          <AnimatePresence mode="wait">
            <motion.span variants={staggerChildren} animate="animate" className={(vujahday.className)}>
              {data.name}
            </motion.span>
          </AnimatePresence>
        </div>
        <motion.div className="text-base text-center laptop:text-2xl leading-[29px] mt-5">
          {data.description}
        </motion.div>
      </div>) : 
      (<>
        <div className="font-bold text-[34px] leading-[41px] tablet:text-[48px] tablet-[58px] laptop:text-6xl laptop:leading-[72px] text-center">
          <AnimatePresence mode="wait">
            <motion.span variants={staggerChildren} animate="animate" className={(roboto.className)}>
              {data.name}
            </motion.span>
          </AnimatePresence>
        </div>
        <motion.div className="text-base text-center laptop:text-2xl leading-[29px] mt-5">
          {data.description}
        </motion.div>
      </>) }
    </div>
  );
};

export default ContentBanner;
