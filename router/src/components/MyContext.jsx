import { createContext } from "react";

const user = {
  name: "Bart",
  age: 9,
};

const MyContext = createContext(user);

export { MyContext };
