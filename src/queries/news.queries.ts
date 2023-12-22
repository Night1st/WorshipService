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

export const useGetNewsBySlug = (newsSlug: string, options?: Partial<UseQueryOptions>) => {
    return useQuery ({
        queryKey: [QUERY_KEY, "get-by-slug"],
        queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<INews>>("/news/get-by-slug?slug=" + newsSlug),
        select(data) {
            return data.data
        },
        enabled: options?.enabled
    })
}