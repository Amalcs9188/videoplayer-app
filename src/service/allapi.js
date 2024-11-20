import commomaoi from "./commonApi";
import SERVER_URL from "./serverurl";

//save video data

export const addvideo = async (video) => {
  return await commomaoi("POST", `${SERVER_URL}/allvideos`, video);
};

export const fetchvideo = async () => {
  return await commomaoi("GET", `${SERVER_URL}/allvideos`, "");
};

export const deletevideo = async (id) => {
  return await commomaoi("DELETE", `${SERVER_URL}/allvideos/${id}`, {});
};

export const history = async (video, time) => {
  return await commomaoi("POST", `${SERVER_URL}/history`, video, time);
};

export const fetchhistory = async () => {
  return await commomaoi("GET", `${SERVER_URL}/history`, "");
};

export const deletehistory = async (id) => {
  return await commomaoi("DELETE", `${SERVER_URL}/history/${id}`, {});
};

export const Category = async (category) => {
  return await commomaoi("POST", `${SERVER_URL}/catogory`, category);
};

export const fetchCategory = async () => {
  return await commomaoi("GET", `${SERVER_URL}/catogory`, "");
};

export const deleteCategory = async (id) => {
  return await commomaoi("DELETE", `${SERVER_URL}/catogory/${id}`, {});
};
export const getSingleVideo = async (id) => {
  return await commomaoi("GET", `${SERVER_URL}/allvideos/${id}`, "");
};
export const updateCategory = async (id,details) => {
  return await commomaoi("PUT", `${SERVER_URL}/catogory/${id}`,details);
};

// api call to get single category

export const fetchSingleCategory = async (id) => {
  return await commomaoi("GET", `${SERVER_URL}/catogory/${id}`, "");
};
