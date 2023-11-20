import React from "react";
import styles from "./cards.module.css";
import { useSelector } from "react-redux";
const Cards = () => {
  const { lang } = useSelector((state: any) => state.getLanguageReducer);
  return (
    <div className={styles.cards}>
      <div className={`container`}>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles.circle}>
              <img
                src={require("../../../assets/images/wallet.png")}
                alt=""
                className={styles.wallet}
              />
            </div>
            {lang === false ? (
              <>
                <h6>Billetera</h6>
                <p>
                  Tendrás tu propia billetera digital con 7 divisas disponibles,
                  envía, recibe e invierte tus lucas a tu manera.
                </p>
              </>
            ) : (
              <>
                <h6>Wallet</h6>
                <p>
                Safely store your assets in our digital application wallet, funds are withrawable at any time.
                </p>
              </>
            )}
          </div>
          <div className={styles.card}>
            <div className={styles.circle}>
              <img
                src={require("../../../assets/images/cash.png")}
                alt=""
                className={styles.cash}
              />
            </div>
            {lang === false ? (
              <>
                <h6>Invertir</h6>
                <p>
                  Invierte tu dinero desde tu billetera digital y obtén hasta un
                  25% de rentabilidad anual, la mejor tasa del mercado.
                </p>
              </>
            ) : (
              <>
                <h6>Stake</h6>
                <p>
                Choose the amount of time you want to stake your assets and get daily interests over the lockdown period.
                </p>
              </>
            )}
          </div>
          <div className={styles.card}>
            <div className={styles.circle}>
              <img
                src={require("../../../assets/images/secure.png")}
                alt=""
                className={styles.secure}
              />
            </div>
            {lang === false ? (
              <>
                <h6>Seguridad</h6>
                <p>
                  No somos un fondo mutuo, tu capital y rentabilidad están
                  legalmente garantizados.
                </p>
              </>
            ) : (
              <>
                <h6>Team</h6>
                <p>
                Our team is formed by developers, economists and business advisors, we believe our team is strong enough to keep the project healthy and sustainable over time.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
