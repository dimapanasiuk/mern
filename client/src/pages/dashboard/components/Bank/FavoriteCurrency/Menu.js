import React from "react";
import { components } from "react-select";
import { func, any } from "prop-types";

const Menu = (props) => {
  const optionSelectedLength = props.getValue().length || 0;
  return (
    <components.Menu {...props}>
      {optionSelectedLength < 2 ? (
        props.children
      ) : (
        <div style={{ padding: "10px" }}>Max limit achieved</div>
      )}
    </components.Menu>
  );
};

Menu.propTypes = {
  children: any,
  getValue: func,
};

export default Menu;
