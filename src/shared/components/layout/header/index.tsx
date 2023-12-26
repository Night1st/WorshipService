import { fakeMenu } from "@/shared/mock/menu";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter()

  return (  
    <section
      className='w-full sticky top-0 z-50 laptop:flex justify-between items-center gap-5 px-4 py-4 laptop:px-10 transition bg-[var(--primary-color-800)] bg-opacity-100 text-white duration-500 ease-in-out '
    >
      <Image height={50} width={50} src={"/Logo.svg"} alt={""} onClick={() => router.push('/')}></Image>
      <div className="flex gap-5">
        <input
          className='appearance-none rounded-full px-4 py-2 text-black'
          type='text'
          placeholder='Tìm kiếm sản phẩm...'
        />
        <ul className={`justify-center items-center gap-5 phone:max-laptop:text-center laptop:flex ml-10 ${isToggleOpen ? "block" : "hidden"}`}>
            {fakeMenu.map((item, inx) => (
              <Link href={item.link} key={inx}>
                <li className="text-sm">{item.title}</li>
              </Link>
            ))}
        </ul>
      </div>
      <button className="absolute right-5 top-4 block laptop:hidden" onClick={() => setIsToggleOpen(!isToggleOpen)}>
        <Image height={50} width={50} src={"/images/Logo/MenuIcon.png"} alt={""}></Image>
      </button>
    </section>
  );
};

export default Header;