import Search from "./Search";
import { useState, useEffect } from "react";
import useUpdateDocTitle from "../hooks/useUpdateDocTitle";
import TableUsers from "./TableUsers";

const MyContacts = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [resultSearch, setResultSearch] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json), setIsLoading(false))
      .catch((err) => console.log(err.message));
  }, []);

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

  // useUpdateDocTitle(search);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const msgDisplay = (msg, color) => {
    return <p style={{ textAlign: "center", color: color }}>{msg}</p>;
  };

  return (
    <>
      {isLoading ? (
        msgDisplay("Veuillez patienter !", "red")
      ) : (
        <Search searchStr={search} searchHandler={handleChange} />
      )}

      {resultSearch.length === 0 && search !== "" ? (
        msgDisplay("Pas de résultat !", "red")
      ) : // search === "" ? msgDisplay("Veuillez effectuer une recherche", "green")
      search === "" ? null : (
        <TableUsers dataArray={resultSearch} />
      )}
    </>
  );
};
export default MyContacts;
