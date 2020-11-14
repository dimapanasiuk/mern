import React from "react";
import Select from "react-select";
import { FormGroup, Button, TabPane, Row, Col } from "reactstrap";
import makeAnimated from "react-select/animated";
import { any, func } from "prop-types";
import { Head6 } from "./style";

const BasicCurrency = ({ toggle, options, chooseCurrency }) => {
  return (
    <TabPane tabId="1">
      <Row>
        <Col sm="12">
          <FormGroup>
            <Head6> Please choose basic currency</Head6>
            <Select
              closeMenuOnSelect={false}
              components={makeAnimated()}
              options={options}
              onChange={chooseCurrency}
            />
          </FormGroup>
          <Button color="primary" data-position="2" onClick={toggle}>
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
