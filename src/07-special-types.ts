// void
function showMessage(message: string): void {
  console.log(message);
}

// any
let uncheckedValue: any = "Клавиатура";
console.log(uncheckedValue.toUpperCase());
uncheckedValue = 3000;

// uncheckedValue.toUpperCase();

// unknown
let input: unknown = "Клавиатура";

// input.toUpperCase();

// после проверки доступен метод строки
if (typeof input === "string") {
  console.log(input.toUpperCase());
}

input = 3000;
console.log("Новое значение:", input);
