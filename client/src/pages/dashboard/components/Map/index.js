import React from "react";
import { connect } from "react-redux";
import { size } from "lodash";
import { Alert } from "reactstrap";
import { useTranslation } from "react-i18next";
import { array } from "prop-types";

import Feedbacks from "./Feedbacks";
import ShowMap from "./ShowMap";

const MyMap = ({ data }) => {
  const { t } = useTranslation();

  return (
    <>
      {!size(data) ? (
        <Alert color="success">
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
  data: array,
};

const mapStateToProps = (state) => {
  const allPlaces = state.sendMapFeedbackReducer;

  const placesInfo = allPlaces.filter((i) => i.id !== "");

  return { data: placesInfo };
};

export default connect(mapStateToProps)(MyMap);
