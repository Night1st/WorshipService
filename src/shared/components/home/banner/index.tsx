import ContentBanner from "./ContentBanner";
import Image from "next/image";
export interface Data {
  name?: string;
  description?: string;
  cover_image?: string;
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
        <div className="absolute bottom-0 right-0">
        <div className="bg-[var(--secondary-color-500)] flex gap-3 p-3 mb-3 rounded-l-full cursor-pointer justify-center items-center" 
            onClick={() => window.open("https://shopee.vn/_ofltgiwau?gidzl=wAnWRHM9ebNejc1l5fQhK-onRsyCnAzQzhThPW6Ig0_uvJyp3y7q2wFYCc0FmwK8fx0rP3BE4VCD58kcLW", "_blank")}
            >
          <Image width={30} height={30} src={"/images/Logo/Shopee.png"} alt={""}/>
          <p className="text-black hidden laptop:block">Cửa hàng</p>
        </div>
        <div className="bg-[var(--secondary-color-500)] flex gap-3 p-3 mb-3 rounded-l-full cursor-pointer justify-center items-center" 
            onClick={() => window.open("https://www.lazada.vn/shop/xmdgbhc3?dsource=share&laz_share_info=760374888_10_3000_0_760374888_null&laz_token=1c9adcd5f85dd915195a615122c4c7f4&exlaz=e_cg%2FXMrtswajGip8qo24MCXRib2ph7O2ICC6FqKlh%2FLXCXvTKdNAtBZKHAzs035vD75u2eY%2FhXT5UMHp9sjzycJAh8nO6%2FK0ZD3WnASIas1Y%3D&sub_aff_id=social_share&sub_id2=760374888&sub_id6=CPI_EXLAZ", "_blank")}
            >
          <Image width={30} height={30} src={"/images/Logo/Lazada.png"} alt={""}/>
          <p className="text-black hidden laptop:block">Cửa hàng</p>
        </div> 
        </div>
      </div>

  );
};

export default Banner;
