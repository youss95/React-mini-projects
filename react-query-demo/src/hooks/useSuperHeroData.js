import React from "react";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
const fetchHeroes = () => {
  return axios.get("http://localhost:4001/superheroes");
};
const useSuperHeroData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchHeroes, {
    //   refetchInterval: check ? 0 : 2000,
    onSuccess: onSuccess,
    onError: onError,
    select: (data) => {
      const firstData = data.data.filter((hero) => hero.id > 2);
      const heroName = data.data.map((hero) => hero.name);
      return { firstData, heroName };
    },
  });
};

export default useSuperHeroData;
