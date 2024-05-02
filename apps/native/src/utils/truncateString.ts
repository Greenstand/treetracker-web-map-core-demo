export default function truncateString(str: string, maxLength: number) {
  if (str.length <= maxLength) {
    return str;
  }
  // const prefixLength = Math.ceil((maxLength - 3) / 2);
  // const suffixLength = Math.floor((maxLength - 3) / 2);
  // const truncatedString =
  //   str.substring(0, prefixLength) + "..." + str.slice(-suffixLength);
  // return truncatedString;
  const truncatedString = str.substring(0, maxLength - 3) + "...";
  return truncatedString;
}
