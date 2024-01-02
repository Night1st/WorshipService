import React from "react";
import TitleSection from "../../common/TitleSection";
import Image from 'next/image';
import { motion } from "framer-motion";

const ContactInfo = () => {
    const contact = [
        {
            link: "https://www.facebook.com/vu.tuan35?mibextid=ZbWKwL",
            image: "/images/Logo/Facebook.png"
        },
        {
            link: "https://www.youtube.com/@vutuan35",
            image: "/images/Logo/YouTube.png"
        },
        {
            link: "https://www.tiktok.com/@huongnen_quangninh?_t=8hvq0EGOsuP&_r=1",
            image: "/images/Logo/TikTok.png"
        },
        {
            link: "",
            image: "/images/Logo/Zalo.png"
        },
    ]
    return (<section className="px-4 laptop:px-10 text-center mt-10">
        <TitleSection
            title="THÔNG TIN LIÊN HỆ"
            description="Liên hệ với chúng tôi để được hỗ trợ ngay"
        />
        <div className='w-full flex justify-start py-5'>
            <div className='w-0 hidden justify-center items-center laptop:p-10 laptop:flex laptop:w-1/3'>
              <Image className='' height={500} width={500} src={'/images/Contact.jpg'} alt={''}></Image>
            </div>
            <div className='w-full flex flex-col gap-10 laptop:p-10 laptop:w-full'>
                <motion.div
                    className="flex rounded-xl p-5 overflow-hidden border-collapse bg-[var(--secondary-color-100)]"
                    style={{ border: "1px solid #651D1D" }}
                >
                    <div className="flex gap-2 flex-col text-left">
                        <h1 className="text-sm px-3 text-black">{'Hotline'}</h1>
                        <p className="text-[20px] leading-[24px] px-3">{'0985903699'} | {'0394286488'}</p>
                    </div>
                </motion.div>
                <motion.div
                    className="flex rounded-xl p-5 overflow-hidden border-collapse bg-[var(--secondary-color-100)]"
                    style={{ border: "1px solid #651D1D" }}
                >
                    <div className="flex gap-2 flex-col text-left">
                        <h1 className="text-sm px-3 text-black">{'Email'}</h1>
                        <p className="text-[20px] leading-[24px] px-3">{'vu.tuan35@gmail.com'}</p>
                    </div>
                </motion.div>
                <motion.div
                    className="flex rounded-xl p-5 overflow-hidden border-collapse bg-[var(--secondary-color-100)]"
                    style={{ border: "1px solid #651D1D" }}
                >
                    <div className="flex gap-2 flex-col text-left">
                        <h1 className="text-sm px-3 text-black">{'Địa chỉ'}</h1>
                        <p className="text-[20px] leading-[24px] px-3">{'17/31 Khu Nam Trung, Phường Nam Khê, Thành phố Uông Bí, Tỉnh Quảng Ninh'}</p>
                    </div>
                </motion.div>
                <motion.div
                    className="flex rounded-xl p-5 overflow-hidden border-collapse bg-[var(--secondary-color-100)]"
                    style={{ border: "1px solid #651D1D" }}
                >
                    <div className="flex gap-2 flex-col text-left">
                        <h1 className="text-sm px-3 text-black">{'Kênh liên lạc khác'}</h1>
                        <div className="flex gap-3 py-2">
                            {contact.map((item, idx) => (
                            <img key={idx} height={40} width={40} src={item.image} alt={''} className="cursor-pointer" onClick={() => window.open(item.link)}></img>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
          </div>
    </section>)
}
export default ContactInfo