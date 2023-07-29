// eslint-disable-next-line import/no-anonymous-default-export
export default function (number: number) {
  if (number > 999 && number < 10000) {
    return number.toLocaleString();
  }
  if (number >= 10000 && number < 1000000) {
    return (number/1000).toFixed(1) + 'K';
  } 
  if (number >= 1000000) {
    return (number/1000000).toFixed(1) + 'M';
  }
  return number.toString();
}