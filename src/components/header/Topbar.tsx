import React from "react";
import { Dropdown } from "react-bootstrap";
import {useRouter} from "next/router";
import {useSelector} from 'react-redux'
import { useIntl } from "react-intl";

const App = () => {
  
  const router = useRouter();
  const  Language=useSelector(x=>x.Language);
  const intl = useIntl();

  return (
    <div className="top-bar">
            <div className="container d-flex justify-content-between"> 
                
        <p></p>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
        <img src="/eng.png" />  {intl.formatMessage({ id: "language" })}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={()=>{
            if(router?.pathname=="/")
            {
              router.push('/en-AE')
            }
            else
            {
              router.query.language = "en-AE"
              router.push(router)
            }
            
          }}>English</Dropdown.Item>
          <Dropdown.Item onClick={()=>{
            if(router?.pathname=="/")
            {
              router.push('/ar-AE')
            }
            else
            {
              router.query.language = "ar-AE"
              router.push(router)
            }
 
}}>Arabic</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
            </div>
    </div>
  );
};
export default App