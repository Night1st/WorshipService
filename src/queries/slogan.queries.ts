import { axiosInstanceNoAuth } from "src/https.config"
import { IBaseResponse } from "src/schemas/baseResponse.type"
import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import {IQuote} from "@/shared/mock/whyUs";
const QUERY_KEY = "Slogan"

export const useGetSlogan = (options?: Partial<UseQueryOptions>) => {
    return useQuery ({
        queryKey: [QUERY_KEY, "get-all"],
        queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<IQuote[]>>(`/system-information/slogan`),
        select(data) {
            return data.data
        },
        enabled: options?.enabled
    })
}