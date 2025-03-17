import { useMutation } from "@tanstack/react-query"
import AuthService from "../../api/auth";
import { AxiosResponse } from "axios"

export const useAuth = () => 
    useMutation({
        mutationFn: ({login, password} : {login: string, password: string}) => AuthService.auth({login, password}),
        onSuccess: (result: AxiosResponse) => {
            AuthService.setCookie(result.data.token);
        }
    })