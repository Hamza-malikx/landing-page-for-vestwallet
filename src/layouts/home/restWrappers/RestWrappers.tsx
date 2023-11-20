import React from "react";
import styles from "./restWrappers.module.css";
import { useSelector } from "react-redux";
const RestWrappers = () => {
  const { lang } = useSelector((state: any) => state.getLanguageReducer);

  return (
    <div className={styles.wrapper}>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className={styles.content}>
            {lang === false ? (
              <>
                <h2>Rentabilidad anual según tu plan.</h2>
                <p>
                  Tenemos distintos planes para cada perfil de usuario, obtén
                  desde un 12% hasta un 25% de rentabilidad anual.
                </p>
              </>
            ) : (
              <>
                <h2>Daily staking rewards</h2>
                <p>
                We offer up to 292% APY in our Earn section, rewards are distributed and can be claimed daily.
                </p>
              </>
            )}
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className={styles.imgWrapper}>
            <img
              src={require("../../../assets/images/testimonial1.png")}
              alt=""
              className={styles.testimonial1}
            />
          </div>
        </div>
      </div>
      <div className={styles.testimonial2}>
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={styles.imgWrapper}>
              <img
                src={require("../../../assets/images/testimonial2.png")}
                alt=""
                className={styles.testimonial2}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={styles.content}>
              {lang === false ? (
                <>
                  <h2>
                    Maneja tus finanzas fácilmente, todo desde un mismo lugar.
                  </h2>
                  <p>
                    Contamos con sistemas tecnológicos avanzados, intuitivos y
                    totalmente automatizados, nuestra web app y aplicación móvil
                    funcionan 24/7, sin interrupciones.
                  </p>
                </>
              ) : (
                <>
                  <h2>Sustainability</h2>
                  <p>
                  Our team is formed by capable economists and business advisors to ensure longevity to our project.
Your funds are and will always be safe and withdrawable at any time.
Our weekly results will be posted on our discord & telegram.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className={styles.content}>
            {lang === false ? (
              <>
                <h2>Reglas claras desde el minuto uno.</h2>
                <p>
                  Recibe tasas de interés fijas y totalmente seguras, elige el
                  tiempo de tu inversión y recibe intereses diarios, participa.
                </p>
              </>
            ) : (
              <>
                <h2>Staking yields</h2>
                <p>
                Our staking yields may be modified in the future, to ensure sustainability, your APY won't change if you already started a Staking Period.
                </p>
              </>
            )}
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className={styles.imgWrapper}>
            <img
              src={require("../../../assets/images/testimonial3.png")}
              alt=""
              className={styles.testimonial3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestWrappers;
