// типизация параметров и результата функции
function total(price: number, quantity: number): number {
  return price * quantity;
}

total(500, 2);

// параметр со значением по умолчанию
function withDelivery(amount: number, delivery: number = 300): number {
  return amount + delivery;
}
