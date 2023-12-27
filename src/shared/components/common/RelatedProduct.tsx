import TitleSection from "./TitleSection";
import ProductCard from "../home/product/productCard";
import { IProduct } from "@/schemas/product.type";

interface Props {
  product: IProduct[]
}

const RelatedProduct = ({product}: Props) => {
  const fakeProduct = [
    {
      id: 10,
      productName: "Hương bài Cơ Đảm tăm 38 tàn trắng",
      image: "/images/Huong.png",
      slug: "huong-bai-co-dam-tam-38-tan-trang",
      freeShip: 1,
      origin_price: 120,
      current_price: 100,
      sale_percent: 25
    },
    {
      id: 10,
      productName: "Hương bài Cơ Đảm tăm 38 tàn trắng",
      image: "/images/Huong.png",
      slug: "huong-bai-co-dam-tam-38-tan-trang",
      freeShip: 1,
      origin_price: 120,
      current_price: 100,
      sale_percent: 25
    },
    {
      id: 10,
      productName: "Hương bài Cơ Đảm tăm 38 tàn trắng",
      image: "/images/Huong.png",
      slug: "huong-bai-co-dam-tam-38-tan-trang",
      freeShip: 1,
      origin_price: 120,
      current_price: 100,
      sale_percent: 25
    },
    {
      id: 10,
      productName: "Hương bài Cơ Đảm tăm 38 tàn trắng",
      image: "/images/Huong.png",
      slug: "huong-bai-co-dam-tam-38-tan-trang",
      freeShip: 1,
      origin_price: 120,
      current_price: 100,
      sale_percent: 25
    },
    {
      id: 10,
      productName: "Hương bài Cơ Đảm tăm 38 tàn trắng",
      image: "/images/Huong.png",
      slug: "huong-bai-co-dam-tam-38-tan-trang",
      freeShip: 1,
      origin_price: 120,
      current_price: 100,
      sale_percent: 25
    },
  ]
    return ( 
        <section className="p-4 laptop:px-32 laptop:py-8">
          <TitleSection
            title="SẢN PHẨM LIÊN QUAN"
            description="Khám phá các sản phẩm của chúng tôi"
          />
          <div className="w-full min-h-[350px] grid grid-cols-1 gap-5 tablet:grid-cols-2 laptop:grid-cols-5 mt-10 overflow-hidden">
            {fakeProduct?.map((item, idx) => (
              <ProductCard key={idx} product={item} />
            ))}
          </div>
          <div className="flex justify-center items-center">
          </div>
        </section>
    );
}

export default RelatedProduct