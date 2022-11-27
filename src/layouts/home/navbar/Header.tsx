import React from "react";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../../store/index";
import { Sidebar } from "primereact/sidebar";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { lang } = useSelector((state: any) => state.getLanguageReducer);
  const langEnHandler = () => {
    dispatch(allActions.getLanguageAction.getLanguageResponse(true));
  };
  const langEsHandler = () => {
    dispatch(allActions.getLanguageAction.getLanguageResponse(false));
  };
  const [visibleRight, setVisibleRight] = React.useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.headerWrapper}>
          <div className={styles.logoWrapper}>
            <div className={styles.logo}>
              <img
                src={require("../../../assets/icons/logo.png")}
                alt="vest wallet logo"
              />
            </div>
            <h6>
              <span>VEST</span> WALLET
            </h6>
          </div>
          <div className={styles.rightItemsWrapper}>
            {/* <div className={`${styles.bubble} ${styles.themeActive}`}>
              <img src={require("../../../assets/icons/sun.png")} alt="" />
            </div>
            <div className={`${styles.bubble}`}>
              <img src={require("../../../assets/icons/moon.png")} alt="" />
            </div>
            <div className={styles.vrLine}></div> */}
            <div
              className={
                lang === true
                  ? `${styles.bubble} ${styles.langActive}`
                  : styles.bubble
              }
              onClick={langEnHandler}
            >
              <h6>EN</h6>
            </div>
            <div
              className={
                lang === false
                  ? `${styles.bubble} ${styles.langActive}`
                  : styles.bubble
              }
              onClick={langEsHandler}
            >
              <h6>ES</h6>
            </div>
            <button
              className={styles.signUpBtn}
              onClick={() => {
                navigate("/register");
              }}
            >
              {lang === false ? "Abre tu cuenta" : "Create an Account"}
            </button>
            <button
              className={styles.loginBtn}
              onClick={() => {
                navigate("/login");
              }}
            >
              {lang === false ? <span>Ingresar</span> : <span>login</span>}
            </button>
          </div>
          <button
            className={styles.hamburger}
            onClick={() => setVisibleRight(true)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      <Sidebar
        visible={visibleRight}
        position="right"
        onHide={() => setVisibleRight(false)}
      >
        <div className={styles.rightItemsWrapperMobile}>
          {/* <div className={`${styles.bubble} ${styles.themeActive}`}>
            <img src={require("../../../assets/icons/sun.png")} alt="" />
          </div>
          <div className={`${styles.bubble}`}>
            <img src={require("../../../assets/icons/moon.png")} alt="" />
          </div>
          <div className={styles.vrLine}></div> */}
          <div
            className={
              lang === true
                ? `${styles.bubble} ${styles.langActive}`
                : styles.bubble
            }
            onClick={langEnHandler}
          >
            <h6>EN</h6>
          </div>
          <div
            className={
              lang === false
                ? `${styles.bubble} ${styles.langActive}`
                : styles.bubble
            }
            onClick={langEsHandler}
          >
            <h6>ES</h6>
          </div>
          <button
            className={styles.signUpBtn}
            onClick={() => {
              navigate("/register");
            }}
          >
            {lang === false ? "Abre tu cuenta" : "Create an Account"}
          </button>
          <button
            className={styles.loginBtn}
            onClick={() => {
              navigate("/login");
            }}
          >
            {lang === false ? <span>Ingresar</span> : <span>login</span>}
          </button>
        </div>
      </Sidebar>
    </div>
  );
};

export default Header;
