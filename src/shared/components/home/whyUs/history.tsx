import React from 'react';
import Image from 'next/image';
import TitleSection from '../../common/TitleSection';
import { PreImage } from '../../common/PreImage';

interface Props {
  image: string;
  description: string;
}

const History = ({ image, description }: Props) => {
  return (
    <section className='p-4 laptop:px-24 laptop:py-8'>
      <div className='w-full flex flex-col justify-around items-center'>
        <TitleSection title='LỊCH SỬ HÌNH THÀNH' description='Con đường xây dựng và trưởng thành của chúng tôi' />
        <div className='grid grid-cols-1 laptop:grid-cols-2 gap-[135px] justify-center items-center mt-10'>
          <p className='text-base'>{description}</p>
          <div className='flex justify-center items-center phone:max-laptop:hidden h-[300px]'>
            <PreImage alt='image-history' className='w-full max-h-[300px]' src={image} fix={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
