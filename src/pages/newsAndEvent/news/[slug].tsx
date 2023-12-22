import { INews } from "@/schemas/news.type";
import { PreImage } from "@/shared/components/common/PreImage";
import LayoutWebsite from "@/shared/components/layout/LayoutWebsite";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next/types";

type Props = {
    news: INews
}

export function NewsDetail ({news}: Props) {
    if(!news) return <></>
    return (
        <>
            <Head>
            <title>Tin tức chi tiết</title>
            <meta name="description" content="Thông tin Sản phẩm" />
            </Head>
            <section className='relative w-full'>
            <div className='w-full grid grid-cols-1 laptop:grid-cols-6 justify-start items-start gap-8'>
                <div className='md:col-span-4 w-full flex flex-col justify-start items-start gap-8'>
                    <PreImage src={news.image} alt={""} />
                    <h1 className='text-lg md:text-2xl font-semibold'>{news.title}</h1>
                    <p className="text-lg">{news.public_date} - {news.author}</p>
                    <p className="text-xl">{news.summary}</p>
                    <p className="text-xl">{news.content}</p>
                </div>
                <div className='md:col-span-2 w-full min-h-[500px] flex flex-col justify-start items-start gap-8'>

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
            const data: INews = news.data
            return {
              props: { data },
            };
        } catch (error) {
            return {
                props: {
                    data: null,
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
  