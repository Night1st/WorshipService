import { motion } from "framer-motion";
import TitleSection from "../../common/TitleSection";
import ProductCard from "./productCard";
import router from "next/router";
import IconArrowRight from "../../icon/IconArrowRight";

const Product = () => {
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
      <div className="flex justify-end items-end">
          <motion.button
            whileHover="hover"
            className={`bg-[white] relative flex justify-center items-center gap-3 text-[#550F17] border-[var(--primary-color-900)] border-2 text-left py-4 px-4 min-w-[200px] border-2 cursor-pointer mt-3`}
            onClick={() => router.push("/productDetail")}
          >
            <p className="text-sm">{"Khám phá"}</p>
            <IconArrowRight  color="#550F17" />
            <motion.div
              className="absolute left-0 top-0 h-full w-0"
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            ></motion.div>
          </motion.button>
          </div>
    </section>
  );
};

export default Product;
