import React from "react";
import Image from "next/image";

interface Props {
    image: string;
    description: string
}

const AboutUs = ({image, description}: Props) => {
    return (
        <div className='grid grid-cols-1 laptop:grid-cols-2 justify-center items-center'>
            <div className='hidden laptop:flex justify-center items-center laptop:p-10'>
                <Image className='' height={300} width={300} src={image} alt={''}></Image>
            </div>
            <div className='p-5 laptop:p-10'>
                <p className='text-base laptop:text-2xl laptop:leading-[29px] text-left'>{description}</p>
            </div>
      </div>
    )
}

export default AboutUs