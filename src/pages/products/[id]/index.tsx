import ConnectForm from '@/shared/components/common/ConnectForm';
import MaybeInterested from '@/shared/components/common/MaybeInterested';
import ProductList from '@/shared/components/common/ProductList';
import Banner from '@/shared/components/home/banner';
import LayoutWebsite from '@/shared/components/layout/LayoutWebsite';
import Head from 'next/head';
import { useGetAllProductGroup } from '@/queries/product-group.queries';
import { useGetProductByGroup } from '@/queries/product.queries';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import { IBaseResponse } from '@/schemas/baseResponse.type';
import { IProduct } from '@/schemas/product.type';
import React, { useEffect, useState } from 'react';
import ProductListAlphabet from '@/shared/components/common/ProductListAlphabet';
import { useGetAllCategoryByProductGroup } from '@/queries/category.queries';

type Props = {
  products: IBaseResponse<IProduct[]>;
};
export function GroupOverview({ products }: Props) {
  const [productsCurrent, setProductsCurrent] = useState<IBaseResponse<IProduct[] | undefined>>()
  const { query } = useRouter();
  const { data: productsQuery, refetch } = useGetProductByGroup(Number(query.id));
  const { data: productGroup } = useGetAllProductGroup();
  const groupId =
    products !== undefined && products.data.length > 0
      ? productGroup?.find(item => item.id === Number(products.data[0].productGroupId))
      : productGroup?.find(item => item.id === Number(query.id));
  const data = {
    name: groupId?.name,
    description: groupId?.description,
    cover_image: "bg-huong",
  };
  const {data: categoryByProductGroup, refetch: refetchCategory} = useGetAllCategoryByProductGroup(Number(groupId?.id))

  useEffect(() => {
    setProductsCurrent(products)
  }, [products])

  useEffect(() => {
    refetch();
  }, [query.id]);

  useEffect(() => {
    refetchCategory();
  }, [groupId]);
  return (
    <React.Fragment>
      <Head>
        <title>{groupId?.name}</title>
        <meta name='description' content='Đồ thờ cúng' />
        <meta name='keywords' content='Đồ thờ cúng' />
      </Head>
      {data.name ? (
        <React.Fragment>
          <Banner data={data} />
          {products !== undefined && products.data.length > 0 ? (
            <ProductListAlphabet categoryData={categoryByProductGroup} category={data} products={productsCurrent && productsCurrent.data} />
          ) : (
            <ProductList products={productsQuery} />
          )}
          <MaybeInterested />
          <ConnectForm />
        </React.Fragment>
      ) : (
        <div className='w-full min-h-[70vh] flex justify-center items-center'>
          <p className='text-6xl text-center'>Không có sản phẩm nào</p>
        </div>
      )}
    </React.Fragment>
  );
}
GroupOverview.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default GroupOverview;

export const getStaticProps: GetStaticProps = async ctx => {
  const name: any = ctx.params?.id; //name or id
  const isString = isNaN(name);
  if (name) {
    try {
      if (!isString) {
        return {
          props: {
            products: {
              statusCode: 200,
              data: [],
              total: 0,
              message: 'empty',
            },
          },
        };
      }
      const responseProduct = await fetch(`https://www.dothocunggiadinh.com:8443/api/product/search?name=${name}`);
      const products = await responseProduct.json();
      return {
        props: {
          products,
        },
      };
    } catch (error) {
      return {
        props: {
          products: null,
          error: 'Failed to fetch products data',
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
