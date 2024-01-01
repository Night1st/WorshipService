import { axiosInstanceNoAuth } from 'src/https.config';
import { IBaseResponse } from 'src/schemas/baseResponse.type';
import { useMutation, useQuery, useQueryClient, UseQueryOptions } from '@tanstack/react-query';
import { ICategory, IFilterCategory, IProductsByCategory } from '@/schemas/category.type';

const QUERY_KEY = 'CategoryGroupQuery';
export const useGetAllCategoryByProductGroup = (id: number, options?: Partial<UseQueryOptions>) => {
  return useQuery({
    queryKey: [QUERY_KEY, 'get-all'],
    queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<ICategory[]>>(`/category/get-by-product-group/${id}`),
    select(data) {
      return data.data;
    },
    enabled: options?.enabled,
  });
};

export const useFilterProductByCategory = (onSuccessHandle?: (data: IProductsByCategory[]) => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: IFilterCategory) =>
      axiosInstanceNoAuth.post<IBaseResponse<IProductsByCategory[]>>('/product/filter-by-category?limit=5', body),
    onSuccess: (data: IBaseResponse<IProductsByCategory[]>) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
      if (onSuccessHandle) onSuccessHandle(data.data);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });
};
