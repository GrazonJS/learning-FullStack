Week 1

---

- Scripting vs Compiling
- Strictly typed vs loosely typed languages
- what is thread and how programming languages work with thread
- single threaded nature of JS
- what is callback function and how callbacks work
- what is context switching in threads

---

- **String functions**

```jsx
-> str.length
-> str.indexOf(target)
-> str.lastIndexOf(target)
-> str.slice(startValue, endValue)
-> str.substring(startValue, endValue)
-> str.replace(target, replacevalue)
-> str.split(splitValue)
-> str.trim()
-> str.toUpperCase()
-> str.toLowerCase()
```

- **Number functions**

```jsx
-> val.parseInt(34) => 34
-> val.parseInt("34") => 34
-> val.parseInt(3.12) => 34
-> val.parseInt(34px) => 34
-> val.parseFloat(3.12) => 3.14
-> // parseFloat is same as parseInt, only the decimal values stays the same and then others will turn to int

```

- **Array functions**

```jsx
-> arr.push(value)
-> arr.pop()
-> arr.shift()
-> arr.unshift(value)
-> arr.concat(arr2)
//forEach method
```

- **Class**

```jsx
// what is class
// what is constructor
// objects and object creation
// static method in a class
// object call
```

- **Date**

```jsx
// Date is a predefined class by javascript
const currentDate = new Date();
// there are many methods found in the date class such as
-> currentdate.getDate()
-> currentdate.getDay()
-> currentdate.getMonth()
```

- **JSON**

```jsx
const user = { name: "grace", age: 21, place: "tamilNadu" };

const stringUser = JSON.stringify(user);
const jsonUser = JSON.parse(stringUser);
```

- **Math**

```jsx
let rounded = Math.round(value);
let ceiling = Math.ceil(value);
let flooring = Math.floor(value);
let randomValue = Math.random();
let maxValue = Math.max(5, 10, 15);
let minValue = Math.min(5, 10, 15);
let powerOfTwo = Math.pow(value, 2);
let squareRoot = Math.sqrt(value);
```

- **Objects**

```jsx
let keys = Object.keys(obj);
let values = Object.values(obj);
let entries = Object.entries(obj);
let hasProp = obj.hasOwnProperty("property");
let newObj = Object.assign(obj, { newProperty: "newValue" });
```

---

- Synchronous Functions
- Async Functions
- SetTimeout , fs.readFile and Fetch and some built-in JS Async functions (they use web APIs)
- Callbacks makes sense only in async functions
