// проверка typeof сужает объединение до конкретного типа
function formatId(id: string | number): string {
  if (typeof id === "string") {
    return id.toUpperCase();
  }

  return id.toFixed(0);
}

// проверка undefined перед использованием значения
function printDescription(description: string | undefined): void {
  if (description === undefined) {
    console.log("Описания нет");
    return;
  }

  console.log(description.toUpperCase());
}
