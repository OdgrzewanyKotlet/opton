import React, { Component } from "react";

import Fade from "react-reveal/Fade";

import styles from "./Photovoltaics.module.css";
import FirstSection from "../FirstSection/FirstSection";
import FirstSectionImage from "../../assets/images/photopholtaics-bg.jpg";
import BasicSection from "../BasicSection/BasicSection";
import Button from "../UI/Button/Button";
import Benefits from "./Benefits/Benefits";
import Services from "./Services/Services";
import FAQ from "./FAQ/FAQ";
import Managment from "./Managment/Managment";
import CompaniesCarousel from "./CompaniesCarousel/CompaniesCarousel";
import MeaConsulting from "./MeaConsulting/MeaConsulting";
import Calculator from "./Calculator/Calculator";
import CalculatorResults from "./CalculatorResults/CalculatorResults";

class Photovoltaics extends Component {
  state = {
    calcProps: {
      installationSize: {
        icon: "Lightbulb",
        resultName: "Wielkość instalacji",
        resultValue: 0.43,
        unit: "kWp",
      },
      energyOutput: {
        icon: "Flash",
        resultName: "Co pozwala wyprodukować w ciągu roku",
        resultValue: 414.8,
        unit: "kWh",
      },
      installationCost: {
        icon: "Money",
        resultName: "Koszt brutto instalacji",
        resultValue: 2453.4,
        unit: "zł",
      },
      costPerYear: {
        icon: "Bill",
        resultName: "Roczny rachunek za prąd bez instalacji fotowoltanicznej",
        resultValue: 240,
        unit: "zł",
      },
      costPerYearWithPhotovoltaics: {
        icon: "Wallet",
        resultName: "Roczny rachunek z instalacją fotowoltaiczną",
        resultValue: 51,
        unit: "zł",
      },
      savings: {
        icon: "Savings",
        resultName: "Oszczędności przez 25 lat",
        resultValue: 4725,
        unit: "zł",
      },
    },
    sliderValue: null,
  };

  contactButtonClickedHandler = () => {
    this.props.history.push({ pathname: "/kontakt" });
  };

