import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  item: any;
  idx: number;
}

const ServiceSection = ({ item, idx }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const variants = {
    hidden: {
      opacity: 0,
      display: 'none',
    },
    visible: {
      display: 'block',
      opacity: 1,
    }
  }
  return (
    <div
      className={`w-full py-2 flex flex-col gap-5 min-h-[100px] cursor-pointer`}
      onClick={() => setIsHovered(!isHovered)}
    >
      <div className={`${isHovered && 'bg-[#1B3864] text-white'} flex justify-start items-start gap-8 border-solid border-2 rounded-2xl`}>
        <h1 className="text-2xl font-bold p-5">{item.title}</h1>
      </div>

      <motion.div
        className="flex flex-col justify-start items-start ml-20 mr-5 p-5 rounded-2xl border-solid border-2"
        animate={isHovered ? "visible" : "hidden"}
        variants={variants}
      >
        <p className="text-left">{item.des}</p>
      </motion.div>
    </div>
  );
};

export default ServiceSection;
