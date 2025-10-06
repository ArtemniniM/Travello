import style from "../styles/Destinations.module.scss";

function Destinations({ el }) {
  return (
    <div className={style.destinationsItem}>
      <img src={el.src}></img>
      <div className={style.description}>
        <p>{el.loc}</p>
        <p>{el.cost}</p>
      </div>
      <p className={style.nav}>{el.way}</p>
    </div>
  );
}
export default Destinations;
