import React from "react";
import { Dropdown } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useIntl } from "react-intl";

const App = () => {

  const intl = useIntl();

  return (
    <div className="search-bar">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
        {intl.formatMessage({ id: "ax1" })}
         </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <input placeholder={intl.formatMessage({ id: "ax2" })}/>
      <button className="search-btn">
        <BsSearch />
      </button>
    </div>
  );
};

export default App