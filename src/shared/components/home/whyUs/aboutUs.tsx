import React from "react";
import Image from "next/image";

interface Props {
    image: string;
    description: string
}

const AboutUs = ({image, description}: Props) => {
    return (
        <div className='flex justify-center items-center'>
            <div className='hidden laptop:flex justify-center items-center laptop:p-10 laptop:w-1/3'>
                <Image className='' height={300} width={300} src={image} alt={''}></Image>
            </div>
            <div className='p-5 laptop:p-10 laptop:w-2/3 text-center'>
                <p className='text-base laptop:text-2xl laptop:leading-[29px] text-center'>{description}</p>
            </div>
      </div>
    )
}

export default AboutUs