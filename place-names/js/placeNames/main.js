function main() {
  // Put your code here
  console.log("All Place Names");

  const placeNames = [
    "Nashville",
    "Hong Kong",
    "The back yard",
    "Earth",
    "London",
    "The mall",
    "Ryman Auditorium",
    "The Great Wall of China",
  ];
  for (let name of placeNames) {
    console.log(name);
  }

  console.log("");

  console.log("'The' Place Names");
  for (let name of placeNames) {
    if (name.startsWith("The")) {
      console.log(name);
    }
  }
}

main();
