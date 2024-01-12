import { axiosInstanceNoAuth } from "src/https.config"
import { IBaseResponse } from "src/schemas/baseResponse.type"
import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { ISystemInfo } from '@/schemas/systemInfo.type';
const QUERY_KEY = "AboutUs"

export const useGetAboutUs = (options?: Partial<UseQueryOptions>) => {
  return useQuery ({
    queryKey: [QUERY_KEY, "get-all"],
    queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<ISystemInfo[]>>(`/system-information/about-us`),
    select(data) {
      return data.data
    },
    enabled: options?.enabled
  })
}
