const programmWord: string = "polus";

function countCorrectLetters(userWord: string) {
  const laterOnPlase: string[] = [];
  const laterNotOnPlase: string[] = [];
  const programmWordArray = programmWord.split("");
  const userWordArray = userWord.split("");
  if (userWord.length !== 5) {
    console.log("Введите слово из 5 букв!");
    return;
  } else
    programmWordArray.forEach((element, i) => {
      userWordArray.forEach((item, j) => {
        if (element === item && i === j) {
          laterOnPlase.push(item);
        } else if (element !== item && i === j) {
          laterOnPlase.push("*");
        } else if (element === item && i !== j) {
          laterNotOnPlase.push(item);
        }
      });
    });
  console.log(
    `Буквы на своих местах ${laterOnPlase.join(
      ""
    )}, не на своих местах ${laterNotOnPlase.join("")}`
  );
}

module.exports = {
  programmWord,
  countCorrectLetters,
};
