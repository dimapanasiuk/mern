import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Alert, Button } from "reactstrap";

function MyComponent() {
  const [translate, setTranslate] = useState(false);
  const { t, i18n } = useTranslation();

  const translateClickHandler = () => {
    const fr = "fr-US";
    const en = "en-US";

    setTranslate(!translate);

    return translate ? i18n.changeLanguage(en) : i18n.changeLanguage(fr);
  };

  return (
    <>
      <Alert color="warning">
        {t("Welcome to React")}{" "}
        <Button onClick={translateClickHandler}>Translate</Button>{" "}
      </Alert>
    </>
  );
}

export default MyComponent;
