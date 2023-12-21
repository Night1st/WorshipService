import { useGetProductDetail } from "@/queries/product.queries";
import { IBaseResponse } from "@/schemas/baseResponse.type";
import { IProductDetail } from "@/schemas/product.type";
import ConnectForm from "@/shared/components/common/ConnectForm";
import OrderDetail from "@/shared/components/common/OrderDetail";
import RelatedProduct from "@/shared/components/common/RelatedProduct";
import LayoutWebsite from "@/shared/components/layout/LayoutWebsite";
import { productData } from "@/shared/mock/product";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next/types";
import { useEffect, useState } from "react";

type Props = {
  product: IBaseResponse<IProductDetail>;
};

export function Detail({product}: Props) {
  if (!product) return <></>;
    return (
      <>
        <Head>
          <title>Thông tin Sản phẩm</title>
          <meta name="description" content="Thông tin Sản phẩm" />
        </Head>
        <OrderDetail product={product.data}/>
        <RelatedProduct product={[]}/>
        <ConnectForm/>
      </>
    );
  }
export const getStaticProps: GetStaticProps = async ctx => {
  const id = ctx.params?.id;
  console.log(id)
  if (id) {
    try {
      const responseProduct = await fetch(`https://www.dothocunggiadinh.com:8443/api/product/detail/${id}`);
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
  Detail.getLayout = (children: React.ReactNode) => (
    <LayoutWebsite>{children}</LayoutWebsite>
  );
  export default Detail;