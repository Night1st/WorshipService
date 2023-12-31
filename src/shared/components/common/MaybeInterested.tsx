import TitleSection from './TitleSection';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import router from "next/router";
import { useGetAllProductGroup } from '@/queries/product-group.queries';

const MaybeInterested = () => {
  const {data: productGroup} = useGetAllProductGroup()
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
    <section className='p-4 laptop:px-10 laptop:py-8'>
      <TitleSection title='CÓ THỂ BẠN QUAN TÂM' description='Khám phá các nhóm sản phẩm khác của chúng tôi' />
      <Carousel responsive={responsive} className="z-30">
        {productGroup?.map((item, idx) => (
          <div key={idx} className={`flex justify-center ${item.cover_image} m-4 p-4 bg-cover bg-no-repeat bg-center cursor-pointer rounded-3xl`}
          onClick={() => router.push(`/products/${item.id}`)}
          style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(https://www.dothocunggiadinh.com:8443/storage/${item.cover_image})`}}
          >
            <p className='text-4xl text-white text-center pt-20 pb-5 uppercase'>{item.name}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default MaybeInterested;
