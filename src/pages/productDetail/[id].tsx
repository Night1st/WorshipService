import ConnectForm from "@/shared/components/common/ConnectForm";
import MaybeInterested from "@/shared/components/common/MaybeInterested";
import ProductList from "@/shared/components/common/ProductList";
import Banner from "@/shared/components/home/banner";
import LayoutWebsite from "@/shared/components/layout/LayoutWebsite";
import Head from "next/head";
import { productData } from "@/shared/mock/product";
import { useGetAllProductGroup } from "@/queries/product-group.queries";
import { useGetProductByGroup } from "@/queries/product.queries";
import { useRouter } from "next/router";
import { IProductGroup } from "@/schemas/product-group.type";

const homeData = {
    name: "HƯƠNG",
    description: "Hương thể hiện truyền thống, văn hóa tâm linh của dân tộc Việt, tỏ lòng thành kính với tổ tiên, thánh thần, trời đất…sau là nguyện cầu sự bình an cho gia đạo. Tấm lòng thành ấy sẽ thêm thuần khiết, khi sản phẩm ấy chính là những nén nhang sạch tự nhiên, an toàn, dịu ấm mang ý nghĩa nhân văn hướng thiện.",
    cover_image: "bg-huong"
}

export function GroupOverview() {
    const {query} = useRouter()
    const {data: productGroup} = useGetAllProductGroup()
    const {data: groupOverview} = useGetProductByGroup(Number(query.id))
    const groupId = productGroup?.find(item => item.id === Number(query.id))
    console.log(groupId)
    const data = {
      name: groupId?.name,
      description: groupId?.description,
      cover_image: "bg-huong"
    }
    return (
      <>
        <Head>
          <title>{groupId?.name}</title>
          <meta name="description" content="Trang chủ NGS" />
          <meta name="keywords" content="Công nghệ thông tin, Giải pháp số" />
        </Head>
        <Banner data={data}/>
        <ProductList product={groupOverview} />
        <MaybeInterested />
        <ConnectForm/>
      </>
    );
  }
  // export async function getServerSideProps() {
  //   try {
  //     // Thực hiện yêu cầu API bằng Axios
  //     const response = await axios.get("API_URL");
  //     const data = response.data;
  
  //     return {
  //       props: {
  //         bannerData: data.bannerData,
  //         // Các dữ liệu phần tĩnh khác
  //       },
  //     };
  //   } catch (error) {
  //     // Xử lý lỗi nếu có
  //     console.error("Error fetching data:", error);
  //     return {
  //       props: {
  //         bannerData: [],
  //       },
  //     };
  //   }
  // }
  GroupOverview.getLayout = (children: React.ReactNode) => (
    <LayoutWebsite>{children}</LayoutWebsite>
  );
  export default GroupOverview;