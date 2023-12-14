import TitleSection from "../../common/TitleSection";

const ProductType = () => {
    const Type = [
        {
            title: "HƯƠNG",
            image: ""
        },
        {
            title: "NẾN",
            image: ""
        },
        {
            title: "TIỀN VÀNG",
            image: ""
        },
        {
            title: "SET ĐỒ CÚNG",
            image: ""
        },
        {
            title: "ĐỒ HẦU",
            image: ""
        },
        {
            title: "SẢN PHẨM KHÁC",
            image: ""
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
                    <div key={idx} className="flex justify-center bg-[gray]" style={{backgroundImage: `url(${item.image})`}}>
                        <p className="text-xl text-white text-center pt-20">{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProductType