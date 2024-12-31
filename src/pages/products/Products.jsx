import React from "react";
import apple from "@/assets/apple.jpg";
import banana from "@/assets/banana.jpg";
import cherry from "@/assets/cherry.jpg";
import orange from "@/assets/orange.jpg";
import pomegranate from "@/assets/pomegranate.jpg";
import kiwi from "@/assets/kiwi.jpg";
import watermelon from "@/assets/watermelon.jpg";
import grapes from "@/assets/grapes.jpg";

import { useTranslation } from "react-i18next";
const Products = () => {
  const { t } = useTranslation();
  return (
    <div className="product">
      <h1 style={{ fontSize: "48px" }}>{t("fruit")} </h1>
      <div className="card">
        <div className="card_item">
          <img src={apple} alt="" />
          <h1> {t("apple")}</h1>
        </div>

        <div className="card_item">
          <img src={cherry} alt="" />
          <h1> {t("cherry")}</h1>
        </div>

        <div className="card_item">
          <img src={banana} alt="" />
          <h1> {t("banana")}</h1>
        </div>
        <div className="card_item">
          <img src={orange} alt="" />
          <h1> {t("orange")}</h1>
        </div>

        <div className="card_item">
          <img src={pomegranate} alt="" />
          <h1> {t("pomegranate")}</h1>
        </div>

        <div className="card_item">
          <img src={kiwi} alt="" />
          <h1> {t("kiwi")}</h1>
        </div>

        <div className="card_item">
          <img src={grapes} alt="" />
          <h1> {t("grapes")}</h1>
        </div>

        <div className="card_item">
          <img src={watermelon} alt="" />
          <h1> {t("watermelon")}</h1>
        </div>
      </div>
    </div>
  );
};

export default Products;
