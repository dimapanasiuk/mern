import React from "react";
import Select from "react-select";
import { FormGroup, TabPane, Row, Col } from "reactstrap";
import makeAnimated from "react-select/animated";
import { any, func } from "prop-types";
import { Head6, CustomButton } from "./style";

const SelectCurrencies = ({ options, toggle, chooseCurrencies }) => {
  return (
    <TabPane tabId="2">
      <Row>
        <Col sm="12">
          <FormGroup>
            <Head6>Select the currencies you want to see on the chart</Head6>
            <Select
              closeMenuOnSelect={false}
              components={makeAnimated()}
              isMulti
              options={options}
              onChange={chooseCurrencies}
            />
          </FormGroup>
          <CustomButton outline color="info" data-position="1" onClick={toggle}>
            Back
          </CustomButton>
          <CustomButton color="primary" data-position="3" onClick={toggle}>
            Next
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
};

export default SelectCurrencies;
