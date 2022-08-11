import axios from "axios";

export const getEnabledForms = () => {
  return axios.get(
    `https://api.jotform.com/user/forms?apiKey=${process.env.REACT_APP_API_KEY}&filter=%7B%22status%22%3A%22ENABLED%22%7D`
  );
};
