import Head from "next/head";
import ConnectForm from "@/shared/components/common/ConnectForm";
import LayoutWebsite from "@/shared/components/layout/LayoutWebsite";
import Banner from "@/shared/components/home/banner";
import SolutionDetail from "@/shared/components/common/SolutionDetail";
import SuccessProject from "@/shared/components/common/SuccessProject";
import { Solution } from "@/shared/components/common/SolutionOverview";
import { MetaData } from "@/shared/mock/nextGenerationSolution";


interface Props {
    solution: Solution[];
}

const solutionData = {
    title: "Giải pháp",
    description: "ĐỊNH GIÁ TÀI SẢN",
    image: "/images/BannerSolution2.png"
  }

export function SolutionDetail1({solution}: Props) {
    return (<>
        <Head>
        <title>Giải pháp Metaverse</title>
        <meta name="description" content="Giải pháp Metaverse" />
        <meta name="keywords" content="Công nghệ thông tin, Giải pháp số" />
        </Head>
        <Banner data={solutionData} text="Dự án thành công"/>
        <SolutionDetail solution={MetaData} id={1}/>
        <SuccessProject solution={MetaData} id={1}/>
        <ConnectForm/>
    </>)
}

SolutionDetail1.getLayout = (children: React.ReactNode) => (
    <LayoutWebsite>{children}</LayoutWebsite>
  );
export default SolutionDetail1;