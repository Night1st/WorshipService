import { motion } from "framer-motion";
import IconLineDirection from "../icon/IconLineDirection";
import { useRouter } from "next/router";

interface Props {
  text?: string;
  link: string;
  color: string;
  colorHover: string
}

const BtnFindOut = ({ text, link, color, colorHover }: Props) => {
  const router = useRouter()
  const buttonVariants = {
    hover: {
      backgroundColor: colorHover,
      width: "100%",
      opacity: 0.3      
    },
  };

  return (
    <motion.button
      whileHover="hover"
      className={`bg-[${color}] relative flex justify-between items-center gap-3 text-black text-left py-4 px-4 rounded cursor-pointer mt-3`}
      onClick={() => router.push(link)}
    >
      <p className="text-sm">{text ? text : "Tìm hiểu thêm"}</p>
      <IconLineDirection  color="#000" />
      <motion.div
        className="absolute left-0 top-0 h-full w-0"
        variants={buttonVariants}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      ></motion.div>
    </motion.button>
  );
};

export default BtnFindOut;
