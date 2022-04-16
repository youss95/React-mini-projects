import { useState } from "react";
import DiaryItem from "./DiaryItem";
const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

//감정 옵션
const emotionFilterList = [
  { value: "all", name: "all" },
  { value: "good", name: "good" },
  { value: "bad", name: "bad" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((option, idx) => (
        <option value={option.value} key={idx}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");
  const getDiaryList = () => {
    const filterCallBack = (item) => {
      if (filter === "good") {
        return parseInt(item.emotion) >= 3;
      } else {
        return parseInt(item.emotion) < 3;
      }
    };
    const copyList = JSON.parse(JSON.stringify(diaryList)); //깊은 복사
    const filteredList =
      filter === "all" ? copyList : copyList.filter((x) => filterCallBack(x));
    filteredList.sort((a, b) => {
      if (sortType === "oldest") return parseInt(a.date) - parseInt(b.date);
      else return parseInt(b.date) - parseInt(a.date);
    });
    return filteredList;
  };
  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={emotionFilterList}
          />
        </div>
      </div>
      {getDiaryList().map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </div>
  );
};
DiaryList.defaultProps = {
  diaryList: [],
};
export default DiaryList;
