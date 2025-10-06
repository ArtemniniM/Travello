import style from "../styles/Trip.module.scss";

function Trip({ el }) {
  return (
    <div className={style.tripItem}>
      <img src={el.src}></img>
      <div className={style.right}>
        <h4>{el.title}</h4>
        <p>{el.desc}</p>
      </div>
    </div>
  );
}

export default Trip;
