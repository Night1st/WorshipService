import Head from "next/head";
import LayoutWebsite from "@/shared/components/layout/LayoutWebsite";
import Banner from "@/shared/components/home/banner";
import Product from "@/shared/components/home/product";
import WhyUs from "@/shared/components/home/whyUs";
import ConnectForm from "@/shared/components/common/ConnectForm";
import EventUpcoming from "@/shared/components/home/eventUpcoming";
import React from "react";

const homeData = {
  name: "Mang bình an tới mỗi gia đình Việt",
  description: "",
  cover_image: "bg-trangchu"
}

export function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Trang chủ</title>
        <meta name="description" content="Đồ thờ cúng" />
        <meta name="keywords" content="Đồ thờ cúng" />
      </Head>
      <Banner data={homeData}/>
      <Product />
      <EventUpcoming />
      <WhyUs/>
      <ConnectForm/>
    </React.Fragment>
  );
}
Home.getLayout = (children: React.ReactNode) => (
  <LayoutWebsite>{children}</LayoutWebsite>
);
export default Home;
