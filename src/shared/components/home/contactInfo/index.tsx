import React from "react";
import TitleSection from "../../common/TitleSection";
import Image from 'next/image';
import ContactInfoCard from "./ContactInfoCard";
import { footerData } from "@/shared/mock/footer";

const ContactInfo = () => {
    return (<section className="px-32 text-center">
        <TitleSection
            title="THÔNG TIN LIÊN HỆ"
            description="Liên hệ với chúng tôi để được tư vấn và giải đáp thắc mắc nhanh nhất"
        />
        <div className='w-full flex justify-start py-5'>
            <div className='w-1/3 flex justify-center items-center px-10 py-10'>
              <Image className='' height={300} width={300} src={'/images/Contact.png'} alt={''}></Image>
            </div>
            <div className='w-2/3 flex flex-col gap-10 px-10 py-10'>
                {footerData.contactData.map((item, idx) => (
                    <ContactInfoCard key={idx} head={item.head} title={item.title} icon={item.icon} />
                ))}
            </div>
          </div>
    </section>)
}
export default ContactInfo