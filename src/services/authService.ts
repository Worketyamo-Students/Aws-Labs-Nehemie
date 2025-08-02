import API from "../utils/api";

export const registeUser  = async (data: {
    email: string, 
    password: string, 
    name?: string
}) => {
    return await API.post("auth/register", data); 
}

export const verifyotp = async (data: {
    email: string, 
    otp: string
}) => {
    return await API.post("auth/verify-otp", data);
}