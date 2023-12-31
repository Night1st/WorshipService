import { useGetProductHighlight } from '@/queries/product.queries';
import ConnectForm from '@/shared/components/common/ConnectForm';
import ProductList from '@/shared/components/common/ProductList';
import Banner from '@/shared/components/home/banner';
import ProductType from '@/shared/components/home/productType';
import LayoutWebsite from '@/shared/components/layout/LayoutWebsite';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const homeData = {
  name: 'SẢN PHẨM',
  description: 'Chúng tôi luôn mong muốn mang đến các sản phẩm chất lượng nhất',
  cover_image: 'bg-sanpham',
};

export function ProductDetail() {
  const [limit, setLimit] = useState(10)
  const { data: productHighlight, refetch } = useGetProductHighlight(limit);
  useEffect(() => {
    refetch()
  }, [limit])
  if(!productHighlight) return <></>
  return (
    <>
      <Head>
        <title>Sản phẩm</title>
        <meta name='description' content='Đồ thờ cúng' />
        <meta name='keywords' content='Đồ thờ cúng' />
      </Head>
      <Banner data={homeData} />
      <ProductType />
      <ProductList limit={limit} setLimit={setLimit} products={productHighlight} />
      <ConnectForm />
    </>
  );
}

ProductDetail.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default ProductDetail;
