import TitleSection from './TitleSection';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import router from "next/router";

const MaybeInterested = () => {
  const Type = [
    {
        title: "Hương",
        image: "bg-huong",
        link: '/productDetail/huong'
    },
    {
        title: "Nến",
        image: "bg-nen",
        link: '/productDetail/nen'
    },
    {
        title: "Tiền vàng",
        image: "bg-tienvang",
        link: '/productDetail/tienVang'
    },
    {
        title: "Set đồ cúng",
        image: "bg-setdocung",
        link: '/productDetail/setDoCung'
    },
    {
        title: "Đồ hầu",
        image: "bg-dohau",
        link: '/productDetail/doHau'
    },
    {
        title: "Sản phẩm khác",
        image: "bg-sanphamkhac",
        link: '/productDetail/sanPhamKhac'
    },
]
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
    <section className='p-4 laptop:px-32 laptop:py-8'>
      <TitleSection title='DANH MỤC SẢN PHẨM' description='Chọn nhóm sản phẩm mà bạn quan tâm' />
      <Carousel responsive={responsive}>
        {Type.map((item, idx) => (
          <div key={idx} className={`flex justify-center ${item.image} m-4 p-4 bg-cover bg-no-repeat bg-center cursor-pointer rounded-3xl`} onClick={() => router.push(item.link)}>
            <p className='text-4xl text-white text-center pt-20 pb-5'>{item.title}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default MaybeInterested;
