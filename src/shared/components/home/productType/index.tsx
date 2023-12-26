import TitleSection from "../../common/TitleSection";
import router from "next/router";
import { useGetAllProductGroup } from "@/queries/product-group.queries";

const ProductType = () => {
    const {data: productGroup} = useGetAllProductGroup()
    return (
        <section className="p-4 laptop:px-10 laptop:py-8">
            <TitleSection
                title="DANH MỤC SẢN PHẨM"
                description="Chọn nhóm sản phẩm mà bạn quan tâm"
            />
            <div className="w-full grid grid-cols-1 gap-5 tablet:grid-cols-2 laptop:grid-cols-3 mt-10 overflow-hidden">
                {productGroup?.map((item, idx) => (
                    console.log(item.cover_image),
                    <div key={idx} className={`flex justify-center bg-cover bg-no-repeat bg-center cursor-pointer rounded-3xl`} 
                        onClick={() => router.push(`/products/${item.id}`)}
                        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(https://www.dothocunggiadinh.com:8443/storage/${item.cover_image})`}}
                        >
                        <p className="text-[34px] leading-[41px] text-white text-center pt-20 pb-5">{item.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProductType