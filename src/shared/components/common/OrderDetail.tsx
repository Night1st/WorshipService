import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IProductDetail, ISellInformation } from '@/schemas/product.type';
import { Tab } from '@headlessui/react';
import { PreImage } from './PreImage';
import Carousel from 'react-multi-carousel';
import { formatCurrency } from '@/shared/utils/functions/formatCurrency';
import IconArrowLeft from '../icon/IconArrowLeft';
import IconArrowRight from '../icon/IconArrowRight';

interface Props {
  product: IProductDetail;
}

const OrderDetail = ({ product }: Props) => {
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
  const imageList = [
    product.product[0].image,
    product.product[0].image2,
    product.product[0].image3,
    product.product[0].image4,
    product.product[0].image5,
    product.product[0].image6,
    product.product[0].image7,
  ];
  const [mainImage, setMainImage] = useState<string>(imageList[0]);
  const [selectedType, setSelectedType] = useState<ISellInformation>(product.sellInformation[0] as ISellInformation);
  const handleChangeImage = (type: string) => {
    let newIndex = imageList.indexOf(mainImage);
    if (type === 'prev') {
      newIndex = newIndex - 1 < 0 ? imageList.length - 1 : newIndex - 1;
    } else if (type === 'next') {
      newIndex = newIndex + 1 >= imageList.length ? 0 : newIndex + 1;
    }
    setMainImage(imageList[newIndex]);
  };
  
  return (
    <section className='w-full p-4 laptop:px-10 laptop:py-8'>
      <div className='grid grid-cols-1 laptop:grid-cols-7 gap-[77px]'>
        <div className='laptop:col-span-3 flex flex-col w-full overflow-hidden justify-center items-center'>
          <div className='flex justify-center items-center w-full min-h-[300px] rounded-xl overflow-hidden'>
            <PreImage src={mainImage} alt={'main-image'} className='w-full min-h-[300px] rounded-xl' />
          </div>
          <div className='mt-5 grid grid-cols-5 gap-5 justify-center items-center'>
            <div className='w-[48px] h-[48px] flex justify-center items-center p-3 border border-[#550F17] cursor-pointer'>
              <IconArrowLeft fill='#550F17' onClick={() => handleChangeImage("prev")}/>
            </div>
            {imageList.slice(0, 3).map(image => (
              <div key={image} className='w-full h-[100px] rounded-xl overflow-hidden'>
                <PreImage src={image} alt={'image-other'} className='w-full max-h-[100px] rounded-xl' />
              </div>
            ))}
            <div className='w-[48px] h-[48px] flex justify-center items-center p-3 border border-[#550F17] cursor-pointer justify-self-end'>
              <IconArrowRight fill='#550F17' onClick={() => handleChangeImage("next")}/>
            </div>
          </div>
        </div>
        <div className='laptop:col-span-4 flex flex-col w-full gap-3 px-8'>
          {product.product.map((item, idx) => (
            <div key={idx} className='flex flex-col gap-3'>
              <h1 className='laptop:text-2xl laptop:leading-[29px] text-black text-2xl'>{item.productName}</h1>
              <p className='px-2 text-xs leading-[19px] text-black bg-[#EDB84F] rounded-xl w-fit'>{item.tags}</p>
            </div>
          ))}
          <div>
            <p className='text-base line-through laptop:pt-10 pb-2 text-[#6C6C6C]'>
              {selectedType ? formatCurrency(selectedType.origin_price) : ''}
            </p>
            <div className='flex gap-5'>
              <p className='text-4xl leading-[29px] text-red-800'>
                {selectedType ? formatCurrency(selectedType.current_price) : ''}
              </p>
              <p className='bg-[#FFE26F] text-base text-black text-center flex justify-center items-center px-2 rounded-sm'>{`Giảm ${
                selectedType ? selectedType.sale_percent : 0
              }%`}</p>
            </div>
          </div>
          <p className='text-base font-semibold laptop:pt-10 m-0 p-0'>Phân loại</p>
          <div className='flex items-start gap-5 py-2'>
            {product.sellInformation.map((item, idx) => (
              <div
                key={idx}
                className={`max-h-[56px] flex gap-3 border border-black py-2 px-3 items-center justify-center cursor-pointer ${
                  item == selectedType &&
                  'border-[var(--primary-color-800)] text-[var(--primary-color-800)] bg-[var(--primary-color-100)]'
                }`}
                onClick={() => setSelectedType(item)}
              >
                <img
                  width={30}
                  height={30}
                  src={'https://www.dothocunggiadinh.com:8443/storage/' + item.image}
                  alt={''}
                />
                <p className='text-sm'>{item.type}</p>
              </div>
            ))}
          </div>
          <div className='gap-5 grid grid-cols-1 tablet:grid-cols-3 pt-5'>
            {product.socialInformation.map((item, idx) => (
              <motion.button
                key={idx}
                whileHover='hover'
                className={`min-w-[250px] max-h-[46px] bg-transparent relative flex justify-center items-center gap-3 text-[#550F17] border-[var(--primary-color-900)] border-2 text-left py-3 px-10 cursor-pointer mt-3`}
                onClick={() => window.open(item.link)}
              >
                <Image width={30} height={30} src={'/images/Logo/Shopee.png'} alt={''} />
                <p className='text-sm font-semibold'>{`Mua hàng ${item.platform}`}</p>
              </motion.button>
            ))}
            <motion.button
              whileHover='hover'
              className={`min-w-[250px] max-h-[46px] bg-transparent relative flex justify-center items-center gap-3 text-[#550F17] border-[var(--primary-color-900)] border-2 text-left py-3 px-10 cursor-pointer mt-3`}
              //onClick={() => router.push("")}
            >
              <p className='text-sm font-semibold'>{'Đăng ký nhận tư vấn'}</p>
            </motion.button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 laptop:grid-cols-3 gap-10 pt-8'>
        <div className='flex border-2 rounded-xl border-[var(--primary-color-900)]'>
          <div className='flex p-5 gap-5'>
            <div>
              <img src={'/images/Logo/Policy1.png'} alt={''} className='min-w-[32px] laptop:min-w-[56px]' />
            </div>
            <div className='flex flex-col text-left'>
              <p className='text-[20px] leading-[24px] text-[var(--primary-color-900)]'>Chính sách giao hàng</p>
              <p className='text-base'>{product.product[0].sell_policy}</p>
            </div>
          </div>
        </div>
        <div className='flex border-2 rounded-xl border-[var(--primary-color-900)]'>
          <div className='flex p-5 gap-5'>
            <div>
              <img src={'/images/Logo/Policy2.png'} alt={''} className='min-w-[32px] laptop:min-w-[56px]' />
            </div>
            <div className='flex flex-col text-left'>
              <p className='text-[20px] leading-[24px] text-[var(--primary-color-900)]'>Chính sách thanh toán</p>
              <p className='text-base'>{product.product[0].payment_policy}</p>
            </div>
          </div>
        </div>
        <div className='flex border-2 rounded-xl border-[var(--primary-color-900)]'>
          <div className='flex p-5 gap-5'>
            <div>
              <img src={'/images/Logo/Policy3.png'} alt={''} className='min-w-[32px] laptop:min-w-[56px]' />
            </div>
            <div className='flex flex-col text-left'>
              <p className='text-[20px] leading-[24px] text-[var(--primary-color-900)]'>Chính sách đổi trả</p>
              <p className='text-base'>{product.product[0].change_policy}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-5 pb-16'>
        {product.product.map((item, idx) => (
          <Tab.Group key={idx}>
            <Tab.List className='py-2 pr-4'>
              <Tab>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? 'py-2 px-6 border-b-2 border-[var(--primary-color-900)] text-[var(--primary-color-900)] outline-none text-center'
                        : 'py-2 px-6 text-black outline-none text-center'
                    }
                  >
                    Mô tả sản phẩm
                  </button>
                )}
              </Tab>
              <Tab>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? 'py-2 px-6 border-b-2 border-[var(--primary-color-900)] text-[var(--primary-color-900)] outline-none text-center'
                        : 'py-2 px-6 text-black outline-none text-center'
                    }
                  >
                    Chi tiết sản phẩm
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels className={'p-5'}>
              <Tab.Panel>{item.description}</Tab.Panel>
              <Tab.Panel>{item.detail}</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        ))}
      </div>
    </section>
  );
};

export default OrderDetail;
