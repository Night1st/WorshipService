import { useState } from 'react';
import TitleSection from './TitleSection';
import { IQuote, Quote } from '@/shared/mock/whyUs';
import { motion } from 'framer-motion';

interface Props {
  data: IQuote[];
}

const OurQuote = ({ data }: Props) => {
  const [selectedIcon, setSelectedIcon] = useState<IQuote>(Quote[0] as IQuote);
  return (
    <section className='p-4 laptop:px-24 laptop:py-8'>
      <TitleSection title='THÔNG ĐIỆP CỦA CHÚNG TÔI' description='' />
      <div className='flex items-center justify-center gap-10 py-5'>
        {data.map((item, index) => (
          <div key={index} className='flex flex-col justify-center items-center laptop:min-w-[200px]'>
            <p className={`${item == selectedIcon && 'text-[var(--primary-color-800)]'} laptop:text-[20px] laptop:leading-[24px] text-center text-black pb-3`}>{`${item.title}`}</p>
            <div onClick={() => setSelectedIcon(item)}>
              {item == selectedIcon ? (<img width={40} height={40} src='/images/StatusOn.png'></img>) : (<img width={40} height={40} src='/images/StatusOff.png'></img>)}
            </div>
          </div>
        ))}
      </div>
      <div className='w-full flex justify-center items-center'>
        <motion.div className='text-sm laptop:text-[34px] laptop:leading-[41px] bg-thongdiep bg-cover p-10 rounded-2xl w-full flex justify-center items-center text-white text-center min-h-[300px]'>
          {selectedIcon ? selectedIcon.description : ''}
        </motion.div>
      </div>
    </section>
  );
};

export default OurQuote;
