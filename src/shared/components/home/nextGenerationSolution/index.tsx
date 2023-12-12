import TitleSection from "../../common/TitleSection";
import InfoCard from "./InfoCard";
import ProductCard from "./productCard";

const NextGenerationSolution = () => {
  const MetaData = [
    {
      title: "Hương bài Cơ Đảm tăm 38 tàn trắng",
      image: "/images/Product.png",
      price: "120.000đ",
      status: "Miễn phí vận chuyển"
    },
    {
      title: "Hương bài Cơ Đảm tăm 38 tàn trắng",
      image: "/images/Product.png",
      price: "120.000đ",
      status: "Miễn phí vận chuyển"
    },
    {
      title: "Hương bài Cơ Đảm tăm 38 tàn trắng",
      image: "/images/Product.png",
      price: "120.000đ",
      status: "Miễn phí vận chuyển"
    },
    {
      title: "Hương bài Cơ Đảm tăm 38 tàn trắng",
      image: "/images/Product.png",
      price: "120.000đ",
      status: "Miễn phí vận chuyển"
    },
    {
      title: "Hương bài Cơ Đảm tăm 38 tàn trắng",
      image: "/images/Product.png",
      price: "120.000đ",
      status: "Miễn phí vận chuyển"
    },
  ]
  return ( 
    <section className="px-40 py-10">
      <TitleSection
        title="SẢN PHẨM NỔI BẬT"
        description="Khám phá các sản phẩm của chúng tôi"
      />
      <div className="w-full min-h-[350px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5 mt-10 overflow-hidden">
        {MetaData.map((item, idx) => (
          <ProductCard key={idx} title={item.title} price={item.price} image={item.image} status={item.status}/>
        ))}
      </div>
    </section>
  );
};

export default NextGenerationSolution;
