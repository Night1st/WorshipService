import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
    title: string;
    image: string;
    description: string;
    date: string
}

const EventCard = ({title, image, description, date}: Props) => {
    return(
        <motion.div
            className="flex flex-col items-center cursor-pointer border-collapse "
            style={{ border: "1px solid #555" }}
        >
            <div className="flex">
                <Image
                    src={image}
                    width={400}
                    height={400}
                    alt={""}/>
            </div>
            <div className="flex gap-3 px-3 py-5">
                <div className="flex flex-col gap-3 bg-[#DEDEDE] justify-center text-center min-w-[80px]">
                    <p className="text-2xl text-black ">01</p>
                    <p className="text-base">{date}</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-base font-bold text-black ">{title}</h1>
                    <p className="text-base line-clamp-2">{description}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default EventCard