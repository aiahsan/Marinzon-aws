import React from "react";
import { Accordion } from "react-bootstrap";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import { IReduxStore } from "../../interfaces/data/reduxStore";

const App = ({_filters,_setfilters}:{_filters:any,_setfilters:any}) => {
  const intl = useIntl();
  const services = useSelector((x: IReduxStore) => x.Services);
  return (
    <div className="exp-tab">
      <Accordion defaultActiveKey={services.map((x:IService)=>x.id?.toString())} alwaysOpen>
       {
         services.map(x=>{
           return  <Accordion.Item eventKey={x.id?.toString()}>
           <Accordion.Header>
          {x.title}
           </Accordion.Header>
           <Accordion.Body>
             <ul>
               {
                 x.categories.map((y:ICategory)=><li onClick={()=>{
                  _setfilters({
                     ..._filters,
                     categoryId:y.id,
                     serviceId:undefined
                   });
                 }}>{y.title }</li>)
               }
                
             </ul>
           </Accordion.Body>
         </Accordion.Item>
         })
       }
      </Accordion>
    </div>
  );
};
export default App;
