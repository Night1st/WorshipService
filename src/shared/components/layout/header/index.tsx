import { fakeMenu } from '@/shared/mock/menu';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
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
    <section className='w-full sticky top-0 z-50 laptop:flex justify-between items-center gap-5 px-4 py-4 laptop:px-10 transition bg-[var(--primary-color-800)] bg-opacity-100 text-white duration-500 ease-in-out '>
      <Image height={50} width={50} src={'/Logo.svg'} alt={''} onClick={() => router.push('/')}></Image>
      <div className='flex gap-5'>
        <input
          className='appearance-none border rounded-full px-4 py-2 focus:outline-none focus:shadow-outline text-[#000]'
          type='text'
          placeholder='Tìm kiếm sản phẩm...'
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <ul
          className={`justify-center items-center gap-5 phone:max-laptop:text-center laptop:flex ml-10 ${
            isToggleOpen ? 'block' : 'hidden'
          }`}
        >
          {fakeMenu.map((item, inx) => (
            <Link href={item.link} key={inx}>
              <li className='text-base'>{item.title}</li>
            </Link>
          ))}
        </ul>
      </div>
      <button className='absolute right-5 top-4 block laptop:hidden' onClick={() => setIsToggleOpen(!isToggleOpen)}>
        <Image height={50} width={50} src={'/images/Logo/MenuIcon.png'} alt={''}></Image>
      </button>
    </section>
  );
};

export default Header;
