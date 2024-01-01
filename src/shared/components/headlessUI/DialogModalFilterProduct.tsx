import { ICategory, IProductsByCategory } from '@/schemas/category.type';
import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import IconClose from '../icon/IconClose';
import { useFilterProductByCategory } from '@/queries/category.queries';

type Props = {
  title: string;
  data: ICategory[] | [];
  selectedItems: any;
  handleItemClick: any;
  setFilterProducts: any;
};
export default function DialogModalFilterProduct({
  setFilterProducts,
  handleItemClick,
  title,
  data,
  selectedItems,
}: Props) {
  let [isOpen, setIsOpen] = useState(false);
  const [filterProductsByCategory, setFilterProductsByCategory] = useState<IProductsByCategory[] | []>([]);

  const doFilter = useFilterProductByCategory(handleSuccess);

  function handleSuccess(data: IProductsByCategory[]) {
    setFilterProductsByCategory(data);
  }

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const handleSearch = async () => {
    const category = selectedItems.map((product: ICategory) => ({ value: product.name }));
    const body = {
      category: category,
    };
    doFilter.mutate(body);
    setFilterProducts(filterProductsByCategory)
    closeModal()
  };
  return (
    <React.Fragment>
      <div>
        <button
          type='button'
          onClick={openModal}
          className='rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75'
        >
          {title}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='max-w-[700px] w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title as='h3' className='mb-3 text-lg font-medium leading-6 text-gray-900'>
                    Đã chọn
                  </Dialog.Title>
                  <div className='flex flex-wrap items-start justify-start gap-2'>
                    {data?.map((item, index) => {
                      const isSelected = selectedItems.includes(item);
                      return (
                        <div
                          key={index}
                          className={`flex h-[56px] cursor-pointer items-center justify-center gap-2 rounded-md border p-[12px] text-center md:px-[14px] md:py-[16px] ${
                            isSelected ? 'border-[#FFCE56]' : 'border-[#FFCE56] opacity-[0.55]'
                          }`}
                        >
                          <p className=''>{item.name}</p>
                          <IconClose onClick={() => handleItemClick(item)} />
                        </div>
                      );
                    })}
                  </div>
                  <div className='mt-2 pt-2 border-t-2 border-bg-[#000]'>
                    <p className='mb-3 text-lg font-medium leading-6 text-gray-900'>Loại sản phẩm</p>
                    <div className='flex flex-wrap items-start justify-start gap-2'>
                      {data?.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className={`bg-[#FFCE56] flex h-[56px] cursor-pointer items-center justify-center gap-2 rounded-md border p-[12px] text-center md:px-[14px] md:py-[16px]`}
                          >
                            <p className=''>{item.name}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className='mt-4 flex justify-around items-center'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}
                    >
                      Bỏ chọn
                    </button>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={handleSearch}
                    >
                      Tìm kiếm
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </React.Fragment>
  );
}
