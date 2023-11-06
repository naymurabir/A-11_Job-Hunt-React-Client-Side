

// const useMyJobs = () => {

import { useQuery } from "@tanstack/react-query"
import useInterceptors from "./useInterceptors"
import { useContext } from "react"
import { AuthContext } from "../Pages/Providers/AuthProviders"


const useMyJobs = () => {
    const axiosInstance = useInterceptors()

    const { user } = useContext(AuthContext)

    const { data: jobs, isPending } = useQuery({
        queryKey: ['jobs_id'],
        queryFn: async () => {
            const { data } = await axiosInstance.get(`/myJobs?email=${user?.email}`)
            return data
        }
    })


    return { jobs, isPending }
}

export default useMyJobs;