// Promise<number>: при успешном завершении результат — число
async function loadPrice(): Promise<number> {
  return 3000;
}

const pricePromise = loadPrice();

// ошибка
// pricePromise.toFixed(2);

const resolvedPrice = await pricePromise;
resolvedPrice.toFixed(2);
