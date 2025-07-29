//-----function in TS without return statement

const nameFunction = (firstName: string, lastName: string): void => {
  console.log("hello" + firstName + " " + lastName);
};
nameFunction("graceshon", "JS");

//-----function in TS with return value

const sum = (a: number, b: number): number => {
  return a + b;
};
const value: number = sum(23, 57);

//-----function returning a boolean value

const isAdult = (age: number): boolean => {
  return age > 18 ? true : false;
};

//-----function getting a callback function as the function parameter

const runAfterASec = (callback: () => void) => {
  setTimeout(callback, 1000);
};

runAfterASec(() => console.log("hi there"));

//-----another way of declaring a function in TS

const newFunction: (msg: string) => void = (msg) => {
  console.log("another way of writing typescript functions " + msg);
};
newFunction("this is the new function");

//-----using interface in TS

interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

const users: User = {
  firstName: "grace",
  lastName: "JS",
  email: "abc@mail.com",
  age: 21,
};

const isLegal = (users: User): boolean => {
  return users.age > 18 ? true : false;
};
console.log(isLegal(users));

//-----function getting array input
const positiveArray: number[] = [1, 3, 5, 63, 54, 3];

const maxValue = (arr: number[]): number => {
  let max = arr[0];
  for (const value of arr) {
    if (value > max) {
      max = value;
    }
  }
  return max;
};
maxValue(positiveArray);
