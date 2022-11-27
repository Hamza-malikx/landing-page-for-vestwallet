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
                  You will have your own digital wallet with 7 currencies
                  available, send, receive and invest your lucas your way.
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
                <h6>Invest</h6>
                <p>
                  Invest your money from your digital wallet and get up to 25%
                  annual return, the best rate in the market.
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
                <h6>Security</h6>
                <p>
                  We are not a mutual fund, your capital and profitability are
                  legally guaranteed.
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
