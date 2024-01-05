import { axiosInstanceNoAuth } from "src/https.config"
import { IBaseResponse } from "src/schemas/baseResponse.type"
import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { IEvent } from "@/schemas/event.type"

const QUERY_KEY = "Event"

export const useGetComingSoonEvent = (limit:number, options?: Partial<UseQueryOptions>) => {
    return useQuery ({
        queryKey: [QUERY_KEY, "get-all"],
        queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<IEvent[]>>(`/events/coming-soon?limit=${limit}`),
        select(data) {
            return data.data
        },
        enabled: options?.enabled
    })
}