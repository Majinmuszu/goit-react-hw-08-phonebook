import React from "react";
import s from "./MainImage.module.css";

const MainImage = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.picWrap}>
          <span className={s.tilt}></span>
          <span className={s.tilt}></span>
          <span className={s.tilt}></span>
          <span className={s.tilt}></span>
          <span className={s.tilt}></span>
          <span className={s.tilt}></span>
          <span className={s.tilt}></span>
          <span className={s.tilt}></span>
          <span className={s.tilt}></span>
          <div className={s.picture}>
            <span className={s.txt}>
              I'm your <br/>
              phonebook<br/>

            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainImage;
