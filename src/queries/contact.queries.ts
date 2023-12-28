import { axiosInstanceNoAuth } from "src/https.config"
import { IBaseResponse } from "src/schemas/baseResponse.type"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { IConnectForm } from "@/schemas/contact.type"

const QUERY_KEY = "Contact"

export const useCreateConnect = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (body: IConnectForm) => axiosInstanceNoAuth.post<IBaseResponse<IConnectForm>>('/contact/create', body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
        },
        onError: (err: any) => {
            console.log(err)
        }
    })
}