import { motion } from 'framer-motion';
import TitleSection from '../../common/TitleSection';
import AboutUs from './aboutUs';
import router from 'next/router';
import IconArrowRight from '../../icon/IconArrowRight';
import { useGetHistory } from '@/queries/history.queries';
import { useGetAboutUs } from '@/queries/about-us.queries';

const WhyUs = () => {
  const { data: aboutUs } = useGetAboutUs();

  return (
    <>
      <section className='mx-auto p-4 laptop:px-32 laptop:py-8'>
        <div className='w-full flex flex-col justify-around items-center'>
          <TitleSection title='VỀ CHÚNG TÔI' description='Mang bình an tới mỗi gia đình Việt'/>
          <AboutUs image={'/images/AboutUs.jpg'} description={aboutUs ? aboutUs[0].description_vi: ''}/>
          <div className="flex justify-center items-center">
          <motion.button
            whileHover="hover"
            className={`bg-transparent hover:bg-white relative flex justify-center items-center gap-1 laptop:gap-3 text-[#550F17] border-[var(--primary-color-900)] text-left px-4 laptop:py-3 laptop:px-10 border-2 cursor-pointer mt-3`}
            onClick={() => router.push("/aboutUs")}
          >
            <p className="text-sm">{"Khám phá"}</p>
            <IconArrowRight fill="#550F17" />
            <motion.div
              className="absolute left-0 top-0 h-full w-0"
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            ></motion.div>
          </motion.button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
