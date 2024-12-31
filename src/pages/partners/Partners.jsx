import React from "react";
import { Trans, useTranslation } from "react-i18next";
import samsung from "@/assets/samsung.jpg";
import samsung1 from "@/assets/samsung1.jpg";

const Partners = () => {
  const { t } = useTranslation();
  return (
    <div className="partner">
      <h1>
        {t("hamkor", {
          count: 2,
        })}
      </h1>
      <div className="partner_item">
        <Trans i18nKey={"partner"}>
          <h3>Android operating system:</h3>

          <p>
            Samsung developed Android together with Google, making Galaxy
            smartphones the most popular Android devices in the world.
          </p>
        </Trans>
      </div>
      <div className="partner_item">
        <Trans i18nKey={"partner2"}>
          <h3>Google Services:</h3>

          <p>
            Samsung devices have deep integration with services like Google
            Maps, YouTube, and Google Assistant.
          </p>
        </Trans>
      </div>

      <div className="partner_item">
        <Trans i18nKey={"partner3"}>
          <h3>Wear OS:</h3>

          <p>
            A partnership with Google on the Wear OS operating system forSamsung
            smartwatches (e.g., Galaxy Watch).
          </p>
        </Trans>
      </div>

      <div className="samsung">
        <img style={{ float: "left" }} src={samsung1} alt="" />
        <img src={samsung} alt="" />
        <p>{t("samsung")}</p>
      </div>
    </div>
  );
};

export default Partners;
