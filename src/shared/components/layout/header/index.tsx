import { fakeMenu } from "@/shared/mock/menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const router = useRouter()
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 150 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollTop === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (  
    <section
      className='w-full sticky top-0 z-50 laptop:flex justify-between items-center gap-5 px-4 py-4 laptop:px-10 transition bg-[var(--primary-color-800)] bg-opacity-100 text-white duration-500 ease-in-out '
    >
      <Image height={50} width={50} src={"/Logo.svg"} alt={""} onClick={() => router.push('/')}></Image>
      <div className="flex gap-5">
        <input
          className='appearance-none border rounded-full px-4 py-2 focus:outline-none focus:shadow-outline'
          type='text'
          placeholder='Tìm kiếm sản phẩm...'
        />
        <ul className={`justify-center items-center gap-5 phone:max-laptop:text-center laptop:flex ml-10 ${isToggleOpen ? "block" : "hidden"}`}>
            {fakeMenu.map((item, inx) => (
              <Link href={item.link} key={inx}>
                <li className="text-base">{item.title}</li>
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