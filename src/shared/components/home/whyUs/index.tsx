import { motion } from 'framer-motion';
import TitleSection from '../../common/TitleSection';
import AboutUs from './aboutUs';
import router from 'next/router';
import IconArrowRight from '../../icon/IconArrowRight';

const WhyUs = () => {
  return (
    <>
      <section className='mx-auto px-32 py-10'>
        <div className='w-full flex flex-col justify-around items-center'>
          <TitleSection title='VỀ CHÚNG TÔI' description='Khẩu hiệu'/>
          <AboutUs image={'/images/Về chúng tôi.jpg'} description={'Đồ thờ cúng là sợi dây kết nối giữa âm dương, những món đồ mang đến không gian thờ cúng trở nên trang nghiêm và ấm cúng hơn. Thấu hiểu ý nghĩa đó, Nhang Đức Tuấn chuyên cung cấp các sản phẩm đồ thờ cúng chất lượng, an toàn, nhằm giúp Quý khách hàng gửi gắm tấm lòng tới gia tiên.'}/>
          <div className="flex justify-center items-center">
          <motion.button
            whileHover="hover"
            className={`bg-[white] relative flex justify-center items-center gap-3 text-[#550F17] border-[var(--primary-color-900)] border-2 text-left py-4 px-4 min-w-[200px] border-2 cursor-pointer mt-3`}
            onClick={() => router.push("/aboutUs")}
          >
            <p className="text-sm">{"Khám phá"}</p>
            <IconArrowRight  color="#550F17" />
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