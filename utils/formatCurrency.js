export function formatCurrency(price, locale = "en-US", currency = "USD") {
  return price?.toLocaleString(locale, {
    style: "currency",
    currency,
  });
}
