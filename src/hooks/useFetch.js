import {useState} from 'react';

const useFetch = (url) => {
  const [isLoading, setLoadingStatus] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  const fetchData =(url) =>{
    setLoadingStatus(true);
    fetch(url)
    .then(response => response.json())
    .then(result => {
        if(result.cod === 200) {
            setData(result);
        } else {
            setError(result)
        }
      
      setLoadingStatus(false);
    })
    .catch(err => {

      setError(err);
      setLoadingStatus(false);
    });
  }

  return {isLoading, data, error, fetchData};
};

export default useFetch;