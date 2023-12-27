import { footerData } from "@/shared/mock/footer";
import InforFooter from "./info";
import Image from 'next/image';
import router from "next/router";

const Footer = () => {
  const linkFooter = [
    {
      title: "Giới thiệu",
      link: "/aboutUs"
    },
    {
      title: "Sản phẩm",
      link: "/products"
    },
    {
      title: "Tin tức & Sự kiện",
      link: "/newsAndEvent"
    }
  ]
  return (
    <section className="w-full flex flex-col gap-5 justify-between mx-auto px-16 py-10 bg-[var(--primary-color-900)] text-white">
      <div className="grid grid-cols-1 laptop:grid-cols-4 gap-4 justify-start items-start align-top">
        <div className="flex flex-col justify-center items-start">
          <Image height={150} width={150} src={"/Logo.svg"} alt={""}></Image>
        </div>
        <div className="flex flex-col">
          <InforFooter title="Liên hệ" link='/contact'/>
          <div className="flex gap-3 py-2">
            {footerData.icon.map((item, idx) => (
              <Image key={idx} height={30} width={30} src={item.icon} alt={''} className="bg-[var(--primary-color-900)] cursor-pointer" onClick={() => router.push(item.link)}></Image>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          {linkFooter.map((item, idx) => (
            <InforFooter key={idx} title={item.title} link={item.link}/>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-base">Thông tin liên hệ</p>
          {footerData.contactData.map((item, idx) => (
              <p key={idx} className="flex items-start gap-2 text-sm">
                <img src={item.icon} alt={''} className="min-w-[30px]"></img>
              {item.title}</p>
            ))}
        </div>
      </div>
      <div className="w-full flex justify-end items-center border-t-2 pt-5">
        <p className="cursor-pointer" onClick={() => window.open("https://metaverse-solution.vn/")}>Copyright © 2023 Đồ thờ cúng gia đình. Powered by Metaverse</p>
      </div>
    </section>
  );
};

export default Footer;
