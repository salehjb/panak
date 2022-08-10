export function priceFormatter(price) {
  const formatter = new Intl.NumberFormat("fa-IR", {
    currency: "IRR",
  });
  return formatter.format(price);
}

export function timeFormatter(h, m, s) {
  const time = `${s < 10 ? `0${s}` : s} : ${m < 10 ? `0${m}` : m} : ${h < 10 ? `0${h}` : h}`;
  return time;
}