  getSliderValue = (e, value) => {
    this.setState({
      sliderValue: value,
      calcProps: {
        installationSize: {
          icon: "Lightbulb",
          resultName: "Wielkość instalacji",
          resultValue: (value / 46.3).toFixed(2),
          unit: "kWp",
        },
        energyOutput: {
          icon: "Flash",
          resultName: "Co pozwala wyprodukować w ciągu roku",
          resultValue: (value * 20.74).toFixed(2),
          unit: "kWh",
        },
        installationCost: {
          icon: "Money",
          resultName: "Koszt brutto instalacji",
          resultValue: (value * 122.67).toFixed(2),
          unit: "zł",
        },
        costPerYear: {
          icon: "Bill",
          resultName: "Roczny rachunek za prąd bez instalacji fotowoltanicznej",
          resultValue: (value * 12).toFixed(2),
          unit: "zł",
        },
        costPerYearWithPhotovoltaics: {
          icon: "Wallet",
          resultName: "Roczny rachunek z instalacją fotowoltaiczną",
          resultValue: (value * 2.55).toFixed(2),
          unit: "zł",
        },
        savings: {
          icon: "Savings",
          resultName: "Oszczędności przez 25 lat",
          resultValue: ((value * 12 - value * 2.55) * 25).toFixed(2),
          unit: "zł",
        },
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <FirstSection
          title="Fotowoltaika dla Twojego domu i&nbsp;biznesu"
          content="Postaw na odnawialne źródła energii wykorzystując nowoczesne rozwiązania z zakresu technologii fotowoltaicznych i obniż swój rachunek za prąd."
          backgroundImage={FirstSectionImage}
          contactButton
        />
        <BasicSection>
          <div className={styles.Wrapper}>
            <Fade left>
              <div className={styles.FirstStepTitle}>
                <h2>
                  Zrób pierwszy krok, <br /> my zrobimy drugi
                </h2>
              </div>
            </Fade>
            <Fade right>
              <div className={styles.FirstStepContent}>
                <p>
                  Zacznijmy od zebrania rachunków za energię elektryczną
                  z&nbsp;okresu jednego roku. Dogłębna analiza pozwoli nam na
                  precyzyjne określenie zużycia energii elektrycznej
                  w&nbsp;Twoim gospodarstwie. Na tej podstawie określimy
                  wielkość instalacji fotowoltaicznej.
                </p>
                <p>
                  Bardzo ważną kwestią jest wybór miejsca montażu instalacji
                  fotowoltaicznej. Podczas spotkania określamy dostępność
                  powierzchni montażowej oraz wyznaczymy orientację – najlepsze
                  uzyski będą z instalacji skierowanych na stronę południową.
                  Powierzchnia zajmowana przez domowe instalacje fotowoltaiczne
                  zależy oczywiście od mocy takiej instalacji, czyli ilości
                  zamontowanych modułów. Odchylenia na stronę wschodnią lub
                  zachodnią nie wykluczają montażu instalacji.
                </p>
                <p>
                  Informacje, które zgromadzimy podczas przechodzenia przez
                  poszczególne kroki, pozwolą nam opracować ofertę. Po
                  pozytywnej decyzji klienta umawiamy dogodny termin
                  i&nbsp;realizujemy zlecenie.
                </p>
              </div>
            </Fade>
          </div>
        </BasicSection>
        <Benefits />
        <BasicSection customClass={styles.Calculator}>
          <Fade>
            <h2>Kalkulacja oszczędności</h2>
            <p className={styles.CalculatorInfo}>
              Skorzystaj z poniższego kalkulatora i sprawdź ile zarobisz dzięki
              fotowoltaice, oszczędzając na rachunkach za energię elektryczną
              dla Twojego domu lub firmy.*
            </p>
          </Fade>{" "}
          <Fade>
            <p className={styles.CalculatorTitle}>
              Miesięczny rachunek za energię elektryczną
            </p>
            <Calculator getValue={this.getSliderValue} />{" "}
          </Fade>
          <Fade>
            <p className={styles.CalculatorResultTitle}>
              Najlepiej dopasowana instalacja dla Ciebie
            </p>
            <CalculatorResults calcProps={this.state.calcProps} />
            <p className={styles.CalculatorSideInfo}>
              * Powyższe dane mają charakter orientacyjny i nie stanowią oferty
              w rozumieniu Kodeksu Cywilnego. Koszt inwestycji zależy od
              indywidualnych warunków budynku, konstrukcji dachu, stawki VAT
              itp. Oszczędności, zależą od sprawności urządzeń, nośników energii
              i jej odpowiedniego wykorzystania.
            </p>
          </Fade>
        </BasicSection>
        <Managment />
        <MeaConsulting />
        <BasicSection customClass={styles.FinanceTitle}>
          <h2>Finansowanie</h2>
          <div className={styles.FinanceText}>
            Zyskaj czas i&nbsp;pieniądze dzięki naszej ścisłej współpracy
            z&nbsp;niezależną grupą specjalistów MEAConsulting. Dla pełnej
            satysfakcji klienta usługi związane z&nbsp;dofinansowaniami,
            kredytami i&nbsp;leasingami powierzamy profesjonalistom, którzy na
            bieżąco śledzą i&nbsp;analizują formy finansowania naszych
            instalacji. Dzięki takiej formie kooperacji jesteśmy w&nbsp;stanie
            działać szybciej i&nbsp;efektywniej, co przekłada się na zadowolenie
            wśród odbiorców.
          </div>
          <CompaniesCarousel />
        </BasicSection>
        <BasicSection customClass={styles.FAQ}>
          <h2>FAQ</h2>
          Najczęściej zadawane pytania
          <FAQ />
        </BasicSection>
        <BasicSection>
          <Services />
        </BasicSection>
        <BasicSection customClass={styles.Contact}>
          <h2>Dołącz do grona naszych klientów!</h2>
          <Button clicked={this.contactButtonClickedHandler}>
            SKONTAKTUJ SIĘ Z NAMI
          </Button>
          <div style={{ paddingBottom: "20px" }}></div>
        </BasicSection>
      </React.Fragment>
    );
  }
}

export default Photovoltaics;
