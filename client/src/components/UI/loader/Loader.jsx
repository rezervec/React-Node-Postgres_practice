import React from "react";
import style from "./Loader.module.css"

// обычный лоадер - три мелькающие точки
const Loader = () => {
  return (
    <div className={style.loader}>
      <p>Загрузка данных</p>
    </div>
  )
}

export default Loader;