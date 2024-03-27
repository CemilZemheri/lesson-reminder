import Styles from "./lesson.module.css";
import { data } from "../../helper/data";
import { useState } from "react";

const LessonCard = () => {

  
  const [isBodyVisible, setIsBodyVisible] = useState(true);
  const handleClick = () => {
    setIsBodyVisible(false);
    setLessonCount(0);
  };
  const [lessonCount, setLessonCount] = useState(6);

  return (
    <div className={Styles.container}>
      <div className={Styles.container__Header}>
        <h2>
          <span>{lessonCount} </span>lessons today
        </h2>
      </div>
      {isBodyVisible && (
        <div className={Styles.container__Body}>
          {data.map((lesson) => {
            return (
              <div className={Styles.container__Body__Card}>
                <img src={lesson.image} alt="" />
                <div className={Styles.container__Body__Lessons}>
                  <p>Lesson Name: <span>{lesson.name}</span></p>
                  <p>Lesson Hour: <span>{lesson.hour}</span></p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className={Styles.container__Footer}>
        <button onClick={handleClick}>Clear List</button>
      </div>
    </div>
  );
};

export default LessonCard;
