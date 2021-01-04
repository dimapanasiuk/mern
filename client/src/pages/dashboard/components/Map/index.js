import React from "react";
import { size } from "lodash";
import { Alert } from "reactstrap";
import { useTranslation } from "react-i18next";
import { object } from "prop-types";
import theme from 'style/theme';
import Feedbacks from "./Feedbacks";
import ShowMap from "./ShowMap";

const MyMap = ({ mapData }) => {
  const { t } = useTranslation();

  const data = size(mapData) ? mapData.places : null

  return (
    <>
      {!size(data) ? (
        <Alert color={theme.success}>
          {t("Please choose your favorite paces in place")}&nbsp;
          {t("Widget")}
        </Alert>
      ) : (
          <>
            <ShowMap locationData={data} />
            <Feedbacks feedbacks={data} />
          </>
        )}
    </>
  );
};

MyMap.propTypes = {
  mapData: object,
};

export default MyMap;
