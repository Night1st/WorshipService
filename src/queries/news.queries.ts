import { axiosInstanceNoAuth } from "src/https.config"
import { IBaseResponse} from "src/schemas/baseResponse.type"
import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { INews } from "@/schemas/news.type"

const QUERY_KEY = "News"

export const useGetLatestNews = (options?: Partial<UseQueryOptions>) => {
    return useQuery ({
        queryKey: [QUERY_KEY, "get-all"],
        queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<INews[]>>('/news/list-latest-news'),
        select(data) {
            return data.data
        },
        enabled: options?.enabled
    })
}