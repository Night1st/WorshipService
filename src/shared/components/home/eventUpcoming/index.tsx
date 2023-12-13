import TitleSection from "../../common/TitleSection";
import ProductCard from "./productCard";

const EventUpcoming = () => {
  const MetaData = [
    {
      title: "Mừng Tết Nguyên đán Giáp Thìn 2024, giảm giá lên đến 50%",
      image: "/images/Product.png",
      description: "Từ 01/01/2024 , Nhang Đức Tuấn đón Tết Nguyên đán Giáp Thìn 2024, giảm giá tất cả mặt hàng đối với các đơn hàng trên 50.000 đồng. ",
      date: "Tháng 01 2023"
    },
    {
      title: "Mừng Tết Nguyên đán Giáp Thìn 2024, giảm giá lên đến 50%",
      image: "/images/Product.png",
      description: "Từ 01/01/2024 , Nhang Đức Tuấn đón Tết Nguyên đán Giáp Thìn 2024, giảm giá tất cả mặt hàng đối với các đơn hàng trên 50.000 đồng. ",
      date: "Tháng 01 2023"
    },
    {
      title: "Mừng Tết Nguyên đán Giáp Thìn 2024, giảm giá lên đến 50%",
      image: "/images/Product.png",
      description: "Từ 01/01/2024 , Nhang Đức Tuấn đón Tết Nguyên đán Giáp Thìn 2024, giảm giá tất cả mặt hàng đối với các đơn hàng trên 50.000 đồng. ",
      date: "Tháng 01 2023"
    },
  ]
  return ( 
    <section className="px-40 py-10">
      <TitleSection
        title="SỰ KIỆN SẮP TỚI"
        description="Theo dõi chúng tôi để tham gia các sự kiện hấp dẫn"
      />
      <div className="w-full min-h-[350px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10 overflow-hidden">
        {MetaData.map((item, idx) => (
          <ProductCard key={idx} title={item.title} description={item.description} image={item.image} date={item.date}/>
        ))}
      </div>
    </section>
  );
};

export default EventUpcoming;
