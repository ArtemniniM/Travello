import style from "../styles/Footer.module.scss";
import footerLogo from "../assents/footerLogo.svg";

function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.logo}>
          <img src={footerLogo} />
          <p>Book your trip in minute, get full Control for much longer.</p>
        </div>
        <nav className={style.nav}>
          <div className={style.block}>
            <h3>Company</h3>
            <h4>About</h4>
            <h4>Careers</h4>
            <h4>Mobile</h4>
          </div>
          <div className={style.block}>
            <h3>Contact</h3>
            <h4>Help/FAQ</h4>
            <h4>Press</h4>
            <h4>Affilates</h4>
          </div>
          <div className={style.block}>
            <h3>More</h3>
            <h4>Airlinefees</h4>
            <h4>Airline</h4>
            <h4>Low fare tips</h4>
          </div>
        </nav>
      </footer>
    </>
  );
}
export default Footer;
