import { axiosInstanceNoAuth } from "src/https.config"
import { IBaseResponse} from "src/schemas/baseResponse.type"
import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { IProduct, IProductDetail } from "@/schemas/product.type"

const QUERY_KEY = "ProductQuery"
export const useGetProductHighlight = (options?: Partial<UseQueryOptions>) => {
    return useQuery({
        queryKey: [QUERY_KEY, 'get-all'],
        queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<IProduct[]>>('/product/high-light-product?limit=5'),
        select(data) {
            return data.data
        },
        enabled: options?.enabled
    })
}

export const useGetProductByGroup = (productGroupId: number, options?: Partial<UseQueryOptions>) => {
    return useQuery({
        queryKey: [QUERY_KEY, 'get-all'],
        queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<IProduct[]>>('/product/get-by-product-group/' + productGroupId + '?limit=20'),
        select(data) {
            return data.data
        },
        enabled: options?.enabled
    })
}

export const useGetRelatedProduct = (productId: number, options?: Partial<UseQueryOptions>) => {
    return useQuery({
        queryKey: [QUERY_KEY, 'get-related'],
        queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<IProduct[]>>('/product/get-related-product/' + productId + '?limit=5'),
        select(data) {
            return data.data
        },
        enabled: options?.enabled
    })
}