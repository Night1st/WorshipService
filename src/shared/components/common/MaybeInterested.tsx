import TitleSection from './TitleSection';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const MaybeInterested = () => {
  const Type = [
    {
      title: 'Hương',
      image: 'bg-huong',
    },
    {
      title: 'Nến',
      image: 'bg-nen',
    },
    {
      title: 'Tiền vàng',
      image: 'bg-tienvang',
    },
    {
      title: 'Set đồ cúng',
      image: 'bg-setdocung',
    },
    {
      title: 'Đồ hầu',
      image: 'bg-dohau',
    },
    {
      title: 'Sản phẩm khác',
      image: 'bg-sanphamkhac',
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className='px-40 py-10'>
      <TitleSection title='DANH MỤC SẢN PHẨM' description='Chọn nhóm sản phẩm mà bạn quan tâm' />
      <Carousel responsive={responsive}>
        {Type.map((item, idx) => (
          <div key={idx} className={`flex justify-center ${item.image} m-4 p-4 bg-cover bg-no-repeat bg-center rounded-3xl`}>
            <p className='text-4xl text-white text-center pt-20 pb-5'>{item.title}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default MaybeInterested;
