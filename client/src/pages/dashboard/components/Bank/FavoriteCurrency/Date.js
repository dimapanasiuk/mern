import React from "react";
import { FormGroup, TabPane, Row, Col } from "reactstrap";
import DatePicker from "reactstrap-date-picker";
import { func, string } from "prop-types";
import { CustomButton } from "./style";

const Date = ({ startFoo, endFoo, startDate, endDate, save, toggle }) => {
  return (
    <TabPane tabId="3">
      <Row>
        <Col sm="6">
          <h6>start date</h6>
          <FormGroup>
            <DatePicker
              id="start-datepicker"
              value={startDate}
              onChange={startFoo}
            />
          </FormGroup>
        </Col>
        <Col sm="6">
          <h6>end date</h6>
          <FormGroup>
            <DatePicker id="end-datepicker" value={endDate} onChange={endFoo} />
          </FormGroup>
        </Col>
        <Col sm="12">
          <CustomButton outline color="info" data-position="2" onClick={toggle}>
            Back
          </CustomButton>

          <CustomButton outline color="success" onClick={save}>
            Save
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
