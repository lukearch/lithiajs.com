export default (number: number) => {
  const units = ['', 'K', 'M', 'B', 'T'];
  let unitIndex = 0;
  let minifiedNumber = number;

  while (minifiedNumber >= 1000) {
    minifiedNumber /= 1000;
    unitIndex++;
  }

  return `${Math.floor(minifiedNumber)}${units[unitIndex]}`;
};
