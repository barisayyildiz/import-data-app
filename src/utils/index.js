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
