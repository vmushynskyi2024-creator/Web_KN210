let travels = [
    { city: "Київ", duration: 2, price: 2000, food: "не включено", guide: "так" },
    { city: "Харків", duration: 1, price: 3000, food: "не включено", guide: "ні" },
    { city: "Одеса", duration: 2, price: 5500, food: "включено", guide: "так" },
    { city: "Дніпро", duration: 1, price: 4500, food: "включено", guide: "ні" },
    { city: "Полтава", duration: 1, price: 2000, food: "не включено", guide: "так" },
    { city: "Львів", duration: 2, price: 6000, food: "включено", guide: "так" }
];

let oneDayNoFood = [];

for (let travel of travels) {
    if (travel.duration === 1 && travel.food === "не включено") {
        oneDayNoFood.push(travel);
    }
}

console.log("1) Одноденні подорожі без харчування:");
console.log(oneDayNoFood);


let cheapTravels = [];

for (let travel of travels) {
    if (travel.price <= 3000) {
        cheapTravels.push(travel);
    }
}

console.log("2) Подорожі не дорожчі за 3000:");
console.log(cheapTravels);