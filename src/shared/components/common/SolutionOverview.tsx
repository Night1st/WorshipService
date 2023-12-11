import React from 'react';
import Image from 'next/image';
import BtnFindOut from './BtnFindOut';
import { motion } from 'framer-motion';
import router from 'next/router';
import IconLineDirection from '../icon/IconLineDirection';
import IconArrowRight from '../icon/IconArrowRight';

export interface Solution {
  key: number;
  title: string;
  description: string;
  details: SolutionDetails[];
  successProject: SuccessPj[],
  image: string;
  link: string;
}

interface SolutionDetails {
  title: string,
  description: string
}

interface SuccessPj {
  title: string,
  description: string,
  image: string
}

interface Props {
  solution: Solution[];
  handleClick: any
}

const SolutionOverview = ({ solution, handleClick }: Props) => {
  //const [solutionTab, setSolutionTab] = useState<Solution>(solution[0] as Solution);
  return (
    <section className='mx-auto px-32'>
      {solution.map((item, idx) =>
        item.key % 2 == 0 ? (
          <div key={idx} className='grid grid-cols-2 justify-start bg-[white] items-center'>
            <div className='flex flex-col gap-10 px-10 py-10'>
              <p className='text-[#1B3864] text-4xl '>{item.title}</p>
              <h1 className='text-xl'>{item.description}</h1>
              <ul>
                {item.details.map((detail, index) => (
                  <li key={index} className='flex text-lg gap-2 items-center'>
                    <Image height={30} width={30} src={'/images/check-mark.png'} alt={''}></Image>
                    {detail.title}
                  </li>
                ))}
              </ul>
              <div className='flex justify-start gap-5'>
              <motion.button
                whileHover="hover"
                className={`bg-[#1B3864] relative flex justify-center items-center gap-3 text-white text-left py-4 px-4 rounded cursor-pointer mt-3 w-60`}
                onClick={handleClick}
              >
                <p className="text-sm">{"Kết nối Metaverse"}</p>
                <motion.div
                  className="absolute left-0 top-0 h-full w-0"
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                ></motion.div>
              </motion.button>
              <motion.button
                whileHover="hover"
                className={`bg-[white] relative flex justify-center items-center gap-3 text-[#1B3864] text-left py-4 px-4 rounded cursor-pointer mt-3`}
                onClick={() => router.push(item.link)}
              >
                <p className="text-sm">{"Dự án thành công"}</p>
                <IconArrowRight  color="#1B3864" />
                <motion.div
                  className="absolute left-0 top-0 h-full w-0"
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                ></motion.div>
              </motion.button>
              </div>
            </div>
            <div className='flex justify-center items-center px-10 py-10'>
              <Image className='' height={300} width={300} src={item.image} alt={''}></Image>
            </div             >
          </div>
        ) : (
          <div key={idx} className='grid grid-cols-2 justify-start bg-[#E6EAEF] items-center'>
            <div className='flex justify-center items-center px-10 py-10'>
              <Image className='' height={300} width={300} src={item.image} alt={''}></Image>
            </div>
            <div className='flex flex-col gap-10 px-10 py-10'>
              <p className='text-[#1B3864] text-4xl '>{item.title}</p>
              <h1 className='text-xl'>{item.description}</h1>
              <ul>
                {item.details.map((detail, index) => (
                  <li key={index} className='flex text-lg gap-2 items-center'>
                    <Image height={30} width={30} src={'/images/check-mark.png'} alt={''}></Image>
                    {detail.title}
                  </li>
                ))}
              </ul>
              <div className='flex justify-start gap-5'>
              <motion.button
                whileHover="hover"
                className={`bg-[#1B3864] relative flex justify-center items-center gap-3 text-white text-left py-4 px-4 rounded cursor-pointer mt-3 w-60`}
                onClick={handleClick}
              >
                <p className="text-sm">{"Kết nối Metaverse"}</p>
                <motion.div
                  className="absolute left-0 top-0 h-full w-0"
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                ></motion.div>
              </motion.button>
              <motion.button
                whileHover="hover"
                className={`bg-[#E6EAEF] relative flex justify-center items-center gap-3 text-[#1B3864] text-left py-4 px-4 rounded cursor-pointer mt-3`}
                onClick={() => router.push(item.link)}
              >
                <p className="text-sm">{"Dự án thành công"}</p>
                <IconArrowRight  color="#1B3864" />
                <motion.div
                  className="absolute left-0 top-0 h-full w-0"
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                ></motion.div>
              </motion.button>
              </div>
            </div>
          </div>
        )
        
      )}
    </section>
  );
};

export default SolutionOverview;
