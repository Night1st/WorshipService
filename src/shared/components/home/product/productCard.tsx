import { motion } from "framer-motion";
import Image from "next/image";
import router from "next/router";
interface Props {
    title: string;
    image: string;
    status: string;
    oldPrice: string;
    newPrice: string
}

const ProductCard = ({title, image, oldPrice, newPrice, status}: Props) => {
    return(
        <motion.div
            className="flex flex-col items-center cursor-pointer overflow-hidden border-collapse "
            style={{ border: "1px solid #555" }}
            onClick={() => router.push('/productDetail/detail')}
        >
            <div className="flex">
                <Image
                    src={image}
                    width={350}
                    height={350}
                    alt={""}
                    />
            </div>
            <div className="flex flex-col gap-3 px-3 py-3">
                <p className="px-2 text-lg text-black bg-[#EDB84F] rounded-xl w-fit">{status}</p>
                <h1 className="text-xl font-bold text-black ">{title}</h1>
                <p className="text-lg text-right line-through">{oldPrice}</p>
                <p className="text-2xl text-red-800 text-right">{newPrice}</p>
            </div>
        </motion.div>
    )
}

export default ProductCard