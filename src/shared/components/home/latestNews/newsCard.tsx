import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
    title: string;
    image: string;
    author: string;
    date: string
}

const NewsCard = ({title, image, author, date}: Props) => {
    return(
        <motion.div
            className="flex items-center cursor-pointer border-collapse "
            style={{ borderBottom: "1px solid #555" }}
        >
            <div className="flex p-3">
                <Image
                    src={image}
                    width={400}
                    height={400}
                    alt={""}/>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-xl font-bold text-black ">{title}</h1>
                <p className="text-base line-clamp-2">{date} - {author}</p>
            </div>
        </motion.div>
    )
}

export default NewsCard