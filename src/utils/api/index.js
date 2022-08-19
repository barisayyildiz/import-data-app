import axios from "axios";

import { getCookie, removeCookie } from "../index";

axios.interceptors.response.use(
  (config) => {
    console.log(config);
    if (config.data.responseCode === 401) {
      removeCookie("apiKey");
      window.location = "/";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getEnabledForms = (offset, limit = 10) => {
  const apiKey = getCookie("apiKey");
  return axios.get(
    `https://api.jotform.com/user/forms?apiKey=${apiKey}&filter=%7B%22status%22%3A%22ENABLED%22%7D&orderby=created_at&offset=${offset}&limit=${limit}`
  );
};

export const getFormInfo = (id) => {
  const apiKey = getCookie("apiKey");
  return axios.get(`https://api.jotform.com/form/${id}?apikey=${apiKey}`);
};

export const uploadFile = (data) => {
  const apiKey = getCookie("apiKey");
  const config = {
    method: "post",
    url: "https://y-esen.jotform.dev/intern-api/import-api/file",
    withCredentials: false,
    headers: {
      apiKey,
    },
    data,
  };
  return axios(config);
};

export const getFormQuestions = (formID) => {
  const apiKey = getCookie("apiKey");
  const config = {
    method: "get",
    url: `https://y-esen.jotform.dev/intern-api/import-api/question?formID=${formID}`,
    withCredentials: false,
    headers: {
      apiKey,
    },
  };
  return axios(config);
};

export const matchFileForm = (data) => {
  const apiKey = getCookie("apiKey");
  const config = {
    method: "post",
    url: "https://y-esen.jotform.dev/intern-api/import-api/save",
    withCredentials: false,
    headers: {
      apiKey,
    },
    data,
  };
  return axios(config);
};
