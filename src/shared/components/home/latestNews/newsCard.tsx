import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { PreImage } from "../../common/PreImage";
import { INews } from "@/schemas/news.type";

interface Props {
    news: INews
}

const NewsCard = ({news}: Props) => {
    const router = useRouter()
    return(
        <motion.div
            className="flex items-center cursor-pointer border-collapse gap-5"
            style={{ borderBottom: "1px solid #555" }}
            onClick={() => router.push(`/newsAndEvent/news/${news.slug}`)}
        >
            <div className="flex p-3">
                <PreImage
                    src={news.image}
                    alt={""}
                    />
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-xl font-bold text-black ">{news.title}</h1>
                <p className="text-base">{news.public_date} - {news.author}</p>
            </div>
        </motion.div>
    )
}

export default NewsCard