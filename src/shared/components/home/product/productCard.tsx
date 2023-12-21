import { motion } from "framer-motion";
import Image from "next/image";
import router from "next/router";
import { IProduct } from "@/schemas/product.type";
import { PreImage } from "../../common/PreImage";
interface Props {
    product: IProduct
}

const ProductCard = ({product}: Props) => {
    return(
        <motion.div
            className="flex flex-col items-center cursor-pointer overflow-hidden border-collapse rounded-xl"
            style={{ border: "1px solid #555" }}
            onClick={() => router.push(`/products/detail/${product.id}`)}
        >
            <div className="flex">
                <PreImage
                    src={(product.image)}
                    width={250}
                    height={250}
                    alt={""}
                    className="w-full h-auto"
                    />
            </div>
            <div className="flex flex-col gap-3 px-3 py-3 bg-white w-full h-full justify-between">
                <div className="flex flex-col gap-2">
                <p className="px-2 text-lg text-black bg-[#EDB84F] rounded-xl w-fit">{product.freeShip == 1 ? "Miễn phí vận chuyển" : "Không miễn phí vận chuyển"}</p>
                <h1 className="text-lg font-bold text-black ">{product.productName}</h1>
                </div>
                <div className="flex flex-col">
                <p className="text-lg text-right line-through">{product.origin_price * 1000}</p>
                <p className="text-2xl text-red-800 text-right">{product.current_price * 1000}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default ProductCard