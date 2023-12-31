import React from 'react';
interface Props {
  image: string;
  description: string;
}

const AboutUs = ({ image, description }: Props) => {
  return (
    <div className='grid grid-cols-1 laptop:grid-cols-5 justify-center items-center'>
      <div className='col-span-2 hidden laptop:flex justify-center items-center laptop:p-10'>
        <div className='relative w-full max-h-[382px] overflow-hidden'>
          <img src={image} width={300} height={382} className='object-cover w-full h-full' />
        </div>
      </div>
      <div className='col-span-3 p-3 laptop:p-10'>
        <p className='text-base laptop:text-2xl laptop:leading-[29px] text-center'>{description}</p>
      </div>
    </div>
  );
};

export default AboutUs;
