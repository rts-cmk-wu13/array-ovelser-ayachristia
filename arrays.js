document.addEventListener("DOMContentLoaded", function () {
  let catsArray = [
    "Ollie",
    "Sophie",
    "Salem",
    "Tiger",
    "Binx",
    "Pumpkin",
    "Penny",
    "Lenny",
  ];
  let dogsArray = [
    "Barney",
    "Molly",
    "Baxter",
    "Polly",
    "Buddy",
    "Suki",
    "Watson",
  ];
  let fruitsArray = [
    "Banana",
    "Orange",
    "Pineapple",
    "Mango",
    "Plum",
    "Apricot",
  ];
  let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21];

  // --- Løs opgaverne herunder ---

  //   -----opgave 1

  let newNumbers = numbersArray.filter((number) => number > 20);
  console.log("opgave 1:", newNumbers);

  //   -----opgave 2

  catsArray.push("Sniffles");
  console.log("Opgave 2:", catsArray);

  //   -----opgave 3a

  //   let includesName = dogsArray.some(
  //     (dog) => dog.toLowerCase() === "watson".toLowerCase()
  //   )
  //     ? true
  //     : false;

  let dogsName = dogsArray.includes("Trixie");
  console.log("Opgave 3a:", dogsName);

  //   -----opgave 3b

  let dogsName1 = dogsArray.includes("Baxter");
  console.log("Opgave 3b:", dogsName1);

  //   -----opgave 4a
  let catsName = catsArray.includes("Bagheera")
    ? console.log("Opgave 4:", catsName)
    : console.log("undefined");

  //   -----opgave 4b
  console.log(catsArray);
  let foundCat = catsArray.find((cat) => cat === "Salem");
  console.log(foundCat ? foundCat : "undefined");

  //   let dogsName = dogsArray;
}); // ends DOMContentLoaded
