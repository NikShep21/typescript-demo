// реализация — в price.js, типы — в соседнем price.d.ts
import { addDelivery } from "../examples/declarations/price.js";

const finalPrice = addDelivery(3000, 300); // number

// ошибки: проверка использует описание из .d.ts
// addDelivery("3000", 300);
// finalPrice.toUpperCase();
