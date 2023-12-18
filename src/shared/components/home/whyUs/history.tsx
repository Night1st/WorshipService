import React from 'react';
import Image from 'next/image';
import TitleSection from '../../common/TitleSection';

interface Props {
  image: string;
  description: string;
}

const History = ({ image, description }: Props) => {
  return (
    <section className='mx-auto p-4 laptop:px-32 laptop:py-8'>
      <div className='w-full flex flex-col justify-around items-center'>
        <TitleSection title='LỊCH SỬ HÌNH THÀNH' description='Con đường xây dựng và trưởng thành của chúng tôi' />
        <div className='flex justify-center items-center'>
          <div className='p-10 w-full laptop:w-2/3'>
            <p className='text-xl'>{description}</p>
          </div>
          <div className='flex laptop:w-1/3 justify-center items-center p-10 phone:max-laptop:hidden'>
            <Image className='' height={300} width={300} src={image} alt={''}></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
