import { ITestimonial, testimonialData } from "@/shared/mock/testimonial";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PreImage } from "../../common/PreImage";
import TitleSection from "../../common/TitleSection";
import ContentTestimonial from "./ContentTestimonial";
import Image from "next/image";

const Testimonial = () => {
  let images = []
  for (let i = 0; i < 4; ++i) {
    images.push(<Image className='flex justify-center items-center' height={300} width={300} src={'/images/TheCup.png'} alt={''}></Image>)
  }

  return (
    <section className="mx-auto px-32 py-10">
      <div className="w-full flex flex-col justify-around items-center text-center">
        <TitleSection
          title="KHÁCH HÀNG"
          description="Những đơn vị đã hài lòng với giải pháp của Metaverse"
        />
        <div className="mt-20 w-full grid grid-cols-4 justify-between gap-10">
          {images}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
