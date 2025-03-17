import { useQuery } from "@tanstack/react-query"
import { RequestService } from "../../api/requests"

const useRequest = () => {
    return useQuery({
        queryKey: ['request'],
        queryFn: () => {
            return RequestService.getRequests()
        }, 
        select: (data) => data.data
    })
}

export default useRequest
