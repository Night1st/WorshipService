import TitleSection from '../../common/TitleSection';
import AboutUs from './aboutUs';

const WhyUs = () => {
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
