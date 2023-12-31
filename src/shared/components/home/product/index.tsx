import { motion } from "framer-motion";
import TitleSection from "../../common/TitleSection";
import ProductCard from "./productCard";
import router from "next/router";
import IconArrowRight from "../../icon/IconArrowRight";
import { useGetProductHighlight } from "@/queries/product.queries";

const Product = () => {
  const {data: productHighlight} = useGetProductHighlight(5)
  return ( 
    <section className="p-4 laptop:px-10 laptop:pb-8">
      <TitleSection
        title="SẢN PHẨM NỔI BẬT"
        description="Khám phá các sản phẩm của chúng tôi"
      />
      <div className="w-full min-h-[350px] grid grid-cols-2 gap-5 tablet:grid-cols-3 laptop:grid-cols-5 mt-10 overflow-hidden">
        {productHighlight?.map((item, idx) => (
          <ProductCard key={idx} product={item} />
        ))}

      </div>
      <div className="flex justify-end items-end">
          <motion.button
            whileHover="hover"
            className={`bg-transparent relative flex justify-center items-center gap-3 text-[#550F17] border-[var(--primary-color-900)] text-left py-4 px-4 min-w-[200px] border-2 cursor-pointer mt-3`}
            onClick={() => router.push("/products")}
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
