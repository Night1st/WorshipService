import React, { useState } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import Modal from './Modal';

const data = [
    "Hương",
    "Nến",
    "Set đồ cúng",
    "Đồ hầu",
    "Sản phẩm khác"
]

const ConnectForm = () => {
  const [selectedIcon, setSelectedIcon] = useState<string>('');
  const [open, setOpen] = useState(false)
  return (
    <>
      <section className='mx-auto px-32 py-10'>
        <div className='bg-[var(--secondary-color-100)] p-5 justify-around items-center rounded-lg'>
          <h1 className='text-center text-[var(--primary-color-1000)] text-4xl'>ĐĂNG KÍ NHẬN TƯ VẤN</h1>
          <p className='text-center'>Vui lòng để lại thông tin, chúng tôi sẽ hỗ trợ bạn trong thời gian sớm nhất</p>
          <div className='grid grid-cols-2 gap-4 pt-10 justify-between text-black'>
            <div className='flex flex-col'>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2'>
                  Họ tên *
                </label>
                <input
                  className='appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                  id='username'
                  type='text'
                  placeholder='Vui lòng cho biết họ tên của bạn'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2'>
                  Số điện thoại *
                </label>
                <input
                  className='appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                  id='password'
                  type='text'
                  placeholder='Nhập số điện thoại của bạn'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2'>
                  Email *
                </label>
                <input
                  className='appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                  id='password'
                  type='text'
                  placeholder='Nhập email của bạn'
                />
              </div>
              <div className='mb-4 flex justify-end'>
              <Modal open={open} onClose={() => setOpen(false)}>
                  <div className='text-center w-full flex flex-col gap-5'>
                    <h1 className='text-4xl text-green-400 pt-10'>ĐĂNG KÝ THÀNH CÔNG</h1>
                    <p className="text-2xl text-black">Quý khách đã đăng ký nhận tư vấn thành công. Chúng tôi sẽ liên hệ Quý khách sớm nhất.</p>
                    <Image className='ml-auto mr-auto py-10' height={400} width={400} src={'/images/ConnectSuccess.png'} alt={''} />
                  </div>
              </Modal>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='mb-4'>
                <label className='block text-sm font-bold'>
                  Sản phẩm quan tâm
                </label>
                <div className='flex gap-3 py-5'>
                    {data.map((item, index) => (
                        <button
                            key={index}
                            className={`${item == selectedIcon && "bg-[#44000D] text-white transition duration-750 ease-in-out"} border-[#44000D] border-2 justify-between items-center py-2 px-3 rounded-full cursor-pointer`}
                            onClick={() => setSelectedIcon(item)}
                        >{`${item}`}</button>
                    ))}
                </div>
                <textarea
                  className='appearance-none border rounded w-full h-32 py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                  placeholder='Nếu bạn cần hỗ trợ vấn đề khác, vui lòng cho chúng tôi biết.'
                />
              </div>
            </div>
          </div>
          <div className='flex w-full justify-center items-center'>
              <motion.button
                className={`relative flex justify-center items-center gap-3 text-[var(--primary-color-900)] border-[#44000D] border-2 py-4 px-4 rounded cursor-pointer mt-3 w-60`}
                onClick={() => setOpen(true)}
              >
                <p className="text-sm">{"Đăng ký"}</p>
                <motion.div
                  className="absolute left-0 top-0 h-full w-0"
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                ></motion.div>
              </motion.button>
            </div>
        </div>
      </section>
    </>
  );
};

export default ConnectForm;
