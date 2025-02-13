import "./App.css";
import Search from "./components/Search";
import TableUsers from "./components/TableUsers";
import { fakeUsersGenerator } from "./data/users";
import { useState, useEffect } from "react";

const users = fakeUsersGenerator();
console.log(users);

const App = () => {
  const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState([]);

  // // Custom hook
  // const { data, isLoading } = useFetch("https://jsonplaceholder.typicode.com/users");

  const filterUsers = () => {
    const findUsers = users.filter((user) => {
      return Object.values(user).join(" ").toLocaleLowerCase().includes(search.toLocaleLowerCase());
    });

    setResultSearch(findUsers);
  };

  useEffect(() => {
    if (search !== "") {
      // Filter
      filterUsers();
    } else {
      setResultSearch([]);
    }
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const msgDisplay = (msg, color) => {
    return <p style={{ textAlign: "center", color: color }}>{msg}</p>;
  };

  return (
    <div className="App">
      <h1>Mes contacts</h1>
      <p>Total : {users.length} membres</p>
      <Search searchStr={search} searchHandler={handleChange} />

      {search === "" ? null : <TableUsers dataArray={resultSearch} />}
    </div>
  );
};

export default App;
