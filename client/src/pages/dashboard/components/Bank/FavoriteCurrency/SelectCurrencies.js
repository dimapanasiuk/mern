import React from "react";
import Select from "react-select";
import { FormGroup, Button, TabPane, Row, Col } from "reactstrap";
import makeAnimated from "react-select/animated";
import { any, func } from "prop-types";

const SelectCurrencies = ({ options, toggle, chooseCurrencies }) => {
  return (
    <TabPane tabId="2">
      <Row>
        <Col sm="12">
          <FormGroup>
            <h6>Select the currencies you want to see on the chart</h6>
            <Select
              closeMenuOnSelect={false}
              components={makeAnimated()}
              isMulti
              options={options}
              onChange={chooseCurrencies}
            />
          </FormGroup>
          <Button
            outline
            color="info"
            onClick={() => {
              toggle("1");
            }}
          >
            Back
          </Button>
          <Button
            color="primary"
            onClick={() => {
              toggle("3");
            }}
          >
            Next
          </Button>
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
