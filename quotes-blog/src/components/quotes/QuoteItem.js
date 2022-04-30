import { useNavigate } from "react-router";
import classes from "./QuoteItem.module.css";

const QuoteItem = (props) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/quotes/${props.id}`);
  };
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <a className="btn" onClick={goDetail}>
        View Fullscreen
      </a>
    </li>
  );
};

export default QuoteItem;
