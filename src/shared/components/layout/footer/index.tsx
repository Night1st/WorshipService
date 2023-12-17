import { footerData } from "@/shared/mock/footer";
import InforFooter from "./info";
import Image from 'next/image';
import router from "next/router";

const Footer = () => {
  return (
    <section className="w-full flex flex-col gap-5 justify-between mx-auto px-16 py-10 bg-[var(--primary-color-900)] text-white font-thin">
      <div className="grid grid-cols-1 laptop:grid-cols-4 gap-4 justify-start items-start align-top">
        <div className="flex flex-col justify-center items-start">
          <Image height={150} width={150} src={"/images/Logo.png"} alt={""}></Image>
        </div>
        <div className="flex flex-col">
          <InforFooter title="Giới thiệu" link='#'/>
          <InforFooter title="Sản phẩm" link='/productDetail'/>
          <InforFooter title="Tin tức & Sự kiện"  link='/eventUpcoming'/>
        </div>
        <div className="flex flex-col">
          <InforFooter title="Liên hệ"  link='#'/>
          <div className="flex gap-3 py-2">
            {footerData.icon.map((item, idx) => (
              <Image key={idx} height={30} width={30} src={item.icon} alt={''} className="bg-[var(--primary-color-800)] cursor-pointer" onClick={() => router.push(item.link)}></Image>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          {footerData.contactData.map((item, idx) => (
              <p key={idx} className="flex items-start gap-2">
                <Image height={30} width={30} src={item.icon} alt={''}></Image>
              {item.title}</p>
            ))}
        </div>
      </div>
      <div className="w-full flex justify-end items-center border-t-2 pt-5">
        <p>Bản quyền thuộc về...</p>
      </div>
    </section>
  );
};

export default Footer;
