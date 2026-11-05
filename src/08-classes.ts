// implements: проверка соответствия интерфейсу
interface PricedItem {
  getPrice(): number;
}

abstract class ShopItem implements PricedItem {
  readonly id: number = 1;
  public title: string = "Товар";
  private price: number = 100;
  protected currency: string = "₽";

  getPrice(): number {
    return this.price;
  }

  // метод без реализации
  abstract getLabel(): string;
}

class SaleItem extends ShopItem {
  getLabel(): string {
    return this.title + this.currency; // protected доступен наследнику
  }

  // override: переопределение метода родителя
  override getPrice(): number {
    return 90;
  }
}
