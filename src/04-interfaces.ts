// интерфейс описывает поля объекта
interface Product {
  readonly id: number;
  title: string;
  price: number;
  description?: string; // необязательное поле
}

// объект, соответствующий интерфейсу
const keyboard: Product = {
  id: 123,
  title: "Клавиатура",
  price: 3000,
};

// интерфейс как тип параметра функции
function printProduct(product: Product): void {
  console.log(`${product.title}: ${product.price} ₽`);
}

printProduct(keyboard);
