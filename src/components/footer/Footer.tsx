import React from "react";
import styles from "./footer.module.css";
import { useSelector } from "react-redux";
const Footer = () => {
  const { lang } = useSelector((state: any) => state.getLanguageReducer);
  return (
    <div className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerWrapper}>
          <div className={styles.left}>
            <h6>© 2022 Vest Wallet. All rights reserved.</h6>
          </div>
          <div className={styles.middle}>
            <h6 className={styles.underline}>Privacy Policy</h6>
            <h6>-</h6>
            <h6 className={styles.underline} onClick={()=> window.location.replace('https://app.vest-wallet.com/tos')}>Terms of Use</h6>
          </div>
          <div className={styles.right}>
            <div className={styles.socials}>
              <p>{lang === false ? "Redes sociales" : "Social networks"}</p>
              <div className={styles.iconWrapper}>
                <img
                  src={require("../../assets/icons/telegramIcon.png")}
                  alt=""
                />
                <img src={require("../../assets/icons/yt.png")} alt=""/>
                <img src={require("../../assets/icons/ld.png")} alt="" />
                <img src={require("../../assets/icons/fbIcon.png")} alt="" />
                <img src={require("../../assets/icons/Twitter.png")} alt="" />
                <img src={require("../../assets/icons/insta.png")} alt="" onClick={()=> window.location.replace('https://www.instagram.com/vest_wallet/')}/>
              </div>
            </div>
            <div className={styles.contactBtn}>
              <button>{lang === false ? "Contacto" : "Contact us"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
