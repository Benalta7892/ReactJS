const members = {
  userOne: "Mark",
  userTwo: "Léa",
  userThree: "Justine",
};

const { userOne, userTwo, ...rest } = members;

console.log(rest);
