import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import useSuperHeroData from "../hooks/useSuperHeroData";
import { Link } from "react-router-dom";
const fetchHeroes = () => {
  return axios.get("http://localhost:4001/superheroes");
};
const RQSuperHeroes = () => {
  const [check, setCheck] = useState(false);
  const onSuccess = (data) => {
    console.log("Perform effect after data fetching", data);
  };
  const onError = (err) => {
    console.log("after fetching error", err);
  };
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroData(onSuccess, onError);
  console.log(data);
  console.log(isLoading, isFetching);
  if (isLoading || isFetching) return <h2>Loading...</h2>;
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <button onClick={refetch}>Fetch</button>
      {data.firstData.map((hero) => (
        <Link to={`/rq-super-heroes/${hero.id}`} key={hero.id}>
          <h2>{hero.name}</h2>
        </Link>
      ))}
    </>
  );
};

export default RQSuperHeroes;
