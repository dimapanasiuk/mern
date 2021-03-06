import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "reactstrap";

function MyComponent() {
  const [translate, setTranslate] = useState(false);
  const { t, i18n } = useTranslation();

  const translateClickHandler = () => {
    const ru = "ru-US";
    const en = "en-US";

    setTranslate(!translate);

    return i18n.changeLanguage(translate ? en : ru);
  };

  return <Button onClick={translateClickHandler}>{t("LANG")}</Button>;
}

export default MyComponent;
