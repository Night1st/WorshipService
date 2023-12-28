import { useGetLatestNews } from "@/queries/news.queries";
import NewsCard from "./newsCard";

const NewsList = () => {
  const {data: news} = useGetLatestNews()
    return ( 
        <section className="p-4 laptop:p-10">
          <div className="w-full grid grid-cols-1 gap-5 laptop:grid-cols-2 mt-10 overflow-hidden">
            {news?.map((item, idx) => (
              idx === 0 ? ("")
              : (
                <NewsCard key={idx} news={item} />
              )
            ))}
          </div>
        </section>
      );
}

export default NewsList