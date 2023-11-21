import React from "react";
import styles from "./hero.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Hero = () => {
  const navigate = useNavigate();
  const { lang } = useSelector((state: any) => state.getLanguageReducer);
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroWrapper}>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={styles.left}>
              {lang === false ? (
                <>
                  <h1>Tu mejor decisión para ahorrar e invertir.</h1>
                  <p>
                    Gasta, ahorra e invierte tu dinero con las mejores tasas del
                    mercado, todo desde un mismo lugar
                  </p>
                  <button
                    className={styles.signUpBtn}
                    onClick={() => {
                      // navigate("/register");
                      window.location.href =
                        "https://app.investiumcapital.net/register";
                    }}
                  >
                    Abre tu cuenta
                  </button>
                </>
              ) : (
                <>
                   <h1>First long term proven sustainable DeFi project.</h1>
                  <p>
                  Invest in a proven sustainable DeFi project where your money is always safe and secured.
                  </p>
                  <button
                    className={styles.signUpBtn}
                    onClick={() => {
                      // navigate("/register");
                      window.location.href =
                        "https://app.investiumcapital.net/register";
                    }}
                  >
                    Create an account
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={styles.right}>
              {/* <img
                src={require("../../../assets/images/homeRight.png")}
                alt=""
              /> */}
              <img
                src={require("../../../assets/images/hero/heroRightAbs.png")}
                alt=""
                className={styles.mainImg}
              />
              <img
                src={require("../../../assets/images/hero/leftCoin.png")}
                alt=""
                className={styles.coinAbsImg}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
