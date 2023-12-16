import ContentBanner from "./ContentBanner";
import Image from "next/image";
export interface Data {
  title: string;
  description: string;
  image: string;
}

interface Props {
  data: Data;
}
const Banner = ({ data }: Props) => {
  return (
      <div className="snap-x-mandatory bottom-24 scrollbar-none relative flex flex-col overflow-hidden text-white rounded-lg">
        <div className="w-full flex justify-center items-center mx-auto">
        <ContentBanner data={data}/>
        </div>
        <div className="absolute">

        </div>
        <div className="absolute border-1 bg-[var(--secondary-color-500)] bottom-0 right-0 flex gap-3 p-3 justify-center items-center">
          <Image width={30} height={30} src={"/images/Logo/Shopee.png"} alt={""}/>
          <p className="text-black">Cửa hàng</p>
        </div>
        {/* <div className="absolute border-1 bg-[var(--secondary-color-500)] bottom-0 right-0 flex gap-3 p-3 justify-center items-center">
          <Image width={30} height={30} src={"/images/Logo/Lazada.png"} alt={""}/>
          <p className="text-black">Cửa hàng</p>
        </div>  */}
      </div>

  );
};

export default Banner;
