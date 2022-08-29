export function priceFormatter(price) {
  const formatter = new Intl.NumberFormat("fa-IR", {
    currency: "IRR",
  });
  return formatter.format(price);
}

export function timeFormatter(h, m, s) {
  const time = `${s < 10 ? `0${s}` : s} : ${m < 10 ? `0${m}` : m} : ${
    h < 10 ? `0${h}` : h
  }`;
  return time;
}

export function getFromLocalStorage(key) {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
}

export function setToLocalStorage(key, value) {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
}

export function handleSnack(variant, enqueueSnackbar, text) {
  enqueueSnackbar(text, {
    variant,
    autoHideDuration: 3000,
    anchorOrigin: {
      vertical: "top",
      horizontal: "center",
    },
  });
}