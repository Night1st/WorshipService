import TitleSection from "./TitleSection";
import React from "react";
import Image from "next/image";
import { Solution } from './SolutionOverview';

interface Props {
    id: number
    solution: Solution[];
}

const SuccessProject = ({solution, id}: Props) => {
    return (
        <section className="px-32 bg-[#E6EAEF] py-10">
          <TitleSection
            title="DỰ ÁN THÀNH CÔNG"
            description="Một số dự án tiêu biểu của Metaverse"
          />
            {solution[id].successProject.map((item, idx) => (
            <div key={idx} className='grid grid-cols-2 justify-start items-center'>
              <div className='flex justify-center items-center px-10 py-10'>
                <Image className='w-full h-auto' height={300} width={300} src={item.image} alt={''}></Image>
              </div>
              <div className='flex flex-col gap-3 px-10 py-10'>
                <h1 className='text-[#1B3864] text-4xl '>{item.title}</h1>
                <p className='text-xl'>{item.description}</p>
              </div>
            </div>
            ))}
        </section>
    );
}

export default SuccessProject