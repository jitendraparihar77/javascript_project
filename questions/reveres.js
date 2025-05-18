let str = "hello world";
let reveres = (str) => {
  return str.split("").reverse().join("");
};

console.log(reveres(str));