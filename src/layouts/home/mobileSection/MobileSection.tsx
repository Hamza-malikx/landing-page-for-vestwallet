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
                Join our Social Media to obtain daily updates, join our AMA's and intereact with the community.
                </h2>
                <div style={{display:"flex", width:"300px",gap:"20px"}}>

                <button onClick={()=>{window.open("https://www.instagram.com/vest_wallet/", "_blank")}}>
                  <span >Discord</span>
                </button>
                <button onClick={()=> window.open("https://www.instagram.com/vest_wallet/", "_blank")}>
                  <span >Telegram</span>
                </button>
                </div>
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
