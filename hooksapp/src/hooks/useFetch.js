import { useState, useEffect, useDebugValue } from "react";

const useFetch = (fetchUrl) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(fetchUrl);
      if (!response.ok) {
        throw Error("Pas de data");
      }
      const fetchedData = await response.json();
      setData(fetchedData);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  // // Array
  // useDebugValue(data, (val) => {
  //   alert("useDebugValue lancé");
  //   return JSON.stringify(val);
  // });
  // // Se lance seulement Si je suis en mode dev et que dev-tool est ouvert pour inspecter le custom hook

  // Fetch
  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  // Return
  return { data, isLoading };
};
export default useFetch;
