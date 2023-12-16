import { fakeMenu } from "@/shared/mock/menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
      className='w-full sticky top-0 z-50 flex justify-between items-center gap-5 px-5 py-5 md:px-40 transition bg-[var(--primary-color-800)] bg-opacity-100 text-white duration-500 ease-in-out '
    >
      <div className="flex justify-around items-center">
        <Image height={50} width={50} src={"/images/Logo.png"} alt={""} onClick={() => router.push('/')}></Image>
        {/* <PreImage height={100} width={100} src={logo} alt={"Logo"} layer={false} /> */}

      </div>
      <div className="flex justify-center items-center gap-10">
        <ul className="justify-center items-cente gap-10 hidden lg:flex ml-10">
            {fakeMenu.map((item, inx) => (
              <Link href={item.link} key={inx}>
                <li>{item.title}</li>
              </Link>
            ))}
        </ul>
      </div>
      <div className="block md:hidden">...</div>
    </section>
  );
};

export default Header;
