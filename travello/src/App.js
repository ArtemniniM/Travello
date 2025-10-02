import style from "./styles/App.module.css";
import Offer from "./components/Offer.js";

import tv from "./assents/tv.svg";
import mic from "./assents/mic.svg";
import plane from "./assents/plane.svg";
import settings from "./assents/settings.svg";

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
  return (
    <>
      <Header />
      <main>
        <section className={style.offer}>
          <p>CATEGORY</p>
          <h2> Offer Best Services</h2>
          <div className={style.offerWrap}>
            {arrayObj.map((el, index) => (
              <Offer key={index} el={el} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
