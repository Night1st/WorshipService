import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Modal from './Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useCreateConnect } from '@/queries/contact.queries';
import { useRouter } from 'next/router';

const data = ['Hương', 'Nến', 'Tiền vàng', 'Set đồ cúng', 'Đồ hầu', 'Sản phẩm khác'];

const schema = Yup.object().shape({
  name: Yup.string().required('Hãy nhập tên của bạn!'),
  phone: Yup.string().required('Hãy nhập số điện thoại của bạn!'),
  email: Yup.string().required('Hãy nhập email của bạn!'),
  note: Yup.string(),
});

const ConnectForm = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const doContact = useCreateConnect(() => router.push('/'));
  const handleItemClick = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(prevItems => prevItems.filter(selectedItem => selectedItem !== item));
    } else {
      setSelectedItems(prevItems => [...prevItems, item]);
    }
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      note: '',
    },
    validationSchema: schema,
    onSubmit: async ({ name, phone, email, note }) => {
      const bodyRequest = {
        name: name,
        phone: String(phone),
        email: email,
        products: selectedItems,
        note: note,
      };
      doContact.mutate(bodyRequest);
      setOpen(true)
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <React.Fragment>
      <section className='mx-auto px-4 laptop:px-10 py-10 tablet:px-10'>
        <div className='bg-[var(--secondary-color-100)] p-5 justify-around items-center rounded-3xl'>
          <h1 className='text-center text-[var(--primary-color-1000)] text-2xl laptop:text-[34px] laptop:leading-[41px]'>
            ĐĂNG KÍ NHẬN TƯ VẤN
          </h1>
          <p className='text-center text-base pt-3'>
            Vui lòng để lại thông tin, chúng tôi sẽ hỗ trợ bạn trong thời gian sớm nhất
          </p>
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 laptop:gap-10 laptop:grid-cols-2 desktop:gap-10 pt-10 justify-between text-black'>
              <div className='w-full flex flex-col justify-between desktop:gap-5'>
                <div className='mb-4'>
                  <label className={`block text-sm font-bold mb-2 ${errors.name && touched.name && 'border-red-500'}`}>
                    Họ tên *
                  </label>
                  <input
                    className='appearance-none border rounded-lg w-full p-4 leading-tight focus:outline-none focus:shadow-outline'
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                    id='name'
                    placeholder='Vui lòng cho biết họ tên của bạn'
                  />
                </div>
                <div className='mb-4'>
                  <label
                    className={`block text-sm font-bold mb-2 ${errors.phone && touched.phone && 'border-red-500'}`}
                  >
                    Số điện thoại *
                  </label>
                  <input
                    className='appearance-none border rounded-lg w-full p-4 leading-tight focus:outline-none focus:shadow-outline'
                    type='number'
                    name='phone'
                    value={values.phone}
                    onChange={handleChange}
                    id='phone'
                    placeholder='Nhập số điện thoại của bạn'
                  />
                </div>
                <div className='mb-4'>
                  <label
                    className={`block text-sm font-bold mb-2 ${errors.email && touched.email && 'border-red-500'}`}
                  >
                    Email *
                  </label>
                  <input
                    className='appearance-none border rounded-lg w-full p-4 leading-tight focus:outline-none focus:shadow-outline'
                    type='text'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    id='email'
                    placeholder='Nhập email của bạn'
                  />
                </div>
                <div className='mb-4 flex justify-end z-30'>
                  <Modal open={open} onClose={() => setOpen(false)}>
                    <div className='text-center w-[744px] flex flex-col gap-5 '>
                      <h1 className='text-4xl laptop:text-4xl text-green-400 pt-10'>ĐĂNG KÝ THÀNH CÔNG</h1>
                      <p className='text-lg laptop:text-2xl text-black'>
                        Quý khách đã đăng ký nhận tư vấn thành công. Chúng tôi sẽ liên hệ Quý khách sớm nhất.
                      </p>
                      <Image
                        className='ml-auto mr-auto py-10'
                        height={400}
                        width={400}
                        src={'/images/Contact.png'}
                        alt={''}
                      />
                    </div>
                  </Modal>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='mb-4'>
                  <label className='block text-sm font-bold mb-3 desktop:mb-0'>Sản phẩm quan tâm</label>
                  <div className='flex flex-wrap items-start justify-start gap-2 laptop:flex laptop:gap-3 laptop:py-5'>
                    {data.map((item, index) => {
                      const isSelected = selectedItems.includes(item);
                      return (
                        <div
                          key={index}
                          className={`flex h-[56px] cursor-pointer items-center justify-center rounded-full border p-[12px] text-center md:px-[14px] md:py-[16px] ${
                            isSelected ? 'bg-[#44000D] text-white' : 'border-[#44000D]'
                          }`}
                          onClick={() => handleItemClick(item)}
                        >
                          <p className=''>{item}</p>
                        </div>
                      );
                    })}
                  </div>
                  <textarea
                    className='appearance-none border rounded-lg w-full min-h-[178px] py-2 px-3 my-3 leading-tight focus:outline-none focus:shadow-outline'
                    name='note'
                    value={values.note}
                    onChange={handleChange}
                    id='note'
                    placeholder='Nếu bạn cần hỗ trợ vấn đề khác, vui lòng cho chúng tôi biết.'
                  />
                </div>
              </div>
            </div>
            <div className='flex w-full justify-center items-center'>
              <input
                type='submit'
                className={`relative flex justify-center items-center gap-3 text-[var(--primary-color-900)] border-[#44000D] hover:bg-white border-2 py-4 px-4 rounded cursor-pointer mt-3 w-60`}
                value='Đăng ký'
              />
            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ConnectForm;
