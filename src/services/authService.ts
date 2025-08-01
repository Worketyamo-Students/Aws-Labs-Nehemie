import API from "../utils/api";

export const registeUser  = async (email: string, password: string, name?: string)  => {
    return await API.post("/auth/register", { email, password, name });   
}