import axios from "axios";

export const updateUser = async (id, following, followers) => {
  try {
    const response = await axios.put(
      `https://64692db8183682d6143b6b78.mockapi.io/user/${id}`,
      {
        following,
        followers,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
