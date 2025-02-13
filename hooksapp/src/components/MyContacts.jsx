import Search from "./Search";
import { useState, useEffect } from "react";
import useUpdateDocTitle from "../hooks/useUpdateDocTitle";

const MyContacts = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json), setIsLoading(false))
      .catch((err) => console.log(err.message));
  }, []);

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
    </>
  );
};
export default MyContacts;
