import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Data is not fetched");
        }

        const responseData = await response.json();

        if (!ignore) {
          setData(responseData);
          setError(null);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => (ignore = true);
  }, [url]);

  return { data, isLoading, error };
};
