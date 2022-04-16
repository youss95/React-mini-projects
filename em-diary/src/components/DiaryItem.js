import DiaryList from "./DiaryList";
import MyButton from "./MyButton";
import { getStringDate } from "../util/date";
const DiaryItem = ({ content, emotion, id, date }) => {
  return (
    <div className="DiaryItem">
      <div
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion}`,
        ].join(" ")}
      >
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
      </div>
      <div className="info_wrapper">
        <div className="diary_date">{getStringDate(new Date(date))}</div>
        <div className="diary_content_preview">{content}</div>
      </div>
      <div className="btn_wrapper">
        <MyButton text={"수정"} />
      </div>
    </div>
  );
};

export default DiaryItem;
