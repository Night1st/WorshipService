import { motion } from "framer-motion";
import TitleSection from "../../common/TitleSection";
import ProductCard from "./productCard";
import router from "next/router";
import IconArrowRight from "../../icon/IconArrowRight";
import { useGetProductHighlight } from "@/queries/product.queries";

const Product = () => {
  const {data: productHighlight} = useGetProductHighlight()
  const MetaData = [
    {
      title: "Hương bài Cơ Đảm tăm 38 tàn trắng",
      image: "/images/Product/Huong.png ",
      oldPrice: "100.000đ",
      newPrice: "120.000đ",
      status: "Miễn phí vận chuyển"
    },
    {
      title: "Hương bài Cơ Đảm tăm 38 tàn trắng",
      image: "/images/Product/Huong.png",
      oldPrice: "100.000đ",
      newPrice: "120.000đ",
      status: "Miễn phí vận chuyển"
    },
    {
      title: "Hương bài Cơ Đảm tăm 38 tàn trắng",
      image: "/images/Product/Huong.png",
      oldPrice: "100.000đ",
      newPrice: "120.000đ",
      status: "Miễn phí vận chuyển"
    },
    {
      title: "Hương bài Cơ Đảm tăm 38 tàn trắng",
      image: "/images/Product/Huong.png",
      oldPrice: "100.000đ",
      newPrice: "120.000đ",
      status: "Miễn phí vận chuyển"
    },
    {
      title: "Hương bài Cơ Đảm tăm 38 tàn trắng",
      image: "/images/Product/Huong.png",
      oldPrice: "100.000đ",
      newPrice: "120.000đ",
      status: "Miễn phí vận chuyển"
    },
  ]
  return ( 
    <section className="p-4 laptop:px-32 laptop:py-8">
      <TitleSection
        title="SẢN PHẨM NỔI BẬT"
        description="Khám phá các sản phẩm của chúng tôi"
      />
      <div className="w-full min-h-[350px] grid grid-cols-1 gap-5 tablet:grid-cols-2 laptop:grid-cols-5 mt-10 overflow-hidden">
        {/* {MetaData.map((item, idx) => (
          <ProductCard key={idx} title={item.title} oldPrice={item.oldPrice} newPrice={item.newPrice} image={item.image} status={item.status}/>
        ))} */}
        {Array(5).fill(
          productHighlight?.map((item, idx) => (
          <ProductCard key={idx} product={item} />
        )))}

      </div>
      <div className="flex justify-end items-end">
          <motion.button
            whileHover="hover"
            className={`bg-[white] relative flex justify-center items-center gap-3 text-[#550F17] border-[var(--primary-color-900)] text-left py-4 px-4 min-w-[200px] border-2 cursor-pointer mt-3`}
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
