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
          <div className='flex justify-center items-center'>
            <div className='flex laptop:w-1/3 justify-center items-center p-10 phone:max-laptop:hidden'>
              <Image className='' height={500} width={500} src={image} alt={''}></Image>
            </div>
            <div className='p-10 w-full laptop:w-2/3'>
              <h1 className="laptop:text-[34px] laptop:leading-[41px] text-black my-5">Trụ sở chính</h1>
            {footerData.contactData.map((item, idx) => (
              <p key={idx} className="flex items-start gap-2 text-base my-3">
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