// обобщённая функция: T связывает тип элемента массива и результата
function first<T>(items: T[]): T | undefined {
  return items[0];
}

// T определяется по переданному массиву
const price = first([500, 1000, 1500]); // number | undefined
const title = first(["Клавиатура", "Мышь"]); // string | undefined

interface obj<T> {
  id: string;
  item: T;
}
