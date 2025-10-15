import style from "./styles/App.module.scss";
import Offer from "./components/Offer.js";
import Destinations from "./components/Destinations.js";
import Trip from "./components/Trip.js";

import hero from "./assents/herowbag.png";
import playButton from "./assents/playButton.svg";

import tv from "./assents/tv.svg";
import mic from "./assents/mic.svg";
import plane from "./assents/plane.svg";
import settings from "./assents/settings.svg";

import europe from "./assents/europe.png";
import bigben from "./assents/bigben.jpg";
import kolis from "./assents/kolis.png";

import square from "./assents/square.svg";
import waterSport from "./assents/water-sport.svg";
import taxi from "./assents/taxi.svg";
import greece from "./assents/greece.jpg";
import leaf from "./assents/leaf.svg";
import mapIcon from "./assents/map-icon.svg";
import send from "./assents/send.svg";
import building from "./assents/building.svg";
import heart from "./assents/heart.svg";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  const arrayObj = [
    { src: tv, title: "Calculated Weather", info: "Built Wicket longer admire do barton vanity itself do in it." },
    { src: plane, title: "Best Flights", info: "Engrossed listening. Park gate sell they west hard for the." },
    { src: mic, title: "Local Events", info: "Barton vanity itself do in it. Preferd to men it engrossed listening. " },
    {
      src: settings,
      title: "Customization",
      info: "We deliver outsourced aviation services for military customers",
    },
  ];
  const ArrayDestinations = [
    {
      src: kolis,
      loc: "Rome,Italy",
      cost: "$5,42k",
      way: "10 Days Trip ",
    },
    {
      src: bigben,
      loc: "London,UK",
      cost: "$4.2k",
      way: "12 Days Trip ",
    },
    {
      src: europe,
      loc: "Full Europe",
      cost: "$15k",
      way: "28 Days Trip ",
    },
  ];
  const ArrayTrip = [
    {
      src: square,
      title: "Choose Destination",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      src: waterSport,
      title: "Make Payment",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      src: taxi,
      title: "Reach Airport on Selected Date",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
  ];
  return (
    <>
      <Header />
      <main>
        <section className={style.hero}>
          <div className={style.leftSide}>
            <h3>Destinations around the world</h3>
            <h1>Travel, enjoy and live a new and full life</h1>
            <p>
              Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed
              listening. Park gate sell they west hard for the.
            </p>
            <div className={style.buttonGroup}>
              <button className={style.btnMore}>Find out more</button>
              <div className={style.btnDemo}>
                <div className={style.img} />
                Play Demo
              </div>
            </div>
          </div>
          <div className={style.rightSide}>
            <img src={hero}></img>
          </div>
        </section>
        <section className={style.offer}>
          <p>CATEGORY</p>
          <h2>We Offer Best Services</h2>
          <div className={style.offerWrap}>
            {arrayObj.map((el, index) => (
              <Offer key={index} el={el} />
            ))}
          </div>
        </section>
        <section className={style.destinations}>
          <p>Top Selling</p>
          <h2>Top Destinations</h2>
          <div className={style.destinationsWrap}>
            {ArrayDestinations.map((el, index) => (
              <Destinations key={index} el={el} />
            ))}
          </div>
        </section>
        <section className={style.trip}>
          <div className={style.leftSide}>
            <p>Easy and Fast</p>
            <h2>Book your next trip in 3 easy steps</h2>
            <div className={style.tripWrap}>
              {ArrayTrip.map((el, index) => (
                <Trip key={index} el={el} />
              ))}
            </div>
          </div>
          <div className={style.rightSide}>
            <img src={greece}></img>
            <h3>Trip To Greece</h3>
            <p>14-29 June | by Robbin joseph</p>
            <img className={style.icons} src={leaf}></img>
            <img className={style.icons} src={mapIcon}></img>
            <img className={style.icons} src={send}></img>
            <p className={style.bottom}>24 people going</p>
            <></>
          </div>
        </section>
        <section className={style.testimonials}>
          <p>Testimonials</p>
          <div className={style.testimonialsWrapper}>
            <div className={style.testimonialsLeft}>
              <h2>What people say about Us.</h2>
            </div>
            <div className={style.testimonialsRight}>
              <div className={style.arrowContainer}>
                <div className={style.topArrow}></div>
                <div className={style.bottomArrow}></div>
              </div>
              <div className={style.textContainer}>
                <p>
                  “On the Windows talking painted pasture yet its <br /> express parties use. Sure last upon he same as{" "}
                  <br />
                  knew next. Of believed or diverted no.”
                </p>
                <h5>Mike taylor</h5>
                <h6>Lahore, Pakistan</h6>
              </div>
            </div>
          </div>
        </section>
        <section className={style.companies}>
          <div className={style.axon}></div>
          <div className={style.jetstar}></div>
          <div className={style.expedia}></div>
          <div className={style.qantas}></div>
          <div className={style.alitalia}></div>
        </section>
        <section className={style.subscribe}>
          <div className={style.subscribeWrapper}>
            <h2>Subscribe to get information, latest news and other interesting offers about Jadoo</h2>
            <input placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
