import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperHero = ({ queryKey }) => {
  console.log("s", queryKey);
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4001/superheroes/${heroId}`);
};
export const useSuperHeroData = (heroId) => {
  const queryClient = useQueryClient(); //access to set initial data
  return useQuery(["super-hero", heroId], fetchSuperHero, {
    staleTime: 10000,
    initialData: () => {
      const hero = queryClient
        .getQueryData("super-heroes")
        ?.data?.find((hero) => hero.id === parseInt(heroId)); //super-heroes 데이터 얻기
      console.log("he", hero);
      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
  });
};
