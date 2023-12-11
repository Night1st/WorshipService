import { IWhyUsData, WhyUsData } from '@/shared/mock/whyUs';
import { useState } from 'react';
import TextHighLight from '../../common/TextHighLight';
import ContentWhyUs from './ContentWhyUs';
import IconNGS from './IconNGS';
import { motion } from 'framer-motion';
import IconArrowLeft from '../../icon/IconArrowLeft';
import IconArrowRight from '../../icon/IconArrowRight';
import TitleSection from '../../common/TitleSection';

interface Props {
  data: IWhyUsData[];
}

const WhyUs = ({ data }: Props) => {
  const [selectedIcon, setSelectedIcon] = useState<IWhyUsData>(WhyUsData[0] as IWhyUsData);
  const handleNext = () => {
    setSelectedIcon((prevTab): IWhyUsData | any => {
      const nextIndex = data.indexOf(prevTab) + 1;
      return nextIndex < data.length ? data[nextIndex] : data[0];
    });
  };
  const handlePrev = () => {
    setSelectedIcon((prevTab): IWhyUsData | any => {
      const prevIndex = data.indexOf(prevTab) - 1;
      return prevIndex >= 0 ? data[prevIndex] : data[data.length - 1];
    });
  };
  return (
    <>
      <section className='mx-auto px-32 py-10 bg-[rgb(230,234,239,0.5)]'>
        <div className='w-full flex flex-col justify-around items-center text-center'>
          <TitleSection title='VỀ CHÚNG TÔI' description=''/>
          <div className='flex items-center justify-between gap-10 py-5'>
            {data.map((item, index) => (
              <button
                key={index}
                className={`${item == selectedIcon && "bg-[#1B3864] text-white transition duration-750 ease-in-out"} relative flex justify-center items-center text-black text-left py-4 px-4 rounded-full cursor-pointer w-48`}
                style={{ border: "1px solid #000" }}
                onClick={() => setSelectedIcon(item)}
              >
                <p className='text-2xl text-center'>{`${item.title}`}</p>
              </button>
            ))}
          </div>
          <div className='w-full flex justify-center items-center gap-10'>
            {/* <div className='w-full z-40 float-right'>
              <IconNGS selectedIcon={selectedIcon && selectedIcon} setSelectedIcon={setSelectedIcon} />
            </div> */}
            <motion.button
              initial={{ backgroundColor: 'var(--blue-color-400)' }}
              whileHover='hover'
              className={`bg-[var(--blue-color-400)] relative flex justify-between items-center gap-3 text-black text-left py-4 px-4 rounded cursor-pointer`}
            >
              <IconArrowLeft onClick={handlePrev} />
              <motion.div
                className='absolute left-0 top-0 h-full w-0'
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
              ></motion.div>
            </motion.button>
            <ContentWhyUs selectedIcon={selectedIcon && selectedIcon} />
            <motion.button
              initial={{ backgroundColor: 'var(--blue-color-400)' }}
              whileHover='hover'
              className={`bg-[var(--blue-color-400)] relative flex justify-between items-center gap-3 text-black text-left py-4 px-4 rounded cursor-pointer`}
            >
              <IconArrowRight onClick={handleNext} />
              <motion.div
                className='absolute left-0 top-0 h-full w-0'
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
              ></motion.div>
            </motion.button>
          </div>
            <div className='w-1/2 grid grid-cols-4 justify-center py-5 gap-10'>
              <div className='flex flex-col'>
                <p className='text-5xl text-[#1B3864]'>+05</p>
                <h1 className='text-2xl py-3'>năm hình thành và phát triển</h1>
              </div>
              <div className='flex flex-col'>
                <p className='text-5xl text-[#1B3864]'>+10</p>
                <h1 className='text-2xl py-3'>nhân sự</h1>
              </div>
              <div className='flex flex-col'>
                <p className='text-5xl text-[#1B3864]'>+15</p>
                <h1 className='text-2xl py-3'>khách hàng</h1>
              </div>
              <div className='flex flex-col'>
                <p className='text-5xl text-[#1B3864]'>+20</p>
                <h1 className='text-2xl py-3'>dự án thành công</h1>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
