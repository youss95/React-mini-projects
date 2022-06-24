import { useQueries } from "react-query";
import axios from "axios";

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4001/superheroes/${heroId}`);
};

export const DynamicQuery = ({ heroIds }) => {
  const results = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );
  console.log(results);
  return <div>Dyni</div>;
};
