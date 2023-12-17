import { apiAxios, apiRoutes } from "./apiSetting";

type loginAPIType = {
  email: string;
  password: string;
};

export const loginAPI = async (data: loginAPIType) => {
  try {
    const response = await apiAxios.post(apiRoutes.login, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
