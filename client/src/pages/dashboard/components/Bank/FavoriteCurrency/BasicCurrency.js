import React from "react";
import Select from "react-select";
import { FormGroup, Button, TabPane, Row, Col } from "reactstrap";
import makeAnimated from "react-select/animated";
import { any, func } from "prop-types";

const BasicCurrency = ({ toggle, options, chooseCurrency }) => {
  return (
    <TabPane tabId="1">
      <Row>
        <Col sm="12">
          <FormGroup>
            <h6> Please choose basic currency</h6>
            <Select
              closeMenuOnSelect={false}
              components={makeAnimated()}
              options={options}
              onChange={chooseCurrency}
            />
          </FormGroup>
          <Button
            color="primary"
            onClick={() => {
              toggle("2");
            }}
          >
            Next
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
};

export default BasicCurrency;
