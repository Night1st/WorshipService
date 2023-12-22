import { motion } from "framer-motion";
import { PreImage } from "./PreImage";

interface Props {
    title: string;
    image: string;
    description: string;
    date: string
}

const LargeEventCard = ({title, image, description, date}: Props) => {
    return(
        <motion.div
            className="relative flex flex-col items-center cursor-pointer border-collapse "
            style={{ border: "1px solid #555" }}
        >
                <PreImage
                    src={image}
                    alt={""}
                    className="w-full h-auto"
                    />
            <div className="flex gap-3 px-3 py-5 ">
                <div className="flex flex-col gap-3 bg-[var(--secondary-color-500)] justify-center text-center min-w-[80px]">
                    <p className="text-2xl text-black ">01</p>
                    <p className="text-base">{date}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <h1 className="text-base font-bold text-black ">{title}</h1>
                    <p className="text-base line-clamp-2">{description}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default LargeEventCard