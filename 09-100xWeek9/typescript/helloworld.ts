const nameFunction = (firstName: string, lastName: string): void => {
  console.log("hello" + firstName + " " + lastName);
};
nameFunction("graceshon", "JS");

//-----

const sum = (a: number, b: number): number => {
  return a + b;
};
const value: number = sum(23, 57);

//-----

const isAdult = (age: number): boolean => {
  return age > 18 ? true : false;
};

//-----

const runAfterASec = (callback: () => void) => {
  setTimeout(callback, 1000);
};

runAfterASec(() => console.log("hi there"));
