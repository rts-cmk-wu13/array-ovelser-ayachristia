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

  //   -----opgave 5
  console.log(numbersArray);
  let trippledArray = [];
  numbersArray.forEach((num) => trippledArray.push(num * 3));
  console.log(trippledArray);

  //   -----opgave 6
  console.log(dogsArray);
  let stringDogs = dogsArray.join();
  console.log(stringDogs);

  //   -----opgave 7a
  let indexOfMango = fruitsArray.indexOf("Mango");
  console.log(indexOfMango);

  //   -----opgave 7b
  let indexOfBlueBerry = fruitsArray.indexOf("Blåbær");
  console.log(indexOfBlueBerry);

  //   -----opgave 8
  console.log(dogsArray);
  let newDogsList = dogsArray.filter((name) => name !== "Polly");
  console.log(newDogsList);

  //   -----ekstra opgave
  let sumNumbersArray = numbersArray.reduce((acc, num) => acc + num, 0);
  console.log(sumNumbersArray);
}); // ends DOMContentLoaded
