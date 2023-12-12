import { motion } from "framer-motion";
import { useState } from "react";
import router from "next/router";
import Image from "next/image";

interface Props {
    title: string;
    image: string;
    price: string;
    status: string
}

const ProductCard = ({title, image, price, status}: Props) => {
    return(
        <motion.div
            className="flex flex-col items-center cursor-pointer overflow-hidden border-collapse "
            style={{ border: "1px solid #555" }}
        >
            <div className="flex">
                <Image
                    src={image}
                    width={350}
                    height={350}
                    alt={""}/>
            </div>
            <div className="flex flex-col gap-3 px-3 py-3">
                <p className="px-2 text-lg text-black bg-[#EDB84F] rounded-xl w-fit">{status}</p>
                <h1 className="text-xl font-bold text-black ">{title}</h1>
                <p className="text-lg text-right line-through">{price}</p>
                <p className="text-2xl text-red-800 text-right">{price}</p>
            </div>
        </motion.div>
    )
}

export default ProductCard