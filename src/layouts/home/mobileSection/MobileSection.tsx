import React from "react";
import styles from "./mobileSection.module.css";
import { useSelector } from "react-redux";
const MobileSection = () => {
  const { lang } = useSelector((state: any) => state.getLanguageReducer);
  return (
    <div className={styles.mobileSection}>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className={styles.content}>
            {lang === false ? (
              <>
                <h2>
                  Ahora podrás manejar tus finanzas desde nuestra aplicación
                  móvil.
                </h2>
                <button>
                  <span>PROXIMAMENTE</span>
                </button>
              </>
            ) : (
              <>
                <h2>
                  Now you can manage your finances from our mobile application.
                </h2>
                <button>
                  <span>COMING SOON</span>
                </button>
              </>
            )}
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className={styles.imgWrapper}>
            <img
              src={require("../../../assets/images/testimonial4.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSection;
