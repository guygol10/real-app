import axios from "axios";
import { toast } from "react-toastify";
import userService from "./userService";

axios.defaults.headers.common["x-auth-token"] = userService.getJwt();

axios.interceptors.response.use(null, error => {
  const exeptedError = error.response && error.response.status >= 403;
  if (exeptedError) toast.error("An Unexepected error occurred.");
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete
};
