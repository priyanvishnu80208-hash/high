// 1. forEach()
let num = [1,2,3,4,5,6,7,8,9,10];
num.forEach((cur, ind, tot) => console.log(cur));

// 2. map()
let num1 = [1,2,3,4,5,6,7,8,9,10];
num1.map((cur, ind, tot) => {
    console.log(cur);
    console.log(ind);
});

// 3. filter()
let num2 = [
    {name:"loki",age:40},
    {name:"mobius",age:30},
    {name:"vision",age:35},
    {name:"steve",age:25},
    {name:"banner",age:10},
    {name:"kang",age:20}
];
let fill = num2.filter(c => c.age > 20);
console.log(fill);

// 4. Employee filter()
let emp = [
    {name:"loki",salary:200000},
    {name:"mobius",salary:100000},
    {name:"vision",salary:150000},
    {name:"steve",salary:250000},
    {name:"banner",salary:300000},
    {name:"kang",salary:400000}
];
let emp2 = emp.filter(c => c.salary <= 300000);
console.log(emp2);

// 5. find()
let emp3 = emp.find(c => c.salary > 200000);
console.log(emp3);

// 6. reduce()
let num4 = [1,2,3,4,5,6,7,8,9,10];
let res = num4.reduce((total, cur) => total + cur, 0);
console.log(res);

// 7. some()
let num5 = [1,2,3,4];
let someval = num5.some(c => c % 2 === 0);
console.log(someval);

// 8. every()
let everyval = num5.every(c => c > 0);
console.log(everyval);

// 9. sort() ascending
let ar2 = [4,2,1,5,3,6];
console.log([...ar2].sort((a,b) => a-b));

// 10. sort() descending
console.log([...ar2].sort((a,b) => b-a));

// 11. String methods
let j = "javascript";
console.log(j.charAt(4));
console.log(j.charCodeAt(2));

let js = "spider-man";
console.log(js.trim()[2]);
console.log(js.toUpperCase());
console.log(js.toLowerCase());
console.log(js.startsWith("spider"));
console.log(js.endsWith("man"));

// 12. replace()
let ml = "iron-man";
console.log(ml.replace("man","doom"));

// 13. split()
let dc = "loki the god of multiverse";
console.log(dc.split("of"));

// 14. toString() and join()
let num6 = [1,2,3,4];
console.log(num6.toString());
console.log(num6.join());
console.log(num6.join("-"));

// 15. slice()
let js1 = "lokiverse";
console.log(js1.slice(1,6));

// 16. Date methods
let newdate = new Date();
console.log(newdate);
console.log(newdate.getDate());
console.log(newdate.getHours());
console.log(newdate.getMinutes());
console.log(newdate.getSeconds());
console.log(newdate.getMonth());

// 17. Date setter methods
let newdate1 = new Date();
newdate1.setDate(30);
newdate1.setFullYear(2003);
newdate1.setMonth(0);
console.log(newdate1);

// 18. setTimeout()
setTimeout(() => {
    console.log("asgard");
}, 2000);

// 19. setInterval() and clearInterval()
let inter = setInterval(() => {
    console.log("loki");
}, 2000);

setTimeout(() => {
    clearInterval(inter);
}, 8000);

// 20. Execution order
function one() {
    console.log("loki");
}
function two() {
    console.log("mobi");
}
function three() {
    console.log("asgard");
}
one();
setTimeout(two, 0);
three();

// 21. Promise resolve
let log = new Promise((res, rej) => {
    res("login success");
});
log.then(result => console.log(result));

// 22. Promise reject
let log1 = new Promise((res, rej) => {
    rej("invalid password");
});
log1.catch(error => console.warn(error));

// 23. then(), catch(), finally()
let log2 = new Promise((res, rej) => {
    let success = true;
    if (success) {
        res("marvel");
    } else {
        rej("dc");
    }
});

log2.then(result => console.log(result))
    .catch(error => console.warn(error))
    .finally(() => console.log("Process completed"));

// 24. Fetch product titles and prices
let api = "https://fakestoreapi.com/products";

fetch(api)
    .then(res => res.json())
    .then(data => {
        data.forEach(p => console.log(p.title));
        data.forEach(p => console.log(p.price));
    })
    .catch(error => console.warn(error))
    .finally(() => console.log("API call completed"));

// 25. Fetch all products
let api1 = "https://fakestoreapi.com/products";

fetch(api1)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.warn(error))
    .finally(() => console.log("API call completed"));

// 26. Task 35: Fetch with finally()
fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.warn(error))
    .finally(() => console.log("API call completed"));

// 27. Task 36: Employee salary report
let employees = [
    {name:"Loki",salary:250000},
    {name:"Thor",salary:400000},
    {name:"Vision",salary:200000},
    {name:"Tony",salary:500000}
];

employees.filter(emp => emp.salary < 300000)
    .forEach(emp => console.log(emp.name, emp.salary));

// 28. Task 37: Product price calculator
fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        let products = data.map(p => ({
            title: p.title,
            price: p.price
        }));
        console.log(products);
    })
    .catch(error => console.warn(error))
    .finally(() => console.log("API call completed"));

// 29. Task 38: Product search
fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        let result = data.filter(
            p => p.category === "jewelery"
        );
        console.log(result);
    })
    .catch(error => console.warn(error))
    .finally(() => console.log("API call completed"));

// 30. Task 39: Number analysis
let numbers = [10,20,30,40,50];

console.log(numbers.map(n => n * 2));
console.log(numbers.filter(n => n > 25));
console.log(numbers.reduce((total,n) => total+n,0));
console.log(numbers.some(n => n > 40));
console.log(numbers.every(n => n > 5));

// 31. Task 40: Product listing
fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        data.forEach(p => {
            console.log("Title:", p.title);
            console.log("Price:", p.price);
            console.log("Category:", p.category);
        });
    })
    .catch(error => console.warn("Error:", error))
    .finally(() => console.log("API call completed"));