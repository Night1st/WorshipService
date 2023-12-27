import { motion } from 'framer-motion';
import Image from 'next/image';
import router from 'next/router';
import { IProduct } from '@/schemas/product.type';
import { PreImage } from '../../common/PreImage';
import { formatCurrency } from '@/shared/utils/functions/formatCurrency';
interface Props {
  product: IProduct;
}

const ProductCard = ({ product }: Props) => {
  return (
    <motion.div
      className='flex flex-col items-center cursor-pointer overflow-hidden border-collapse rounded-xl'
      style={{ border: '1px solid #555' }}
      onClick={() => router.push(`/products/detail/${product.slug}`)}
    >
      <PreImage src={product.image} width={512} height={400} alt={''} />
      <div className='flex flex-col gap-3 px-3 py-3 bg-white w-full h-3/5 justify-between'>
        <div className='flex flex-col gap-2'>
          <p className='px-2 text-xs leading-[19px] text-black bg-[#EDB84F] rounded-xl w-fit'>
            {product.freeShip == 1 ? 'Miễn phí vận chuyển' : 'Không miễn phí vận chuyển'}
          </p>
          <h1 className='text-base font-bold text-black line-clamp-2'>{product.productName}</h1>
        </div>
        <div className='flex flex-col'>
          <p className='text-base text-right line-through'>{formatCurrency(product.origin_price)}</p>
          <p className='text-2xl leading-[29px] text-red-800 text-right'>{formatCurrency(product.current_price)}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
