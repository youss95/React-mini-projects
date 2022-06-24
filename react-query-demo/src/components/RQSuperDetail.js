import React from "react";
import { useSuperHeroData } from "../hooks/useSuperDetailData";
import { useParams } from "react-router-dom";
const RQSuperDetail = () => {
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useSuperHeroData(heroId);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return <div>{data?.data.name}</div>;
};

export default RQSuperDetail;
