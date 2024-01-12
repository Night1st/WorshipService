import { axiosInstanceNoAuth } from "src/https.config"
import { IBaseResponse } from "src/schemas/baseResponse.type"
import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import {IHistory} from "@/schemas/history.type";
const QUERY_KEY = "History"

export const useGetHistory = (options?: Partial<UseQueryOptions>) => {
    return useQuery ({
        queryKey: [QUERY_KEY, "get-all"],
        queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<IHistory[]>>(`/system-information/history`),
        select(data) {
            return data.data
        },
        enabled: options?.enabled
    })
}