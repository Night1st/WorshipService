import { axiosInstanceNoAuth } from "src/https.config"
import { IBaseResponse, IBaseResponseWithCount } from "src/schemas/baseResponse.type"
import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { IProduct } from "@/schemas/product.type"

const QUERY_KEY = "ProductQuery"
export const useGetProductHighlight = (options?: Partial<UseQueryOptions>) => {
    return useQuery({
        queryKey: [QUERY_KEY, 'get-all'],
        queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<IProduct>>('/product/high-light-product?limit=5'),
        select(data) {
            return data.data
        },
        enabled: options?.enabled
    })
}