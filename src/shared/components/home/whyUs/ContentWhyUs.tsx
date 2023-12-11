import { IWhyUsData, WhyUsData } from '@/shared/mock/whyUs';
import { motion } from 'framer-motion';

interface Props {
  selectedIcon: IWhyUsData;
}
const ContentWhyUs = ({ selectedIcon }: Props) => {
    return (
    <div className='w-1/2 flex gap-10 justify-center items-start'>
      <motion.div className='text-sm lg:text-lg bg-slate-200 p-10 rounded-2xl w-full text-center'>
        {selectedIcon ? selectedIcon.description : ''}
      </motion.div>
    </div>
  );
};

export default ContentWhyUs;
