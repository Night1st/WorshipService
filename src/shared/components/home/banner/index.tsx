import ContentBanner from './ContentBanner';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ContentBannerHome from '@/shared/components/home/banner/ContentBannerHome';
export interface Data {
  name?: string;
  description?: string;
  cover_image?: string;
}

interface Props {
  data: Data;
}
const Banner = ({ data }: Props) => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 650) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='scrollbar-none relative flex flex-col overflow-hidden text-white desktop:h-[69vh] laptop:h-[69vh] phone:h-[35vh] tablet:h-[69vh]'>
      <div className='w-full flex justify-center items-center mx-auto'>
        {data.name == 'ĐỒ THỜ CÚNG ĐỨC TUẤN' &&<ContentBannerHome data={data} />}
        {data.name != 'ĐỒ THỜ CÚNG ĐỨC TUẤN' &&<ContentBanner data={data} />}
      </div>
    </div>
  );
};

export default Banner;
