import { INews } from "@/schemas/news.type";
import { motion } from "framer-motion";
import Image from "next/image";
import { PreImage } from "./PreImage";

interface Props {
    news: INews
}

const LargeNewsCard = ({news}: Props) => {
    return(
        <motion.div
            className="flex cursor-pointer border-collapse phone:max-laptop:flex-col"
        >
            <div className="flex laptop:w-1/2">
                <PreImage
                    src={news.image}
                    width={800}
                    height={800}
                    alt={""}
                    className="w-full h-auto"
                    />
            </div>
            <div className="flex flex-col gap-3 p-10 laptop:w-1/2">
                <h1 className="text-4xl font-bold text-black ">{news.title}</h1>
                <p className="text-base">{news.public_date} - {news.author}</p>
                <p className="text-xl">{news.summary}</p>
            </div>
        </motion.div>
    )
}

export default LargeNewsCard