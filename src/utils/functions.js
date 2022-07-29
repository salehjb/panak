export function priceFormatter(price) {
  const formatter = new Intl.NumberFormat("fa-IR", {
    currency: "IRR"
  })
  return formatter.format(price); 
}

export function toPersianNumber(number) {
  const formatter = new Intl.NumberFormat("fa-IR");
  return formatter.format(number);
}

export function timeFormatter(hour, minute) {
  const h = toPersianNumber(hour);
  const m = toPersianNumber(minute);
  return `${h}:${m}:${toPersianNumber(0)}${toPersianNumber(0)}`
}