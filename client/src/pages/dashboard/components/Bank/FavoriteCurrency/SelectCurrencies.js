import React from "react";
import Select from "react-select";
import { FormGroup, TabPane, Row, Col } from "reactstrap";
import makeAnimated from "react-select/animated";
import { any, array, func } from "prop-types";
import { size } from "lodash";
import { useTranslation } from "react-i18next";

import { Head6, CustomButton } from "./style";

const SelectCurrencies = ({ options, toggle, chooseCurrencies, select }) => {
  const { t } = useTranslation();

  const dis = Boolean(size(select));
  return (
    <TabPane tabId="2">
      <Row>
        <Col sm="12">
          <FormGroup>
            <Head6>
              {t("Select the currencies you want to see on the chart")}
            </Head6>
            <Select
              closeMenuOnSelect={false}
              components={makeAnimated()}
              isMulti
              options={options}
              onChange={chooseCurrencies}
            />
          </FormGroup>
          <CustomButton outline color="info" data-position="1" onClick={toggle}>
            {t("Back")}
          </CustomButton>
          <CustomButton
            color="primary"
            data-position="3"
            onClick={toggle}
            disabled={!dis}
          >
            {t("Next")}
          </CustomButton>
        </Col>
      </Row>
    </TabPane>
  );
};

SelectCurrencies.propTypes = {
  options: any,
  toggle: func,
  chooseCurrencies: func,
  select: array,
};

export default SelectCurrencies;
