import { motion } from "framer-motion";
import Image from "next/image";
import { PreImage } from "../../common/PreImage";

interface Props {
    title: string;
    image: string;
    summary: string;
    public_date: Date
}

const EventCard = ({title, image, summary, public_date}: Props) => {
    const date = new Date(public_date)
    console.log(date)
    return(
        <motion.div
            className="flex flex-col items-center cursor-pointer border-collapse "
            style={{ border: "1px solid #555" }}
        >
            <div className="flex">
                <PreImage
                    src={image}
                    width={400}
                    height={400}
                    alt={""}
                    className="w-full h-full"
                    />
            </div>
            <div className="flex gap-3 px-3 py-5">
                <div className="flex flex-col gap-3 bg-[var(--secondary-color-500)] justify-center text-center min-w-[80px]">
                    <p className="text-2xl text-black ">{date.getDay()}</p>
                    <p className="text-base">{"Tháng " + (date.getMonth() + 1) + " " + date.getFullYear()}</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-base font-bold text-black ">{title}</h1>
                    <p className="text-base line-clamp-2">{summary}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default EventCard