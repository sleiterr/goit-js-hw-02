//* Task 1 Замовлення дроїдів

// 1. оголосити функцію makeTransaction(quantity, pricePerDroid, customerCredits) яка складає та повертає повідомлення про купівлю ремонтних дроїдів.

// 2. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// - quantity — кількість замовлених дроїдів
// - pricePerDroid — ціна одного дроїда
// - customerCredits — сума коштів на рахунку клієнта
 
//* Оголоси змінну для зберігання загальної суми замовлення (загальна вартість усіх замовлених дроїдів) і задай їй вираз розрахунку цієї суми. (const totalPrice = quantity * pricePerDroid;)

//* Додати перевірку, чи зможе клієнт оплатити замовлення: якщо сума до сплати перевищує ">" кількість кредитів на рахунку клієнта "customerCredits",

//*  - функція має повертати рядок "Insufficient funds!" в іншому випадку
//*  - функція має повертати рядок "You ordered <quantity> droids worth <totalPrice> credits!", де < quantity > це кількість замовлених дроїдів, а < totalPrice > це їх загальна вартість.



function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;
  if (totalPrice <= customerCredits) {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  } else { 
    return "Insufficient funds!";
  }
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"
