export const Quote = [
    {
      key: 1,
      title: 'Tầm nhìn',
      description: 'Trở thành nhà cung cấp sản phẩm đồ cúng lễ uy tín hàng đầu cho tất cả gia đình Việt Nam',
    },
    {
      key: 2,
      title: 'Sứ mệnh',
      description: 'Gìn giữ nét đẹp văn hóa thờ cúng của người Việt, giúp tất cả gia đình Việt Nam có cuộc sống viên mãn, bình an.',
    },
    {
      key: 3,
      title: 'Giá trị cốt lõi',
      description: 'Uy tín hàng đầu - Chất lượng sản phẩm - Khách hàng & đối tác',
    },
];

export interface IQuote {
    id: number,
    group: string,
    type: string,
    value: number,
    image: string,
    description_vi: string,
    description_en: string,
    order: number
}