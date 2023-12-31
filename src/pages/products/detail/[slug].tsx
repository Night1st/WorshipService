
import { useGetRelatedProduct } from "@/queries/product.queries";
import { IBaseResponse } from "@/schemas/baseResponse.type";
import { IProduct, IProductDetail } from "@/schemas/product.type";
import ConnectForm from "@/shared/components/common/ConnectForm";
import OrderDetail from "@/shared/components/common/OrderDetail";
import RelatedProduct from "@/shared/components/common/RelatedProduct";
import LayoutWebsite from "@/shared/components/layout/LayoutWebsite";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next/types";

type Props = {
  product: IBaseResponse<IProductDetail>;
};

export function Detail({product}: Props) {
  // const { data: relateProduct } = useGetRelatedProduct(product.data.product[0].id)
  if (!product) return <></>;
    return (
      <>
        <Head>
          <title>Thông tin Sản phẩm</title>
          <meta name="description" content="Thông tin Sản phẩm" />
        </Head>
        <OrderDetail product={product.data}/>
        {/* Todo Thuan */}
        {/* <RelatedProduct product={relateProduct}/> */}
        <ConnectForm/>
      </>
    );
  }
export const getStaticProps: GetStaticProps = async ctx => {
  const slug = ctx.params?.slug;
  if (slug) {
    try {
      const responseProduct = await fetch(`https://www.dothocunggiadinh.com:8443/api/product/get-by-slug?slug=${slug}`);
      const product = await responseProduct.json();
      return {
        props: {
          product,
        },
      };
    } catch (error) {
      return {
        props: {
          product: null,
          error: 'Failed to fetch product data',
        },
      };
    }
  } 
  else {
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
  Detail.getLayout = (children: React.ReactNode) => (
    <LayoutWebsite>{children}</LayoutWebsite>
  );
  export default Detail;