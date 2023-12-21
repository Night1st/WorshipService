export interface IProduct {
    id: number,
    productName: string,
    image: any,
    freeShip: number,
    origin_price: number,
    current_price: number,
    sale_percent: number
}

export interface IProductDetail {
    product: {
        id: number,
        productName: string,
        image: any,
        description: string,
        detail: string,
        freeShip: number,
    }
    sellInformation: ISellInformation[]
}

export interface ISellInformation {
    id: number,
    type: string,
    origin_price: number,
    current_price: number,
    sale_percent: number,
    quantity: number
}