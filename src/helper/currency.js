export const currencyFormatter = (numb) => {
  var formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  numb = numb * 10 ** 6;
  return formatter.format(numb);
};
