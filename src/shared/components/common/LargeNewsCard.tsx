import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
    title: string;
    image: string;
    author: string;
    description: string;
    date: string
}

const LargeNewsCard = ({title, image, author, description, date}: Props) => {
    return(
        <motion.div
            className="flex items-center cursor-pointer border-collapse "
        >
            <div className="flex w-1/2">
                <Image
                    src={image}
                    width={800}
                    height={800}
                    alt={""}
                    className="w-full h-auto"
                    />
            </div>
            <div className="flex flex-col gap-3 p-5 w-1/2">
                <h1 className="text-4xl font-bold text-black ">{title}</h1>
                <p className="text-base line-clamp-2">{date} - {author}</p>
                <p className="text-xl line-clamp-2">{description}</p>
            </div>
        </motion.div>
    )
}

export default LargeNewsCard