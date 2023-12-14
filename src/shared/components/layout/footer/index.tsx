import { footerData } from "@/shared/mock/footer";
import InforFooter from "./info";
import Image from 'next/image';

const Footer = () => {
  return (
    <section className="w-full flex flex-col gap-5 justify-between items-center mx-auto px-16 py-10 bg-[#160A0F] text-white font-thin">
      <div className="grid grid-cols-4 gap-4 justify-start items-center align-top">
        <div className="flex flex-col justify-center items-start">
          <Image height={200} width={200} src={"/images/Logo.png"} alt={""}></Image>
        </div>
        <div className="flex flex-col">
          <InforFooter title="Giới thiệu"/>
          <InforFooter title="Sản phẩm"/>
          <InforFooter title="Tin tức & Sự kiện"/>
        </div>
        <div className="flex flex-col">
          <InforFooter title="Liên hệ"/>
          <div className="flex gap-3 py-2">
            {footerData.icon.map((item, idx) => (
              <Image key={idx} height={30} width={30} src={item.icon} alt={''}></Image>
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
        <p>Bản quyền thuộc về Công ty Metaverse</p>
      </div>
    </section>
  );
};

export default Footer;
