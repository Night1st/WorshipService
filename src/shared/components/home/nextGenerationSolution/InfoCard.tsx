import { PreImage } from "../../common/PreImage";
import { motion } from "framer-motion";
import { useState } from "react";
import BtnFindOut from "../../common/BtnFindOut";
import router from "next/router";
import IconLineDirection from "../../icon/IconLineDirection";
import IconArrowRight from "../../icon/IconArrowRight";

interface Props {
  title: string;
  icon: string;
  link: string
}

const InfoCard = ({ title, icon, link }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex flex-col justify-center items-center rounded-xl p-5 cursor-pointer overflow-hidden border-collapse "
      style={{ border: "1px solid #555" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        backgroundColor: isHovered ? "#1B3864" : "#fff",
        color: isHovered ? "#fff" : "#000",
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
    >
      <div className="flex items-start">
        <PreImage
          src={icon}
          width={50}
          height={50}
          alt="solution"
          className="mb-10"
        />
      </div>
      <div className="flex flex-col justify-center text-center items-center gap-10">
        <h1 className="text-2xl">{title}</h1>
        <motion.button
          whileHover="hover"
          className={`bg-[#1B3864] relative flex justify-between items-center gap-3 text-white text-left py-4 px-4 rounded cursor-pointer mt-3`}
          onClick={() => router.push(link)}
        >
          <p className="text-sm">{"TÌm hiểu thêm"}</p>
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
    </motion.div>
  );
};

export default InfoCard;
