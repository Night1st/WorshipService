export interface IContact {
    id: number,
    group: string,
    type: string,
    value: number,
    image: string,
    description_vi: string,
    description_en: string,
    order: number
}

export interface IConnectForm {
    name: string,
    phone: string,
    email: string,
    products: string[],
    note: string
}