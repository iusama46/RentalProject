import { useState, useEffect } from "react";


const useFetch = () => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //POST DATA

  const fetchData = async () => {
    setIsLoading(true);

    try {


      setData('datatest ');
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, };
}

export default useFetch;