import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { PreImage } from '../../common/PreImage';
import { INews } from '@/schemas/news.type';

interface Props {
  news: INews;
}

const NewsCard = ({ news }: Props) => {
  const date = new Date(news.updated_at);
  const router = useRouter();
  return (
    <motion.div
      className=' w-full h-[120px] grid grid-cols-7 justify-center items-center cursor-pointer border-collapse gap-4'
      style={{ borderBottom: '1px solid #555' }}
      onClick={() => router.push(`/newsAndEvent/news/${news.slug}`)}
    >
      <div className='col-span-2 flex justify-start items-center overflow-hidden'>
        <div className='py-3 w-[152px] h-[120px] rounded-sm'>
          <PreImage src={news.image} alt='news' className='rounded-sm'/>
        </div>
      </div>
      <div className='col-span-4 flex flex-col gap-3'>
        <h1 className='text-base font-bold text-black line-clamp-2'>{news.title}</h1>
        <p className='text-xs tablet:text-base'>
          {date.toLocaleDateString('en-GB')} - {news.author}
        </p>
      </div>
    </motion.div>
  );
};

export default NewsCard;
