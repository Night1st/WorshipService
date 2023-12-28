import TitleSection from "./TitleSection";
import ProductCard from "../home/product/productCard";
import { IProduct } from "@/schemas/product.type";
import { useGetRelatedProduct } from "@/queries/product.queries";

interface Props {
  product?: IProduct[]
}

const RelatedProduct = ({product}: Props) => {
    return ( 
        <section className="p-4 laptop:px-32 laptop:py-8">
          <TitleSection
            title="SẢN PHẨM LIÊN QUAN"
            description="Khám phá các sản phẩm của chúng tôi"
          />
          <div className="w-full min-h-[350px] grid grid-cols-2 gap-5 tablet:grid-cols-3 laptop:grid-cols-5 mt-10 overflow-hidden">
            {product?.map((item, idx) => (
              <ProductCard key={idx} product={item} />
            ))}
          </div>
          <div className="flex justify-center items-center">
          </div>
        </section>
    );
}

export default RelatedProduct