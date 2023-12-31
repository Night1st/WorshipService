import { motion } from 'framer-motion';
import ProductCard from '../home/product/productCard';
import IconArrowDown from '../icon/IconArrowDown';
import { IProduct } from '@/schemas/product.type';
import { Listbox, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import IconArrowRight from '../icon/IconArrowRight';
import { useRouter } from 'next/router';
import DialogModalFilterProduct from '../headlessUI/DialogModalFilterProduct';

interface Props {
  products?: IProduct[];
  category: { name?: string; description?: string; cover_image?: string };
}
const defaultSelectAlphabets = [
  {
    id: 1,
    name: 'Nổi bật',
  },
  {
    id: 2,
    name: 'Giá tăng dần',
  },
  {
    id: 3,
    name: 'Giá giảm dần',
  },
];
const ProductListAlphabet = ({ products, category }: Props) => {
  const [filterProducts, setFilterProducts] = useState<IProduct[] | undefined>(products);
  const [selected, setSelected] = useState(defaultSelectAlphabets[0]);
  const router = useRouter();
  useEffect(() => {
    if (selected.id === 3) {
      setFilterProducts(products!.sort((a, b) => a.current_price - b.current_price));
    } else if (selected.id === 2) {
      setFilterProducts(products!.sort((a, b) => b.current_price - a.current_price));
    } else {
      setFilterProducts(products!);
    }
  }, [products && selected]);
  useEffect(() => {
    setFilterProducts(products)
  }, [products])
  return (
    <section className='p-4 laptop:px-32 laptop:py-8'>
      <div className='mb-5 w-full flex justify-between items-center'>
        <div className='flex items-center'>
          <div className='flex justify-center items-center gap-2'>
            <p className='text-[#262417] cursor-pointer' onClick={() => router.push('/products')}>
              Sản phẩm
            </p>
            <IconArrowRight />
          </div>
          <h3 className='ml-2 text-[#14130E]'>{category.name}</h3>
        </div>
      </div>
      {/* //Filter By Group */}
      <div className='mb-5 w-full flex justify-between items-center'>
        <DialogModalFilterProduct title="Bộ lọc" />
      </div>
      {/* //Filter By Alpha */}
      <div className='w-full flex justify-between items-center'>
        <div className='flex items-center'>
          <p className='text-[#550F17]'>{products?.length}</p>
          <h3 className='ml-2 text-[#262626]'>Sản phẩm</h3>
        </div>
        <div>
          <Listbox value={selected} onChange={setSelected}>
            <div className='relative mt-1'>
              <Listbox.Button className='relative w-full rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm cursor-pointer'>
                <span className='block truncate text-[#262626]'>Sắp xếp theo: {selected.name}</span>
                <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                  <ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
                  {defaultSelectAlphabets.map((defaultSelectAlphabet, defaultSelectAlphabetIdx) => (
                    <Listbox.Option
                      key={defaultSelectAlphabetIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                        }`
                      }
                      value={defaultSelectAlphabet}
                    >
                      {({ selected }) => (
                        <>
                          <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                            {defaultSelectAlphabet.name}
                          </span>
                          {selected ? (
                            <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                              <CheckIcon className='h-5 w-5' aria-hidden='true' />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
      <div className='w-full min-h-[350px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5 mt-10 overflow-hidden'>
        {filterProducts?.map((item, idx) => <ProductCard key={idx} product={item} />)}
      </div>
      <div className='flex justify-center items-center'>
        <motion.button
          whileHover='hover'
          className={`bg-transparent hover:bg-white relative flex justify-center items-center gap-3 text-[#550F17] border-[var(--primary-color-900)] text-left py-4 px-4 min-w-[200px] border-2 cursor-pointer mt-3`}
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

export default ProductListAlphabet;
