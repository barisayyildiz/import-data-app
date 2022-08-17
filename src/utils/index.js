import stringSimilarity from "string-similarity";

export const sizeFormatter = (size) => {
  // byte cinsinden dosya boyutu alır ve formatlar
  const units = ["B", "KB", "MB", "GB"];
  let index = 0;
  while (index < units.length && size >= 1024) {
    size /= 1024;
    index++;
  }
  return `${parseFloat(size.toFixed(2))} ${units[index]}`;
};

export const formatDate = (day) =>
  new Date(day).toLocaleString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const getCookie = (name) => {
  return (
    decodeURIComponent(
      document.cookie.replace(
        // eslint-disable-next-line no-useless-escape
        new RegExp(
          `(?:(?:^|.*;)\\s*${encodeURIComponent(name).replace(
            /[\-\.\+\*]/g,
            "\\$&"
          )}\\s*\\=\\s*([^;]*).*$)|^.*$`
        ),
        "$1"
      )
    ) || null
  );
};

export const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ""}${expires}; path=/`;
};

export const returnBestMatch = (main, target) => {
  const { bestMatch } = stringSimilarity.findBestMatch(main, target);
  if (bestMatch.rating >= 0.5) {
    return bestMatch.target;
  }
  return null;
};

export const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};
