import { useGetLatestNews } from "@/queries/news.queries";
import NewsCard from "./newsCard";

const NewsList = () => {
  const {data: news} = useGetLatestNews()
    return ( 
        <section className="px-40 py-10">
          <div className="w-full min-h-[350px] grid grid-cols-1 gap-5 laptop:grid-cols-2 mt-10 overflow-hidden">
            {news?.map((item, idx) => (
              <NewsCard key={idx} news={item} />
            ))}
          </div>
        </section>
      );
}

export default NewsList