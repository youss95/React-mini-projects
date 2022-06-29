import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import useSuperHeroData, {
  useAddSuperHeroData,
} from "../hooks/useSuperHeroData";
import { Link } from "react-router-dom";
const fetchHeroes = () => {
  return axios.get("http://localhost:4001/superheroes");
};
const RQSuperHeroes = () => {
  const [check, setCheck] = useState(false);
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const onSuccess = (data) => {
    console.log("Perform effect after data fetching", data);
  };
  const onError = (err) => {
    console.log("after fetching error", err);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroData(onSuccess, onError);

  const {
    mutate: addHero,
    isLoading: heroLoading,
    isError: addError,
    error: addErr,
  } = useAddSuperHeroData();
  const handleAddHeroClick = () => {
    const hero = { name, alterEgo };
    addHero(hero); //useAddSuperHeroData.mutate(hero)
  };
  if (isLoading || isFetching) return <h2>Loading...</h2>;
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={alterEgo}
        onChange={(e) => setAlterEgo(e.target.value)}
      />
      <button onClick={handleAddHeroClick}>Add Hero</button>
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
