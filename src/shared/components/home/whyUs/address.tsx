import React from 'react';
import Image from 'next/image';
import TitleSection from '../../common/TitleSection';
import { footerData } from '@/shared/mock/footer';

interface Props {
  image: string;
  description: string;
}

const Address = ({ image, description }: Props) => {
  return (
    <section className='p-4 laptop:px-10 laptop:py-8'>
      <div className='w-full flex flex-col justify-around items-center'>
        <TitleSection title='HỆ THỐNG PHÂN PHỐI' description='' />
        <div className='flex justify-center items-center gap-96'>
          <div className='flex justify-center items-center p-10 phone:max-laptop:hidden'>
            <Image className='' height={500} width={500} src={image} alt={''}></Image>
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
