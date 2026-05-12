var day = 16;
var month = 5;
var year = 2026;
var weather = "sunny";

console.log("Добрий день! Сьогодні " + day + "." + month + "." + year + " Погода: " + weather);

let x = 50;
let y = 10;

console.log(x + y);

let d = x * y;

console.log(d);

let firstName = "Andrii", lastName = "Koval", age = 18;

d /= y;
x -= d;
age += x;

console.log(firstName + " " + lastName + " " + age);

if (age >= 18)
{
    console.log("студент повнолітній");
}
else
{
    console.log("студент неповнолітній");
}

age = "18";

console.log(age == 18);
console.log(age === 18);

for(let i = 1; i <= 163; i++)
{
    if(i % 2 != 0)
    {
        console.log(i);
    }
}