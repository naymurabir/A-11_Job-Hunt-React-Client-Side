import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000',
});

const useInterceptors = () => {
    return instance;
};

export default useInterceptors;