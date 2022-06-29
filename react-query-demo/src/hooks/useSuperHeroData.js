import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { request } from "../utils/axios-utils";
const fetchHeroes = () => {
  return request({ url: "/superheroes" });
};

const addSuperHero = (hero) => {
  return request({ url: "/superheroes", method: "post", data: hero });
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

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    /*
    onSuccess: (data) => {
      // queryClient.invalidateQueries("super-heroes"); //refetch super-heroes
      queryClient.setQueryData("super-heroes", (oldQueryData) => {
        //newValue
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      }); //update
    },
    */
    onMutate: async (newHero) => {
      await queryClient.cancelQueries("super-heroes"); //cancel any outgoing refetch : optimistic update에 덮어쓰기 피하기 위해
      const previousHeroData = queryClient.getQueryData("super-heroes");
      queryClient.setQueryData("super-heroes", (oldQueryData) => {
        //newValue
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data,
            { id: oldQueryData?.data?.length + 1, ...newHero },
          ],
        };
      }); //update
      return {
        previousHeroData, //rollback data incase mutation error
      };
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData("super-heroes", context.previousHeroData);
    },
    onSettled: () => {
      queryClient.invalidateQueries("super-heroes"); //refetch
    }, //success or encounter error
  });
};

export default useSuperHeroData;
