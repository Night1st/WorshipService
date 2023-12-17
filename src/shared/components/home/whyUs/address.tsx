import React from "react";
import Image from "next/image";
import TitleSection from "../../common/TitleSection";
import { footerData } from "@/shared/mock/footer";

interface Props {
    image: string;
    description: string
}

const Address = ({image, description}: Props) => {
    return (
        <section className='mx-auto p-4 laptop:px-32 laptop:py-8'>
        <div className='w-full flex flex-col justify-around items-center gap-5'>
          <TitleSection title='HỆ THỐNG PHÂN PHỐI' description='' />
          <div className='flex justify-between items-center border-2'>
            <div className='justify-center items-center px-10 py-10 phone:max-laptop:hidden'>
              <Image className='' height={300} width={300} src={image} alt={''}></Image>
            </div>
            <div className='px-10 py-10'>
            {footerData.contactData.map((item, idx) => (
              <p key={idx} className="flex items-start gap-2">
                <Image height={30} width={30} src={item.icon} alt={''}></Image>
              {item.title}</p>
            ))}
            </div>
          </div>
        </div>
      </section>
    )
}

export default Address