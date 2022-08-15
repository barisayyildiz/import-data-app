import axios from "axios";

import { getCookie } from "../index";

export const getEnabledForms = () => {
  const apiKey = getCookie("apiKey");
  return axios.get(
    `https://api.jotform.com/user/forms?apiKey=${apiKey}&filter=%7B%22status%22%3A%22ENABLED%22%7D`
  );
};

export const uploadFile = (file) => {
  const apiKey = getCookie("apiKey");
  const config = {
    method: "post",
    url: "https://y-esen.jotform.dev/intern-api/import-api/file",
    headers: {
      Cookie: `apiKey=${apiKey};`,
      apiKey: `${apiKey}`,
    },
    data: file,
  };
  return axios(config);
};
