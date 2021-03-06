import React from "react";

import Fade from "react-reveal/Fade";

import styles from "./Managment.module.css";
import PhoneImage from "../../../assets/images/managment-phone.jpg";
import ArrowElement from "./ArrowElement/ArrowElement";

const managment = (props) => (
  <div className={styles.Managment}>
    <Fade>
      <h2 className={styles.Title}>Zarządzaj z dowolnego miejsca</h2>
      <p className={styles.Content}>
        Monitoring to nie tylko sprawdzanie uzysków, ale również środek na
        kontrolowanie Twojego systemu przez Ciebie i&nbsp;instalatora. Dzięki
        dedykowanym aplikacjom zarówno klient jak i&nbsp;my otrzymujemy aktualne
        dane o&nbsp;pracy Twojej instalacji. Takie rozwiązania pomagają nam
        szybciej zlokalizować ewentualną usterkę oraz rozwiązać problem.​
      </p>
    </Fade>
    <div className={styles.Wrapper}>
      <div className={styles.ListSection}>
        <ArrowElement
          title="Zyskaj"
          content="wgląd w&nbsp;czasie rzeczywistym w&nbsp;zużycie energii i&nbsp;produkcję"
        />
        <ArrowElement
          title="Porównaj"
          content="dzisiejszą produkcję z&nbsp;poprzednimi pomiarami i&nbsp;udostępnij ją rodzinie oraz znajomym"
        />
        <ArrowElement
          title="Śledź"
          content="wydajność swojego systemu dzięki funkcjom zoptymalizowanym dla urządzeń mobilnych"
        />
      </div>
      <Fade right>
        <div className={styles.ImageSection}>
          <img src={PhoneImage} alt="Opton" />
        </div>
      </Fade>
    </div>
  </div>
);

export default managment;
