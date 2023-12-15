import TitleSection from "../../common/TitleSection";

const ProductType = () => {
    const Type = [
        {
            title: "Hương",
            image: "bg-huong"
        },
        {
            title: "Nến",
            image: "bg-nen"
        },
        {
            title: "Tiền vàng",
            image: "bg-tienvang"
        },
        {
            title: "Set đồ cúng",
            image: "bg-setdocung"
        },
        {
            title: "Đồ hầu",
            image: "bg-dohau"
        },
        {
            title: "Sản phẩm khác",
            image: "bg-sanphamkhac"
        },
    ]
    return (
        <section className="px-40 py-10">
            <TitleSection
                title="DANH MỤC SẢN PHẨM"
                description="Chọn nhóm sản phẩm mà bạn quan tâm"
            />
            <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10 overflow-hidden">
                {Type.map((item, idx) => (
                    <div key={idx} className={`flex justify-center ${item.image} bg-cover bg-no-repeat bg-center  rounded-3xl`}>
                        <p className="text-4xl text-white text-center pt-20 pb-5">{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProductType