import NewsCard from "./newsCard";

const NewsList = () => {
    return ( 
        <section className="px-40 py-10">
          <div className="w-full min-h-[350px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10 overflow-hidden">
            {Array(9).fill(
              <NewsCard title={"Bài cúng Tất niên theo chuẩn phong tục cổ truyền dân tộc Việt"} author="Ngô Thị Thu" image={"/images/SuKien.png"} date={"Tháng 01 2023"}/>
            )}
          </div>
        </section>
      );
}

export default NewsList