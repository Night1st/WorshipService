import { motion } from "framer-motion";
import Image from "next/image";
import { PreImage } from "../../common/PreImage";

interface Props {
    title: string;
    image: string;
    author: string;
    public_date: string
}

const NewsCard = ({title, image, author, public_date}: Props) => {
    return(
        <motion.div
            className="flex items-center cursor-pointer border-collapse gap-5"
            style={{ borderBottom: "1px solid #555" }}
        >
            <div className="flex p-3">
                <PreImage
                    src={image}
                    width={300}
                    height={300}
                    alt={""}/>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-xl font-bold text-black ">{title}</h1>
                <p className="text-base">{public_date} - {author}</p>
            </div>
        </motion.div>
    )
}

export default NewsCard