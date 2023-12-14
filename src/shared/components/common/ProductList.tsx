import { motion } from "framer-motion";
import TitleSection from "./TitleSection";
import ProductCard from "../home/product/productCard";
import router from "next/router";
import IconArrowRight from "../icon/IconArrowRight";

const ProductList = () => {
    return ( 
        <section className="px-40 py-10">
          <TitleSection
            title="SẢN PHẨM NỔI BẬT"
            description="Khám phá các sản phẩm của chúng tôi"
          />
          <div className="w-full min-h-[350px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5 mt-10 overflow-hidden">
            {Array(20).fill(
              <ProductCard title={"Hương bài Cơ Đảm tăm 38 tàn trắng"} price={"120.000đ"} image={"/images/Product.png"} status={"Miễn phí vận chuyển"}/>
            )}
          </div>
          <motion.button
            whileHover="hover"
            className={`bg-[white] relative flex justify-center items-center gap-3 text-[#1B3864] text-left py-4 px-4 border-2 cursor-pointer mt-3`}
            onClick={() => router.push("")}
          >
            <p className="text-sm">{"Khám phá"}</p>
            <IconArrowRight  color="#1B3864" />
            <motion.div
              className="absolute left-0 top-0 h-full w-0"
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            ></motion.div>
          </motion.button>
        </section>
    );
}

export default ProductList