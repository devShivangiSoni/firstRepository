// Do not alter the starter code

const orders = [
  {
    orderNumber: 1,
    items: [
      { name: "Cappuccino", price: 3.5 },
      { name: "Chocolate Croissant", price: 2.5 },
    ],
  },
  {
    orderNumber: 2,
    items: [
      { name: "Latte", price: 4.0 },
      { name: "Blueberry Muffin", price: 2.75 },
    ],
    discountCode: "COFFEELOVER",
  },
];

function totalOrderValue(orders, applyDiscount) {
  let sum = 0;
  orders.map((order) => {
    console.log(order);

    let singleOrderTotal = order.items.reduce((acc, item) => {
      console.log("acc: ", acc);
      console.log("item: ", item);
      console.log(acc.price + item.price);
      return acc.price + item.price;
    });
    console.log(singleOrderTotal);
    if (order.discountCode) {
      let result = applyDiscount(order.discountCode, singleOrderTotal);
      console.log("result: ", result);
      sum += result;
    } else {
      sum += singleOrderTotal;
    }
  });
  return sum.toFixed(2);
}

const applyDiscount = (discountCode, total) => {
  if (discountCode === "COFFEELOVER") {
    return total - total * 0.1;
  } else if (discountCode === "TEALOVER") {
    return total - total * 0.2;
  }
};
let funreturn = totalOrderValue(orders, applyDiscount);
console.log("funreturn: ", funreturn);
