import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4001/users/${email}`);
};

const fetchCoursesById = (channelId) => {
  return axios.get(`http://localhost:4001/channels/${channelId}`);
};
const DependentQuery = ({ email }) => {
  console.log(email);
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );
  const channelId = user?.data.channelId;
  //mount -> channelId : undefined
  useQuery(["courses", channelId], () => fetchCoursesById(channelId), {
    enabled: !!channelId,
  });
  return <div>DependentQuery</div>;
};

export default DependentQuery;
