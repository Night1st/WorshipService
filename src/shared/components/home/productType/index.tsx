import TitleSection from "../../common/TitleSection";
import router from "next/router";

const ProductType = () => {
    const Type = [
        {
            title: "Hương",
            image: "bg-huong",
            link: '/productDetail/huong'
        },
        {
            title: "Nến",
            image: "bg-nen",
            link: '/productDetail/nen'
        },
        {
            title: "Tiền vàng",
            image: "bg-tienvang",
            link: '/productDetail/tienVang'
        },
        {
            title: "Set đồ cúng",
            image: "bg-setdocung",
            link: '/productDetail/setDoCung'
        },
        {
            title: "Đồ hầu",
            image: "bg-dohau",
            link: '/productDetail/doHau'
        },
        {
            title: "Sản phẩm khác",
            image: "bg-sanphamkhac",
            link: '/productDetail/sanPhamKhac'
        },
    ]
    return (
        <section className="p-4 laptop:px-32 laptop:py-8">
            <TitleSection
                title="DANH MỤC SẢN PHẨM"
                description="Chọn nhóm sản phẩm mà bạn quan tâm"
            />
            <div className="w-full grid grid-cols-1 gap-5 tablet:grid-cols-2 laptop:grid-cols-3 mt-10 overflow-hidden">
                {Type.map((item, idx) => (
                    <div key={idx} className={`flex justify-center ${item.image} bg-cover bg-no-repeat bg-center cursor-pointer rounded-3xl`} onClick={() => router.push(item.link)}>
                        <p className="text-4xl text-white text-center pt-20 pb-5">{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProductType