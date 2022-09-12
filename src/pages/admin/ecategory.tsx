import React from "react";
import ServiceCard from "../../components/_update/cards/ServiceCard";
import Layout from "../../components/layout";
import ProductCard from "../../components/_update/cards/ProductCard";
import TagInput from "../../components/_update/inputs/taginput";
import Dropdown from "../../components/dropdown";
import Textbox from "../../components/textbox";
import Textarea from "../../components/textarea";
import Searchbar from "../../components/_update/inputs/searchbar";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux";
import { IReduxStore } from "../../interfaces/data/reduxStore";
import { ICategory, IECategory, IService } from "../../interfaces/data/objects";
import { DeleteServices, GetServices } from "../../functions/Services";
import { DeleteCategory, GetCategory, UpdateCategory } from "../../functions/Categories";
import Modal from "../../components/_update/modal";
import ECategoryForm from "../../components/_update/forms/EcategoryForm";
import { DeleteECategory, GetECategory, UpdateECategory } from "../../functions/ECategories";
import { useDebounce } from 'use-debounce';
import Pagination from "../../components/_update/pagination";

function App() {
  const dispatch = useDispatch();
  const categoreis = useSelector((x: IReduxStore) => x.ECategories);
   const user = useSelector((x: IReduxStore) => x.User);

  const [_show, _setshow] = React.useState(false);
  const [_currentService, _setcurrentService] = React.useState<
    IECategory | undefined
  >();
  const [_IsEdit, _setIsEdit] = React.useState(false);
  const [page,setPage]=React.useState(0);
  const [search,setsearch]=React.useState('');
  const [value] = useDebounce(search, 1000);

  React.useEffect(() => {
    
         //@ts-ignore

    dispatch(GetECategory(page.toString(),value.length>0?value:undefined));
  }, [value,page]);

  const Update = (Id: number | undefined) => {
    let obj = categoreis.find((x) => x.id == Id);
    //@ts-ignore
    if (obj != undefined) {
      _setcurrentService(obj);
    }
  };
  const Delete = (Id: number | undefined) => {
    let obj = categoreis.find((x) => x.id == Id);
    //@ts-ignore
    if (obj != undefined) {
      _setcurrentService(obj);
      _setshow(true);
    }
  };
  return (
    <Layout title=" ">
      <div className="main-div">
        
        <div className="hdsf0s-sadmsa mt-3 p-an ml-0">
          <h5 className="cst-mx-0 ">E Commerce Categories</h5>
        </div>
      </div>

      <div className="d-flex justify-content-between kmsadockse-erl">
        <div className="box-shadow mt-3 p-3 w-100 nmkacjsf-asndfe">
          <h5 className="hd-5">Add New Category</h5>

          <div className="mt-4">
            <ECategoryForm
              PostData={() => {}}
              data={_currentService}
              setData={_setcurrentService}
            />
          </div>
        </div>
      </div>
      <div className="box-shadow p-4 mt-4 jhfadjsf-andsd w-100 justify-content-between d-flex flex-column">
        <div>
        <div className="d-flex align-items-center justify-content-between">
            <h5 className="hd-5">Categories List</h5>
            <Searchbar setsearch={setsearch} isBorder={true} />
          </div>
          <Table responsive borderless className="table-custom">
            <thead>
              <tr>
                 <th>Title</th>
                <th>Description</th>
                <th>Approved Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              { 
              categoreis.map((x: IECategory, i) => (
                <tr key={i}>
                  
                  <td><p>{x.title}</p></td>
                  <td className="mncais-ads"><p>{x.description}</p></td>
                  <td className="mncais-ads">
                    {x?.isApproved == true ? "Approved" : "Pending"}
                  </td>

                  <td className="d-flex manasjd-ajwe">
                    {
                      user?.isAdmin&&user.isAdmin==true?    <button
                      className={`btn ${
                        x?.isApproved==true ? "btn-danger" : "btn-success"
                      } mx-2`}
                      onClick={() => {
                        let formData = new FormData();
                        formData.append("Title", x.title);
                        formData.append("description", x.description);
                         formData.append("isApproved", x.isApproved==true?"false":"true");
                        //@ts-ignore
                        formData.append("recordUserId", user.id);
                        //@ts-ignore
                        formData.append("Id", x.id);
                        (async ()=>{
                        //@ts-ignore
                          let value=await  dispatch(UpdateECategory(formData));

                        })()
                      }}
                    >
                      {x?.isApproved ? "Reject" : "Approved"}
                    </button>:<></>
                    }
                
                    <button
                      className="btn btn-info mx-2"
                      onClick={() => Update(x?.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-warning mx-2"
                      onClick={() => Delete(x?.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
              }

            </tbody>
          </Table>
        </div>
        <Pagination setCurrentPage={setPage}/>

      </div>
      <Modal title="Confirm" show={_show} setShow={_setshow}>
        <>
          <p>
            Are You sure you wan't to delete this service !note this action will
            not be revoked
          </p>
          <div className="d-flex flex-row justify-content-end">
            <button onClick={() => _setshow(false)} className="btn btn-info">
              Cancel
            </button>
            <button
              onClick={() => {
                if (_currentService) {
                  _setshow(false);
                  //@ts-ignore
                  dispatch(DeleteECategory(_currentService));
                }
              }}
              className="btn btn-danger mx-2"
            >
              Confirm
            </button>
          </div>
        </>
      </Modal>
    </Layout>
  );
}

export default App;
