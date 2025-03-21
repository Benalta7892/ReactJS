import Search from "./Search";
import { useState, useEffect, lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

// import useUpdateDocTitle from "../hooks/useUpdateDocTitle";
// import TableUsers from "./TableUsers";
import useFetch from "../hooks/useFetch";

const TableUsers = lazy(() => import("./TableUsers")); // Import dynamique

const MyContacts = () => {
  const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState([]);

  // Custom hook
  const { data, isLoading } = useFetch("https://jsonplaceholder.typicode.com/users");

  const filterUsers = () => {
    const findUsers = data.filter((user) => {
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
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<div>Chargement du tableau en cours...</div>}>
            <TableUsers dataArray={resultSearch} />
          </Suspense>
        </ErrorBoundary>
      )}
    </>
  );
};
export default MyContacts;
