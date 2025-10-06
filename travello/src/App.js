import style from "./styles/App.module.scss";
import Offer from "./components/Offer.js";
import Destinations from "./components/Destinations.js";
import Trip from "./components/Trip.js";

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

import Header from "./components/Header";
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
      loc: "Rome, Italy",
      cost: "$5,42k",
      way: "10 Days Trip ",
    },
    {
      src: bigben,
      loc: "London, UK",
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
        <section className={style.offer}>
          <p className={style.center}>CATEGORY</p>
          <h2 className={style.center}>We Offer Best Services</h2>
          <div className={style.offerWrap}>
            {arrayObj.map((el, index) => (
              <Offer key={index} el={el} />
            ))}
          </div>
        </section>
        <section className={style.destinations}>
          <p className={style.center}>Top Selling</p>
          <h2 className={style.center}>Top Destinations</h2>
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
      </main>
    </>
  );
}

export default App;
