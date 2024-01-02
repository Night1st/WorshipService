import React from 'react';
import Image from 'next/image';
import TitleSection from '../../common/TitleSection';
import { footerData } from '@/shared/mock/footer';
import { PreImage } from '../../common/PreImage';

interface Props {
  image: string;
  description: string;
}

const Address = ({ image, description }: Props) => {
  return (
    <section className='p-4 laptop:px-10 laptop:py-8'>
      <div className='w-full flex flex-col justify-around items-center'>
        <TitleSection title='HỆ THỐNG PHÂN PHỐI' description='' />
        <div className='flex justify-center items-center gap-[135px] mt-10'>
          <div className='flex justify-center items-center phone:max-laptop:hidden h-[300px]'>
            <PreImage alt='image-address' className='w-full max-h-[300px]' src={image} fix={true} />
          </div>
          <div className='p-10'>
            <h1 className='laptop:text-[34px] laptop:leading-[41px] text-black my-5'>Trụ sở chính</h1>
            {footerData.contactData.map((item, idx) => (
              <p key={idx} className='flex items-start gap-2 text-base my-3'>
                <Image height={30} width={30} src={item.icon} alt={''} style={{color: "black"}}></Image>
                {item.title}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
