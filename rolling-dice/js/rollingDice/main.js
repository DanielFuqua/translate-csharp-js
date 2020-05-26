function main() {
  // Put your code here
  console.log("Let's roll some dice, baby!");
  console.log("---------------------------");

  const roll = () => {
    const min = Math.ceil(1);
    const max = Math.floor(7);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  for (let i = 0; i < 10; i++) {
    const die1 = roll();
    const die2 = roll();

    let message = `${die1} + ${die2} === ${die1 + die2}`;
    if (die1 === die2) {
      message += " DOUBLES!";
    }
    console.log(message);
  }
}

main();
