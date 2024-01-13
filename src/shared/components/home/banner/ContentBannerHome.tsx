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
const ContentBannerHome = ({ data }: Props) => {
  const src = data.cover_image
  return (
    <div
      className={`w-full flex h-screen flex-col justify-center leading-[90%] tracking-wide ${src} bg-cover bg-no-repeat px-3 desktop:bg-[length:100vw_69vh] laptop:bg-[length:100vw_69vh]  phone:bg-[length:100vw_35vh] tablet:bg-[length:100vw_69vh] tablet:px-5 laptop:px-[220px] ${data.name == "Nhang Đức Tuấn" ? "items-start" : "items-center"}`}>
      <div
        className="flex flex-col items-left desktop:translate-y-[-16vh] phone:translate-x-0 laptop:translate-x-[-20vw] laptop:translate-y-[-16vh] tablet:translate-y-[-16vh] phone:translate-y-[-32vh]">
        <div
          className="font-bold text-[46px] leading-[58px] tablet:text-6xl tablet:leading-[72px] laptop:text-[70px] laptop:leading-[116px] text-[#f4b13d] text-left">
          <AnimatePresence mode="wait">
            <motion.span variants={staggerChildren} animate="animate">
              {data.name}
            </motion.span>
          </AnimatePresence>
        </div>
        <motion.div className="text-base phone:text-[27px] font-[500] text-[#fbdfca] uppercase
            text-left phone:text-2xl laptop:text-4xl desktop:leading-[3.2rem] mt-5 phone:w-[250px] desktop:w-[400px] laptop:text-[40px]">
          {data.description}
        </motion.div>
      </div>
    </div>
  );
};

export default ContentBannerHome;
