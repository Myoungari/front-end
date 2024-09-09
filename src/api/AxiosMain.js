import Axios from "./Axios";

export const AxiosMainGet = async () => {
  try {
    const response = await Axios.get("/api/clubs", {
      params: {
        page: 0,
        size: 30,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error.response?.data?.detail || error.message);
    console.error("전체 안나왕");
    throw error;
  }
};

export const AxiosCategoryGet = async (categoryName) => {
  try {
    const response = await Axios.get(`/api/${categoryName}`);
    return response.data.data;
  } catch (error) {
    console.log(error.response.data.detail);
    console.log("카테고리 안나왕");
    throw error;
  }
};

export const AxiosCategoryNDetailGet = async (categoryName, id) => {
  try {
    const response = await Axios.get(`/api/${categoryName}/${id}`);
    return response.data.data;
  } catch (error) {
    console.log(error.response.data.detail);
    console.log("디테일 안나왕");

    throw error;
  }
};
