function sum(a, b, c) {
    return a + b + c;
}
console.log("Результат функції sum:", sum(10, 20, 30));

function sayHallo(name) {
    console.log("Привіт, " + name + "!");
}
sayHallo("Василь");

function printSomeNumber() {
    console.log(42);
}
printSomeNumber();


let storeProducts = [
    { name: "Samsung J5 2017", price: 5400 },
    { name: "iPhone X", price: 25000 },
    { name: "Xiaomi Mi 4", price: 4999 },
    { name: "Чохол для iPhone X", price: 500 }
];

let orderProducts = [
    { name: "iPhone X", price: 25000 },
    { name: "Чохол для iPhone X", price: 500 }
];

function calculateTotal(productsArray) {
    let totalCost = 0;
    for (let product of productsArray) {
        totalCost = totalCost + product.price;
    }
    return totalCost;
}

let storeTotal = calculateTotal(storeProducts);
console.log("На складі товарів на " + storeTotal + " грн");

let orderTotal = calculateTotal(orderProducts);
console.log("Сума замовлення: " + orderTotal + " грн");

let person = {
    name: "Василь",
    surname: "Мушинський",
    
    sayHello: function() {
        console.log("Привіт, Маріє, я " + this.name);
    },
    
    getFullName: function() {
        return this.name + " " + this.surname;
    }
};

person.sayHello();

console.log("Повне ім'я: " + person.getFullName());