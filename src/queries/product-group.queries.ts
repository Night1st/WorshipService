import { axiosInstanceNoAuth } from "src/https.config"
import { IBaseResponse} from "src/schemas/baseResponse.type"
import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { IProductGroup } from "@/schemas/product-group.type"

const QUERY_KEY = "ProductGroupQuery"
export const useGetAllProductGroup = (options?: Partial<UseQueryOptions>) => {
    return useQuery({
        queryKey: [QUERY_KEY, 'get-all'],
        queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<IProductGroup[]>>('/product-group/get-all'),
        select(data) {
            return data.data
        },
        enabled: options?.enabled
    })
}