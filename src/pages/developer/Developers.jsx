import React from "react";
import Brendan from "@/assets/Brendan.jpg";
import Tim from "@/assets/Tim.jpg";
import Html from "@/assets/Html.jpg";
import react from "@/assets/react.svg";

import { Trans, useTranslation } from "react-i18next";
const Developers = () => {
  const { t } = useTranslation();
  return (
    <div className="developer">
      <h1>{t("pragramm")} </h1>
      <div className="developer_item">
        <h1>JavaScript</h1>
        <img className="developer_img" src={Brendan} alt="" />
        <p>{t("Js")} </p>
      </div>

      <div className="developer_item">
        <h1>Html</h1>
        <img className="developer_img" src={Tim} alt="" />
        <img
          style={{ float: "left" }}
          className="developer_img"
          src={Html}
          alt=""
        />
        <p>{t("Html")} </p>
      </div>

      <div className="developer_item">
        <img className="developer_img" src={react} alt="" />
        <h1 style={{ color: "blue" }}>React</h1>

        <Trans i18nKey={"message"}>
          <b>
            The React JavaScript library was originally created by Jordan Walke.
            It was developed at Facebook in 2011 and was initially used for the
            company's internal projects.
          </b>
          <i>
            React was originally developed for Facebook's News Feed, but today
            it is widely used to build web applications around the world.
          </i>
        </Trans>
      </div>
    </div>
  );
};

export default Developers;
