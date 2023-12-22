import { IBaseResponse } from "@/schemas/baseResponse.type";
import { INews } from "@/schemas/news.type";
import { PreImage } from "@/shared/components/common/PreImage";
import NewsCard from "@/shared/components/home/latestNews/newsCard";
import LayoutWebsite from "@/shared/components/layout/LayoutWebsite";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next/types";

type Props = {
    news: IBaseResponse<INews>
}

export function NewsDetail ({news}: Props) {
  if(!news) return <></>
  return (
      <>
          <Head>
          <title>Tin tức chi tiết</title>
          <meta name="description" content="Thông tin Sản phẩm" />
          </Head>
          <section className='p-20 w-full'>
          <div className='w-full grid grid-cols-1 laptop:grid-cols-6 justify-start items-start gap-8'>
              <div className='md:col-span-4 w-full flex flex-col justify-start items-start gap-8 text-black'>
                  <PreImage width={1000} height={600} src={news.data.image} alt={""} />
                  <h1 className='text-lg md:text-3xl font-semibold'>{news.data.title}</h1>
                  <p className="text-lg">{news.data.public_date} - {news.data.author}</p>
                  <p className="text-xl">{news.data.summary}</p>
                  <p className="text-xl">{news.data.content}</p>
              </div>
              <div className='md:col-span-2 w-full min-h-[500px] flex flex-col justify-start items-start gap-8'>
                  <h1 className='text-lg laptop:text-4xl text-[var(--primary-color-1000)]'>TIN TỨC KHÁC</h1>
                  {Array(6).fill(<NewsCard news={news.data}/>)}
              </div>
          </div>
          </section>
      </>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
    const slug = ctx.params?.slug;
    if (slug) {
        try {
            const res = await fetch(`https://www.dothocunggiadinh.com:8443/api/news/get-by-slug?slug=${slug}`);
            const news = await res.json();
            return {
              props: { news },
            };
        } catch (error) {
            return {
                props: {
                    news: null,
                    error: 'Failed to fetch product data',
                },
              };
        }
    } else {
      return {
        props: {},
        notFound: true,
      };
    }
};
  
  export const getStaticPaths: GetStaticPaths = async _ctx => {
    return {
      paths: [],
      fallback: true,
    };
  };

NewsDetail.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default NewsDetail;
  