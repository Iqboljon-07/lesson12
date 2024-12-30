import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { GrLanguage } from "react-icons/gr";

const Button = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("");

  const handleChange = (e) => {
    const selectLanguage = e.target.value;
    setLanguage(selectLanguage);

    if (selectLanguage == "eng") {
      i18n.changeLanguage("eng");
    } else if (selectLanguage == "ru") {
      i18n.changeLanguage("ru");
    } else if (selectLanguage == "uz") {
      i18n.changeLanguage("uz");
    }
  };
  console.log(language);
  return (
    <div>
      <select name="" id="" onChange={handleChange}>
        <option value="">🌐 Language</option>
        <option value="eng">eng</option>
        <option value="ru">ru</option>
        <option value="uz">uz</option>
      </select>
    </div>
  );
};

export default Button;
