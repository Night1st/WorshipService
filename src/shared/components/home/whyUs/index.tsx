import { IWhyUsData, WhyUsData } from '@/shared/mock/whyUs';
import { useState } from 'react';
import TextHighLight from '../../common/TextHighLight';
import ContentWhyUs from './ContentWhyUs';
import { motion } from 'framer-motion';
import IconArrowLeft from '../../icon/IconArrowLeft';
import IconArrowRight from '../../icon/IconArrowRight';
import TitleSection from '../../common/TitleSection';
import AboutUs from './aboutUs';

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
        <div className='w-full flex flex-col justify-around items-center'>
          <TitleSection title='VỀ CHÚNG TÔI' description='Nội dung khẩu hiệu'/>
          <AboutUs image={'/images/Product.png'} description={'Lorem ipsum dolor sit amet consectetur.'}/>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
