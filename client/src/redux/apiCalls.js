import { loginFailure, loginStart ,loginSuccess } from "./userSlice";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));                                          //res.data is an object with user's information according to the model schema
    } catch (err) {
        dispatch(loginFailure());
    }
};