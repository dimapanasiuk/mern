import React from "react";
import { FormGroup, TabPane, Row, Col } from "reactstrap";
import DatePicker from "reactstrap-date-picker";
import { func, string } from "prop-types";
import { useTranslation } from "react-i18next";
import theme from "style/theme";
import { CustomButton } from "./style";

const Date = ({ startFoo, endFoo, startDate, endDate, save, toggle }) => {
  const { t } = useTranslation();

  const dis = !(startDate && endDate && startDate < endDate);

  return (
    <TabPane tabId="3">
      <Row>
        <Col sm="6">
          <h6>{t("start date")}</h6>
          <FormGroup>
            <DatePicker
              id="start-datepicker"
              value={startDate}
              onChange={startFoo}
            />
          </FormGroup>
        </Col>
        <Col sm="6">
          <h6>{t("end date")}</h6>
          <FormGroup>
            <DatePicker id="end-datepicker" value={endDate} onChange={endFoo} />
          </FormGroup>
        </Col>
        <Col sm="12">
          <CustomButton outline color={theme.infoText} data-position="2" onClick={toggle}>
            {t("Back")}
          </CustomButton>
          <CustomButton color={theme.success} onClick={save} disabled={dis}>
            {t("Save")}
          </CustomButton>
        </Col>
      </Row>
    </TabPane>
  );
};

Date.propTypes = {
  startFoo: func,
  endFoo: func,
  startDate: string,
  endDate: string,
  save: func,
  toggle: func,
};

export default Date;
