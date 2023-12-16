import TitleSection from "./TitleSection";
import ProductCard from "../home/product/productCard";
import { ProductData } from "@/shared/mock/product";

interface Props {
  product: ProductData
}

const RelatedProduct = ({product}: Props) => {
    return ( 
        <section className="px-40 py-10">
          <TitleSection
            title="SẢN PHẨM LIÊN QUAN"
            description="Khám phá các sản phẩm của chúng tôi"
          />
          <div className="w-full min-h-[350px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5 mt-10 overflow-hidden">
            {Array(5).fill(
              <ProductCard title={product.title ? product.title : "Hương bài Cơ Đảm tăm 38 tàn trắng"} oldPrice={product.oldPrice ? product.oldPrice : "120.000đ"} newPrice={product.newPrice ? product.newPrice : "120.000đ"} image={product.image ? product.image : "/images/Product.png"} status={product.status ? product.status : "Miễn phí vận chuyển"}/>
            )}
          </div>
          <div className="flex justify-center items-center">
          </div>
        </section>
    );
}

export default RelatedProduct