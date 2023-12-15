import React from 'react';
import Image from 'next/image';
import TitleSection from '../../common/TitleSection';

interface Props {
  image: string;
  description: string;
}

const History = ({ image, description }: Props) => {
  return (
    <section className='mx-auto px-32 py-10 bg-[rgb(230,234,239,0.5)]'>
      <div className='w-full flex flex-col justify-around items-center'>
        <TitleSection title='LỊCH SỬ HÌNH THÀNH' description='Con đường xây dựng và trưởng thành của chúng tôi' />
        <div className='flex justify-between items-center'>
          <div className='px-10 py-10'>
            <p className='text-lg'>{description}</p>
          </div>
          <div className='justify-center items-center px-10 py-10'>
            <Image className='' height={300} width={300} src={image} alt={''}></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
