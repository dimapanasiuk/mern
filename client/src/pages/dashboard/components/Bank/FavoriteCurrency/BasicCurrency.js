import React from "react";
import Select from "react-select";
import { FormGroup, Button, TabPane, Row, Col } from "reactstrap";
import makeAnimated from "react-select/animated";
import { any, string, func } from "prop-types";
import { useTranslation } from "react-i18next";

import theme from "style/theme";
import { Head6 } from "./style";

const BasicCurrency = ({ toggle, options, chooseCurrency, basicCur }) => {
  const { t } = useTranslation();

  return (
    <TabPane tabId="1">
      <Row>
        <Col sm="12">
          <FormGroup>
            <Head6> {t("Please choose basic currency")}</Head6>
            <Select
              closeMenuOnSelect={false}
              components={makeAnimated()}
              options={options}
              onChange={chooseCurrency}
            />
          </FormGroup>
          <Button
            color={theme.primary}
            data-position="2"
            onClick={toggle}
            disabled={!basicCur}
          >
            {t("Next")}
          </Button>
        </Col>
      </Row>
    </TabPane>
  );
};

BasicCurrency.propTypes = {
  toggle: func,
  chooseCurrency: func,
  options: any,
  basicCur: string,
};

export default BasicCurrency;
