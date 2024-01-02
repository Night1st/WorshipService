import { motion } from 'framer-motion';
import TitleSection from './TitleSection';
import ProductCard from '../home/product/productCard';
import IconArrowDown from '../icon/IconArrowDown';
import { IProduct } from '@/schemas/product.type';
import { useEffect, useState } from 'react';

interface Props {
  limit?: number;
  setLimit?: any
  products?: IProduct[];
}

const ProductList = ({ limit, products, setLimit }: Props) => {
  const [productsCurrent, setProductsCurrent] = useState<IProduct[] | undefined>();
  useEffect(() => {
    setProductsCurrent(products);
  }, [products]);
  return (
    <section className='p-4 laptop:px-10 laptop:py-8'>
      <TitleSection title='SẢN PHẨM NỔI BẬT' description='Khám phá các sản phẩm của chúng tôi' />
      <div className='w-full min-h-[350px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5 mt-10 overflow-hidden'>
        {productsCurrent?.map((item, idx) => <ProductCard key={idx} product={item} />)}
      </div>
      <div className='flex justify-center items-center'>
        <motion.button
          whileHover='hover'
          className={`bg-transparent hover:bg-white relative flex justify-center items-center gap-3 text-[#550F17] border-[var(--primary-color-900)] text-left py-3 px-10 border-2 cursor-pointer mt-3`}
          onClick={() => limit && setLimit(limit += 5)}
        >
          <p className='text-sm'>{'Xem thêm'}</p>
          <IconArrowDown color='#550F17' />
          <motion.div
            className='absolute left-0 top-0 h-full w-0'
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
          ></motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default ProductList;
