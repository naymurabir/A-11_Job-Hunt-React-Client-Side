import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Pages/Providers/AuthProviders";

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
});

const useInterceptors = () => {

    const { logOut } = useContext(AuthContext) || {}

    useEffect(() => {
        instance.interceptors.request.use(function (config) {
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        instance.interceptors.response.use(function (response) {
            return response;
        }, async function (error) {
            if (error.response.status === 401 || error.response.status === 403) {
                await logOut()
                console.log('log out')
            }
            return Promise.reject(error);
        });
    }, [logOut])

    return instance;
};

export default useInterceptors;