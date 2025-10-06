import style from "../styles/Header.module.scss";
import language from "../assents/language.svg";

function Header() {
  return (
    <>
      <header className={style.header}>
        <h2>Travello</h2>
        <nav>
          <p>Hotels</p>
          <p>Flights</p>
          <p>Bookings</p>
          <p>Login</p>
          <button className={style.sign}>Sign up</button>
          <h6>
            EN
            <img src={language} />
          </h6>
        </nav>
      </header>
    </>
  );
}
export default Header;
