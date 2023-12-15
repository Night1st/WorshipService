import React, { useState } from 'react';
import Image from 'next/image';

interface ImageProps {
    images: string[]
}

const OrderDetail = ({images}: ImageProps) => {
    const [mainImage, setMainImage] = useState<string>(images[0]);
    return (
        <section className="flex px-40 py-10">
            <div className='flex flex-col w-1/3 p-5'>
                <div className='flex justify-center items-center w-full min-h-[300px]'>
                    <Image width={300} height={300} src={mainImage} alt={''} className='w-full min-h-[300px] rounded-xl'/>
                </div>
                <div className='flex justify-center gap-4 py-5'>
                    {images.map((img, idx) => (
                        <Image key={idx} width={70} height={70} src={img} alt={''} className='rounded-xl'/>
                    ))}
                </div>
            </div>
            <div className='flex flex-col w-2/3 gap-3 p-8'>
                <h1 className="text-3xl text-black ">{"Hương bài Cơ Đảm tăm 38 tàn trắng"}</h1>
                <p className="px-2 text-base text-black bg-[#EDB84F] rounded-xl w-fit">{"Miễn phí vận chuyển"}</p>
                <p className="text-lg line-through pt-5">{"120.000đ"}</p>
                <p className="text-4xl text-red-800">{"120.000đ"}</p>
            </div>
        </section>
    )
}

export default OrderDetail