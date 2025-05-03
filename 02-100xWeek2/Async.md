## Week 2

**Callback Function**

- Callback function are the functions that are passed into another function as an argument
- They don’t call the function in the argument instead they pass the function
- Here is an example

```jsx
// A function that takes a callback
function greetUser(name, callback) {
  // Some simple processing
  const greeting = `Hello, ${name}!`;

  // Execute the callback function with the result
  callback(greeting);
}

// Define a callback function
function displayGreeting(message) {
  console.log("The greeting is:", message);
}

// Call the function and pass the callback
console.log("Starting the greeting process...");
greetUser("Alex", displayGreeting);
console.log("The greeting has been processed.");
```

---

**Promises**

- Promises is a concept in javascript that is used to write async functions
- Under the hood, promises uses callback functions
- Using promises is a cleaner and more readable way of writing code. (fancy way)
- When we have multiple callbacks, It creates a problem called the callback hell, which makes the code hard to read, that is why promises are created

```jsx
// Using a promise instead of a callback
function greetUser(name) {
  // Return a promise that resolves with the greeting
  return new Promise((resolve, reject) => {
    // Some simple processing
    const greeting = `Hello, ${name}!`;

    // Resolve the promise with the result
    resolve(greeting);
  });
}

// Define a separate function to handle the greeting
function displayGreeting(greeting) {
  console.log("The greeting is:", greeting);
}

// Using the promise with the separate function
console.log("Starting the greeting process...");

greetUser("Alex")
  .then(displayGreeting)
  .catch((error) => {
    console.log("Something went wrong:", error);
  });

console.log("The greeting is being processed.");
```

- Unlike callbacks the working of promises differ
- Here, instead of having a callback, a promise Object is returned
- This promise holds three state such as pending, resolve, reject
- Basically a promise means that a promise is made that the value will be returned soon
- When the function reaches the resolve() state It moves to the .then()

---

**Async await**

- The async await gives more definition to asynchronous methodology
- The async await uses promises and callback functions under the hood
- It is more readable and easier to understand than promises
- The actual change is made on the caller side of the code

```jsx
function greetUser(name) {
  // We still return a promise since async functions always return promises
  return new Promise((resolve, reject) => {
    // Some simple processing
    const greeting = `Hello, ${name}!`;

    // Resolve the promise with the result
    resolve(greeting);
  });
}

// Define a separate function to handle the greeting
function displayGreeting(greeting) {
  console.log("The greeting is:", greeting);
}

// Create an async function to use await
async function performGreeting(name) {
  try {
    // await the promise to resolve
    const greeting = await greetUser(name);

    // Call the display function with the result
    displayGreeting(greeting);
  } catch (error) {
    console.log("Something went wrong:", error);
  }
}

// Execute the async function
console.log("Starting the greeting process...");
performGreeting("Alex");
console.log("The greeting is being processed.");
```
