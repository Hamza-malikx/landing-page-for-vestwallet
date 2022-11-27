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
                <h2>Annual return according to your plan.</h2>
                <p>
                  We have different plans for each user profile, get from 12% to
                  25% annual return.
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
                  <h2>Manage your finances easily, all from one place.</h2>
                  <p>
                    We have advanced, intuitive and fully automated
                    technological systems, our web app and mobile application
                    work 24/7, without interruptions.
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
                <h2>Clear rules from minute one.</h2>
                <p>
                  Receive fixed and totally secure interest rates, choose the
                  time of your investment and receive daily interest,
                  participate.
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
