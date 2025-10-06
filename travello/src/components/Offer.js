import style from "../styles/Offer.module.scss";

function Offer({ el }) {
  return (
    <div className={style.element}>
      <img src={el.src}></img>
      <h4>{el.title}</h4>
      <p>{el.info}</p>
    </div>
  );
}
export default Offer;
