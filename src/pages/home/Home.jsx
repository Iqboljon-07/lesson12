import React from "react";
import { useTranslation } from "react-i18next";
import photo from "@/assets/photo.jpg";
import { FaFacebookF } from "react-icons/fa";

import { FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Home = () => {
  // const test = useTranslation(); masalan
  // console.log(test);
  const { t, i18n } = useTranslation();
  return (
    <div className="home">
      <div className="home_item">
        <div className="home_item2">
          <div className="home_item3">
            <h1>{t("Welcome to React")}</h1>

            <div className="item_5">
              <div className="home_item4">
                <h3>{t("frontend")} </h3>
                <h1>{t("name")} </h1>
              </div>
              <div>
                <p>{t("address")} </p>
                <p>{t("personal details")} </p>
              </div>
            </div>
          </div>
          <div className="photo">
            <img src={photo} alt="" />
          </div>
        </div>
        <div className="expirance">
          <h1>{t("experince")} </h1>
          <div className="experince_item">
            <div className="experince_item1">
              <div className="experince_item2">
                <h4>2023-2024</h4>
              </div>
              <div className="experince_item3">
                <h2>{t("ofis")} </h2>
                <h3>{t("designer")} </h3>
                <p>{t("gemini")} </p>
              </div>
            </div>
            <div className="experince_item1">
              <div className="experince_item2">
                <h4>2023-2022</h4>
              </div>
              <div className="experince_item3">
                <h2>{t("ofis2")} </h2>
                <h3>{t("designer")} </h3>
                <p>{t("gemini")} </p>
              </div>
            </div>
            <div className="experince_item1">
              <div className="experince_item2">
                <h4>2023-2022</h4>
              </div>
              <div className="experince_item3">
                <h2>{t("texnopark")} </h2>
                <h3>{t("ofis3")} </h3>
                <p>{t("control")} </p>
              </div>
            </div>
          </div>
        </div>

        <div className="expirance">
          <h1>{t("education")} </h1>
          <div className="experince_item">
            <div className="experince_item1">
              <div className="experince_item2">
                <h4>2024-2025</h4>
              </div>
              <div className="experince_item3">
                <h2>{t("major")} </h2>
                <h3>{t("named")} </h3>
                <p>{t("subject")} </p>
              </div>
            </div>
            <div className="experince_item1">
              <div className="experince_item2">
                <h4>2017-2021</h4>
              </div>
              <div className="experince_item3">
                <h2>{t("ofis2")} </h2>
                <h3>{t("named2")} </h3>
                <p>{t("subject2")} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer_item">
          <FaFacebookF />
          Orifjonov Iqboljon
        </div>
        <div className="footer_item">
          <MdEmail />
          orifjonoviqboljon@gmail.com
        </div>
        <div className="footer_item">
          <FaTelegram />
          @Iqboljon0307
        </div>
      </footer>
    </div>
  );
};

export default Home;
