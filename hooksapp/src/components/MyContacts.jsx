import Search from "./Search";
import { useState } from "react";
import useUpdateDocTitle from "../hooks/useUpdateDocTitle";

const MyContacts = () => {
  const [search, setSearch] = useState("");

  useUpdateDocTitle(search);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return <Search searchStr={search} searchHandler={handleChange} />;
};
export default MyContacts;
