export interface IProduct {
    id: number,
    productName: string,
    slug: string,
    image: any,
    freeShip: number,
    origin_price: number,
    current_price: number,
    sale_percent: number
}

export interface IProductDetail {
    product: IProductInfo[]
    sellInformation: ISellInformation[]
}

export interface IProductInfo {
    id: number,
    productName: string,
    slug: string,
    image: any,
    image2: any,
    image3: any,
    image4: any,
    image5: any,
    image6: any,
    image7: any,
    sell_policy: string,
    payment_policy: string,
    change_policy: string,
    description: string,
    detail: string,
    tags: string,
}

export interface ISellInformation {
    id: number,
    type: string,
    image: any,
    origin_price: number,
    current_price: number,
    sale_percent: number,
    quantity: number
}

export interface ISocialInformation {
    id: number,
    platform: string,
    link: string,
}