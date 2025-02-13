import { useState, useEffect, useDebugValue } from "react";

const useFetch = (fetchUrl) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Array
  useDebugValue(data, (val) => JSON.stringify(val));
  // Si je suis en mode dev et que dev-tool est ouvert pour inspecter le custom hook

  // Fetch
  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((json) => setData(json), setIsLoading(false))
      .catch((err) => console.log(err.message));
  }, [fetchUrl]);

  // Return
  return { data, isLoading };
};
export default useFetch;
