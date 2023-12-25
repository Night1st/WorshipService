import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import router from 'next/router';
import { IProductDetail } from '@/schemas/product.type';
import { Tab } from '@headlessui/react';
import { PreImage } from './PreImage';

interface Props {
    product: IProductDetail
}

const OrderDetail = ({product}: Props) => {
    const [mainImage, setMainImage] = useState<string>(product.product.image);
    return (
        <section className="p-4 laptop:px-32 laptop:py-8">
            <div className='phone:max-laptop:flex-col laptop:flex'>
                <div className='flex flex-col w-full laptop:w-1/3 p-5'>
                    <div className='flex justify-center items-center w-full min-h-[300px]'>
                        <PreImage width={500} height={400} src={mainImage} alt={''} className='w-full min-h-[300px] rounded-xl'/>
                    </div>
                    <div className='flex justify-center gap-4 py-5'>
                        {/* {images.map((img, idx) => (
                            <PreImage key={idx} width={100} height={100} src={img} alt={''} className='rounded-xl'/>
                        ))} */}
                    </div>
                </div>
                <div className='flex flex-col w-full laptop:w-2/3 gap-3 p-8'>
                    <h1 className="laptop:text-2xl laptop:leading-[29px] text-black ">{product.product.productName}</h1>
                    <p className="px-2 text-xs leading-[19px] text-black bg-[#EDB84F] rounded-xl w-fit">{product.product.freeShip == 1 ? "Miễn phí vận chuyển" : "Không miễn phí vận chuyển"}</p>
                    {product.sellInformation.map((item, idx) => (
                        <div key={idx}>
                            <p className="text-base line-through pt-5">{item.origin_price}đ</p>
                            <div className='flex gap-5'>
                                <p className="text-2xl leading-[29px] text-red-800">{item.current_price}đ</p>
                                <p className='bg-[#EDB84F] text-base text-black text-center flex justify-center items-center px-2 rounded-xl'>{"Giảm " + item.sale_percent + "%"}</p>
                            </div>
                        </div>
                    ))}
                    <div className='gap-5 grid grid-cols-1 laptop:grid-cols-3 pt-5'>
                    <motion.button
                        whileHover="hover"
                        className={`bg-[white] relative flex justify-center items-center gap-3 text-[#550F17] border-[var(--primary-color-900)] border-2 text-left py-4 px-4 min-w-[200px] cursor-pointer mt-3`}
                        onClick={() => router.push("https://shopee.vn/_ofltgiwau?gidzl=wAnWRHM9ebNejc1l5fQhK-onRsyCnAzQzhThPW6Ig0_uvJyp3y7q2wFYCc0FmwK8fx0rP3BE4VCD58kcLW")}
                    >
                        <Image width={30} height={30} src={'/images/Logo/ShopeeIcon.jpg'} alt={''}/>
                            <p className="text-sm font-semibold">{"Mua hàng Shopee"}</p>
                        <motion.div
                        className="absolute left-0 top-0 h-full w-0"
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                        }}
                        ></motion.div>
                    </motion.button>
                    <motion.button
                        whileHover="hover"
                        className={`bg-[white] relative flex justify-center items-center gap-3 text-[#550F17] border-[var(--primary-color-900)] border-2 text-left py-4 px-4 min-w-[200px] cursor-pointer mt-3`}
                        onClick={() => router.push("https://www.lazada.vn/shop/xmdgbhc3?dsource=share&laz_share_info=760374888_10_3000_0_760374888_null&laz_token=1c9adcd5f85dd915195a615122c4c7f4&exlaz=e_cg%2FXMrtswajGip8qo24MCXRib2ph7O2ICC6FqKlh%2FLXCXvTKdNAtBZKHAzs035vD75u2eY%2FhXT5UMHp9sjzycJAh8nO6%2FK0ZD3WnASIas1Y%3D&sub_aff_id=social_share&sub_id2=760374888&sub_id6=CPI_EXLAZ")}
                    >
                        <Image width={30} height={30} src={'/images/Logo/LazadaIcon.jpg'} alt={''}/>
                        <p className="text-sm font-semibold">{"Mua hàng Lazada"}</p>
                        <motion.div
                        className="absolute left-0 top-0 h-full w-0"
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                        }}
                        ></motion.div>
                    </motion.button>
                    <motion.button
                        whileHover="hover"
                        className={`bg-[white] relative flex justify-center items-center gap-3 text-[#550F17] border-[var(--primary-color-900)] border-2 text-left py-4 px-4 min-w-[200px] cursor-pointer mt-3`}
                        //onClick={() => router.push("")}
                    >
                        <p className="text-sm font-semibold">{"Đăng ký nhận tư vấn"}</p>
                        <motion.div
                        className="absolute left-0 top-0 h-full w-0"
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                        }}
                        ></motion.div>
                    </motion.button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 laptop:grid-cols-3 gap-5'>
                <div className='flex border-2 rounded-xl border-[var(--primary-color-900)]'>
                    <div className='flex p-5 gap-5'>
                        <div>
                            <Image width={100} height={100} src={'/images/Logo/Policy1.png'} alt={''}/>
                        </div>
                        <div className='flex flex-col text-left'>
                            <p className='text-[20px] leading-[24px] text-[var(--primary-color-900)]'>Chính sách giao hàng</p>
                        <ul className='list-disc pl-8'>
                            <li className='text-base'>Giao hàng toàn quốc</li>
                            <li className='text-base'>Miễn phí vận chuyển đơn hàng trên 500.000 đồng</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className='flex border-2 rounded-xl border-[var(--primary-color-900)]'>
                    <div className='flex p-5 gap-5'>
                        <div>
                            <Image width={100} height={100} src={'/images/Logo/Policy2.png'} alt={''}/>
                        </div>
                        <div className='flex flex-col text-left'>
                            <p className='text-[20px] leading-[24px] text-[var(--primary-color-900)]'>Chính sách thanh toán</p>
                        <ul className='list-disc pl-8'>
                            <li className='text-base'>Thanh toán tiền mặt khi nhận hàng</li>
                            <li className='text-base'>Thanh toán chuyển khoản ngân hàng</li>
                            <li className='text-base'>Thanh toán online</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className='flex border-2 rounded-xl border-[var(--primary-color-900)]'>
                    <div className='flex p-5 gap-5'>
                        <div>
                            <Image width={100} height={100} src={'/images/Logo/Policy3.png'} alt={''}/>
                        </div>
                        <div className='flex flex-col text-left'>
                            <p className='text-[20px] leading-[24px] text-[var(--primary-color-900)]'>Chính sách đổi trả</p>
                        <ul className='list-disc pl-8'>
                            <li className='text-base'>Đổi trả miễn phí trong vòng 30 ngày khi phát hiện lỗi từ nhà cung cấp. Liên lạc với chúng tôi để được hỗ trợ.</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-5 pb-20'>
            <Tab.Group>
                <Tab.List className="py-2 pr-4">
                    <Tab>
                        {({selected}) => (
                            <button className={selected ? "py-2 pr-6 border-b-2 border-[var(--primary-color-900)] text-[var(--primary-color-900)] outline-none" : "py-2 pr-6 text-black outline-none"}>Mô tả sản phẩm</button>
                        )}  
                    </Tab>
                    <Tab>
                        {({selected}) => (
                            <button className={selected ? "py-2 pr-6 border-b-2 border-[var(--primary-color-900)] text-[var(--primary-color-900)] outline-none" : "py-2 pr-6 text-black outline-none"}>Chi tiết sản phẩm</button>
                        )}  
                    </Tab>
                </Tab.List>
                <Tab.Panels className={"pt-5 pl-10"}>
                    <Tab.Panel>{product.product.description}</Tab.Panel>
                    <Tab.Panel>{product.product.detail}</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
            </div>
        </section>
    )
}

export default OrderDetail