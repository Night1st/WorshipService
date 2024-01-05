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
import { ICategory } from '@/schemas/category.type';

interface Props {
  products?: IProduct[];
  category: { name?: string; description?: string; cover_image?: string };
  categoryData?: ICategory[]
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
const ProductListAlphabet = ({ products, category, categoryData }: Props) => {
  const [selectedItems, setSelectedItems] = useState<ICategory[]>([]);
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
  const handleItemClick = (item: ICategory) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(prevItems => prevItems.filter(selectedItem => selectedItem !== item));
    } else {
      setSelectedItems(prevItems => [...prevItems, item]);
    }
  };
  return (
    <section className='p-4 laptop:px-32 laptop:py-8'>
      <div className='mb-5 w-full flex justify-between items-center'>
        <div className='flex items-center'>
          <div className='flex justify-center items-center gap-2'>
            <p className='text-[#262417] cursor-pointer' onClick={() => router.push('/products')}>
              Sản phẩm
            </p>
            <IconArrowRight fill="#262417"/>
          </div>
          <h3 className='ml-2 text-[#14130E]'>{category.name}</h3>
        </div>
      </div>
      {/* //Filter By Group */}
      <div className='mb-5 w-full flex justify-start items-center gap-2'>
        <DialogModalFilterProduct setFilterProducts={setFilterProducts} handleItemClick={handleItemClick} selectedItems={selectedItems} data={selectedItems} title="Bộ lọc" />
        <div className='flex flex-wrap items-start justify-start gap-2'>
        {categoryData?.map((item, index) => {
           const isSelected = selectedItems.includes(item);
           return (
             <div
               key={index}
               className={`flex h-[56px] cursor-pointer items-center justify-center rounded-full border p-[12px] text-center md:px-[14px] md:py-[16px] ${
                 isSelected ? 'border-[#330009]' : 'border-[#44000D] opacity-[0.55]'
               }`}
               onClick={() => handleItemClick(item)}
             >
               <p className=''>{item.name}</p>
             </div>
           );
        })}
        </div>
      </div>
      {/* //Filter By Alpha */}
      <div className='w-full flex justify-between items-center'>
        <div className='flex items-center'>
          <p className='text-[#550F17]'>{filterProducts?.length}</p>
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
          className={`bg-transparent hover:bg-white relative flex justify-center items-center gap-1 laptop:gap-3 text-[#550F17] border-[var(--primary-color-900)] text-left px-4 laptop:py-3 laptop:px-10 border-2 cursor-pointer mt-3`}
          >
          <p className='text-sm'>{'Xem thêm'}</p>
          <IconArrowDown fill='#550F17' />
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
