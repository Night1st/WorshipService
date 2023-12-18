import NewsCard from "./newsCard";

const NewsList = () => {
    return ( 
        <section className="px-40 py-10">
          <div className="w-full min-h-[350px] grid grid-cols-1 gap-5 laptop:grid-cols-2 mt-10 overflow-hidden">
            {Array(8).fill(
              <NewsCard title={"Bài cúng Tất niên theo chuẩn phong tục cổ truyền dân tộc Việt"} author="Ngô Thị Thu" image={"/images/TinTuc.png"} date={"08/12/2023"}/>
            )}
          </div>
        </section>
      );
}

export default NewsList