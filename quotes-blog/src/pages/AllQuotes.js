import { Outlet } from "react-router-dom";
import QuoteList from "../components/quotes/QuoteList";
const DUMMY = [
  { id: "1", author: "m", text: "haha" },
  { id: "q2", author: "mm", text: "learn" },
];

const AllQuotes = () => {
  return (
    <div>
      <h1>All</h1>
      <QuoteList quotes={DUMMY} />
      <Outlet />
    </div>
  );
};

export default AllQuotes;
