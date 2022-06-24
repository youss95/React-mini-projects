import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchSuperHero = () => {
  return axios.get("http://localhost:4001/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4001/friends");
};
const ParalleQuery = () => {
  const { data: superHeroes, isLoading: superLoading } = useQuery(
    "super-heroes",
    fetchSuperHero
  );
  const { data: friends, isLoading: friendLoading } = useQuery(
    "friends",
    fetchFriends
  );
  console.log("aaa", superHeroes, friends, superLoading);
  return <div>ParalleQuery</div>;
};

export default ParalleQuery;
