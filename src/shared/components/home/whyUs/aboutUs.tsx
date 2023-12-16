import React from "react";
import Image from "next/image";

interface Props {
    image: string;
    description: string
}

const AboutUs = ({image, description}: Props) => {
    return (
        <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center px-10 py-10 w-1/3'>
                <Image className='' height={300} width={300} src={image} alt={''}></Image>
            </div>
            <div className='px-10 py-10 w-2/3 text-center'>
                <p className='text-lg'>{description}</p>
            </div>
      </div>
    )
}

export default AboutUs