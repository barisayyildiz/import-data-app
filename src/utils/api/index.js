import axios from "axios";

import { getCookie } from "../index";

export const getEnabledForms = () => {
  const apiKey = getCookie("apiKey");
  return axios.get(
    `https://api.jotform.com/user/forms?apiKey=${apiKey}&filter=%7B%22status%22%3A%22ENABLED%22%7D`
  );
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
      apiKey: apiKey,
    },
    data: data,
  };
  return axios(config);
};
