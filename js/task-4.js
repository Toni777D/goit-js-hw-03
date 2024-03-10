function getShippingCost(country) {
  const priceChile = "250 credits";
  const priceChina = "100 credits";
  const priceAustralia = "170 credits";
  const priceJamaica = "120 credits";

  switch (country) {
    case "China":
      return `Shipping to ${country} will cost ${priceChina}`;
    case "Chile":
      return `Shipping to ${country} will cost ${priceChile}`;
    case "Australia":
      return `Shipping to ${country} will cost ${priceAustralia}`;
    case "Jamaica":
      return `Shipping to ${country} will cost ${priceJamaica}`;

    default:
      return "Sorry, there is no delivery to your country";
  }
}

getShippingCost("Australia");
getShippingCost("Germany");
getShippingCost("China");
getShippingCost("Chile");
getShippingCost("Jamaica");
getShippingCost("Sweden");

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
