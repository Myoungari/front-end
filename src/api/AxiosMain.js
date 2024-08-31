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
    throw error;
  }
};

// export const AxiosCategoryNDetailGet = async () => {
//   try {
//     const response = await Axios.get(`/api/v1/schedule?userId=${id}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response;
//   } catch (error) {
//     console.log(error.response.data.detail);
//     throw error;
//   }
// };
