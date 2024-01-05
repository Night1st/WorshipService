import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { PreImage } from "../../common/PreImage";
import { INews } from "@/schemas/news.type";

interface Props {
    news: INews
}

const NewsCard = ({news}: Props) => {
    const date = new Date(news.updated_at)
    const router = useRouter()
    return(
        <motion.div
            className="flex items-center cursor-pointer border-collapse gap-5 w-full h-[120px]"
            style={{ borderBottom: "1px solid #555" }}
            onClick={() => router.push(`/newsAndEvent/news/${news.slug}`)}
        >
            <div className="flex p-3 max-w-[152px] max-h-[120px]">
                <PreImage
                    src={news.image}
                    alt="news"
                    className="w-full max-w-[152px] max-h-[120px]"
                    />
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-base font-bold text-black line-clamp-2">{news.title}</h1>
                <p className="text-xs tablet:text-base">{date.toLocaleDateString("en-GB")} - {news.author}</p>
            </div>
        </motion.div>
    )
}

export default NewsCard