const CURRENCY = "AR";

export const money = (amount = 0) =>
  `${toMajors(amount).toFixed(2).toLocaleString()} ${CURRENCY}`.replace(
    ".",
    ","
  );

export const toMinors = (amount = 0): number =>
  isNaN(+amount * 100) ? 0 : +amount * 100;

export const toMajors = (amount = 0): number =>
  isNaN(+amount / 100) ? 0 : +amount / 100;
