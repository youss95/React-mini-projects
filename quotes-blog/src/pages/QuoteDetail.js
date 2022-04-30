import { Route, useParams, Link, Routes, useNavigate } from "react-router";
import Comments from "../components/comments/Comments";
import NewQuote from "./NewQuote";
const QuoteDetail = () => {
  const param = useParams();
  const navigate = useNavigate();
  const DUMMY = [
    { id: "1", author: "m", text: "haha" },
    { id: "q2", author: "mm", text: "learn" },
  ];
  const quote = DUMMY.find((quote) => quote.id === param.quoteId);
  if (!quote) {
    return <p>NO QUOTE!</p>;
  }
  return (
    <div>
      <h1>author: {quote.author}</h1>
      <h2>text: {quote.text}</h2>
    </div>
  );
};

export default QuoteDetail;
