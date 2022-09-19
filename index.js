const word = ["Lodash", "React", "Next", "Strapi", "Axios", "Typescript"];

word.forEach((e) => {
  console.log(e);
});

console.log("-");

word.reverse().forEach((e) => {
  console.log(e);
});

word.sort().forEach((e) => {
  console.log(e);
});

const car = {
  brand: "Ford",
  model: "Mustang",
  year: 1969,
};

const { brand, model, year } = car;
console.log(brand, model, year);

//Create a random whole number between 0 and 555
const random = Math.floor(Math.random() * 555);
console.log("Náhodné číslo je: " + random);
