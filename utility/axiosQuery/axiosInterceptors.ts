import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import axios from "axios";
import { store } from "../../store";
import { Auth, setCredential } from "../../store/auth";


const { getItem } = useAsyncStorage("@aladdin_user");

export const initInterceptors = () => {

    axios.interceptors.request.use(
        async (config) => {
            const { getItem } = useAsyncStorage("@user");
            const result = await getItem();
            const token = result ? (JSON.parse(result) as Auth).access_token : null;

            if (token) config.headers.Authorization = `Bearer ${token}`;

            config.headers = { ...config.headers };
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

}