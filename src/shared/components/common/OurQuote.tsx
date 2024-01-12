import React, { useState } from 'react';
import TitleSection from './TitleSection';
import { IQuote, Quote } from '@/shared/mock/whyUs';
import { motion } from 'framer-motion';
import {useGetHistory} from "@/queries/history.queries";
import {useGetSlogan} from "@/queries/slogan.queries";

interface Props {
  data: IQuote[];
}

const OurQuote = ({ data }: Props) => {
  const [selectedIcon, setSelectedIcon] = useState<IQuote>( (data ? data[0] : null) as IQuote);
  return (
    <section className='p-4 laptop:px-24'>
      <TitleSection title='THÔNG ĐIỆP CỦA CHÚNG TÔI' description='' />
      <div className='relative flex items-center justify-center gap-10 phone:pt-5 tablet:pt-10 laptop:pt-10 desktop:pt-10'>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <div className='flex flex-col justify-center items-center laptop:min-w-[200px] z-30 cursor-pointer'>
              <p
                className={`${
                  item.value == selectedIcon?.value && 'text-[var(--primary-color-800)]'
                } laptop:text-[20px] laptop:leading-[24px] text-center text-black pb-3`}
              >{`${item.type}`}</p>
              <div onClick={() => setSelectedIcon(item)} className={'quote-line'}>
                {item == selectedIcon ? (
                  <img width={40} height={40} src='/images/StatusOn.png' className='z-30 '></img>
                ) : (
                  <img width={40} height={40} src='/images/StatusOff.png' className='z-30'></img>
                )}
              </div>
            </div>
            {/*<div className='absolute top-[65%] w-[60%] border border-b-[#9A4E46] z-10'></div>*/}
          </React.Fragment>
        ))}
      </div>
      <div className='w-full flex justify-center items-center pt-5'>
        <motion.div className='text-sm laptop:text-[34px] laptop:leading-[41px] bg-thongdiep bg-cover p-10 w-full flex justify-center items-center text-white text-center min-h-[300px] border-quote'>
          {selectedIcon ? selectedIcon.description_vi : ''}
        </motion.div>
      </div>
    </section>
  );
};

export default OurQuote;
