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
import { ICategory, ILogin, IService } from "../../interfaces/data/objects";
import { DeleteServices, GetServices } from "../../functions/Services";
import { DeleteCategory, GetCategory } from "../../functions/Categories";
import Modal from "../../components/_update/modal";
import CategoryForm from "../../components/_update/forms/categoryForm";
import { ImageUrl } from "../../utiles/baseUrl";
import { DeleteUser, GetUsers } from "../../functions/User";
import { useDebounce } from "use-debounce";
import Pagination from "../../components/_update/pagination";

function App() {
  const dispatch = useDispatch();
  const categoreis = useSelector((x: IReduxStore) => x.Users);
  const [_show, _setshow] = React.useState(false);
  const [_currentService, _setcurrentService] = React.useState<
    ILogin | undefined
  >();
  const [_IsEdit, _setIsEdit] = React.useState(false);
  const [page,setPage]=React.useState(0);
  const [search,setsearch]=React.useState('');
  const [value] = useDebounce(search, 1000);

  React.useEffect(() => {
    //@ts-ignore

    dispatch(GetUsers(page.toString(),value.length>0?value:undefined));
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
          <h5 className="cst-mx-0 ">All Users</h5>
        </div>
      </div>


      <div className="d-flex justify-content-between">
        <div className="box-shadow p-4 mt-4 jhfadjsf-andsd w-100 justify-content-between d-flex flex-column">
          <div>
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="hd-5">Users</h5>
              <Searchbar setsearch={setsearch} isBorder={true} />

            </div>
            <Table responsive borderless className="table-custom">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Full Name</th>
                  <th>User Name</th>
                  <th>Role</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {categoreis.map((x: ILogin, i) => (
                  <tr key={i}>
                    <td>
                      <img src={ImageUrl + x.image} />
                    </td>
                    <td>{x.fullName}</td>
                    <td className="mncais-ads">{x.mobileNumberEmail}</td>
                    <th className="d-flex   manasjd-ajwe">
                      {/* <button
                        className="btn btn-info"
                        onClick={() => Update(x?.id)}
                      >
                        Edit
                      </button> */}
                      <button
                        className="btn btn-warning"
                        onClick={() => Delete(x?.id)}
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <Pagination setCurrentPage={setPage}/>

        </div>
      </div>
      <Modal title="Confirm" show={_show} setShow={_setshow}>
        <>
          <p>
            Are You sure you wan't to delete this user !note this action will
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
                  dispatch(DeleteUser(_currentService));
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
