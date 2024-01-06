import { fakeMenu } from '@/shared/mock/menu';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import IconSearch from '../../icon/IconSearch';
import IconMenu from '../../icon/IconMenu';

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      router.push(`/products/${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleInputChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <section className='w-full sticky top-0 z-50 laptop:grid laptop:grid-cols-10 justify-between items-center gap-5 px-4 py-4 laptop:px-10 transition bg-[var(--primary-color-800)] bg-opacity-100 text-white duration-500 ease-in-out'>
      <div className='laptop:col-span-2 flex w-1/2 items-center gap-20 tablet:justify-between'>
        <Image height={50} width={50} src={'/Logo.svg'} alt={''} onClick={() => router.push('/')}></Image>
      </div>
      <div className='laptop:col-span-4 flex flex-col md:flex-row w-full h-full justify-end items-center gap-10'>
        <div className='relative hidden laptop:block'>
          <input
            className='min-w-[267px] appearance-none border rounded-full px-4 py-2 focus:outline-none focus:shadow-outline text-[#000] text-xs max-w-[178px]'
            type='text'
            placeholder='Tìm kiếm sản phẩm...'
            value={searchTerm}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <div className='absolute top-0 right-0 flex items-center h-full pr-3'>
            <IconSearch />
          </div>
        </div>
        <button
          className='absolute top-1/2 transform -translate-y-1/2 right-5 flex justify-center items-center gap-3 laptop:hidden'
          onClick={() => setIsToggleOpen(!isToggleOpen)}
        >
          <div className='flex justify-center items-center bg-white px-4 rounded-lg'>
            <IconSearch className='max-w-[50px] max-h-[50px] cursor-pointer' />
          </div>
          <IconMenu className='max-w-[50px] max-h-[50px] cursor-pointer' />
        </button>
      </div>
      <ul
        className={`col-span-4 w-full absolute top-30 left-0 bg-[var(--primary-color-800)] px-4 pb-4 laptop:px-0 laptop:pb-0 phone:max-laptop:pt-5 justify-center items-center laptop:justify-center laptop:items-start gap-5 phone:max-laptop:text-center flex flex-col laptop:flex-row laptop:relative laptop:border-b laptop:border-b-gray-100 ${
          isToggleOpen ? 'block' : 'hidden'
        }`}
      >
        {fakeMenu.map((item, inx) => (
          <Link href={item.link} key={inx}>
            <li className={`text-sm ${router.pathname === item.link && 'pb-2 border-b border-b-gray-200'}`}>
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Header;
