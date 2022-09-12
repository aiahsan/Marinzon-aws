import React from "react";
import ServiceCard from "../../components/_update/cards/ServiceCard";
import Layout from "../../components/layout";
import ProductCard from "../../components/_update/cards/ProductCard";
import TagInput from "../../components/_update/inputs/taginput";
import Dropdown from "../../components/dropdown";
import Textbox from "../../components/textbox";
import Textarea from "../../components/textarea";
import Searchbar from "../../components/_update/inputs/searchbar";
import { Accordion, Table } from "react-bootstrap";
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
import { GetEVendor } from "../../functions/EVendor";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { useDebounce } from "use-debounce";
import Pagination from "../../components/_update/pagination";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const categoreisx = useSelector((x: any) => x.Vendors);
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

    dispatch(GetEVendor(page.toString(),value.length>0?value:undefined));
  },  [value,page]);
  

  return (
    <Layout title=" ">
      <div className="main-div">
        <div className="hdsf0s-sadmsa mt-3 p-an ml-0">
          <h5 className="cst-mx-0 ">All Vendors</h5>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <div className="box-shadow p-4 mt-4 jhfadjsf-andsd w-100 justify-content-between d-flex flex-column">
          <div>
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="hd-5">Vendors</h5>
              <Searchbar setsearch={setsearch} isBorder={true} />
            </div>

            <Accordion className="my-4">
              {categoreisx.map((x: any, i: number) => (
                <>
                  <Accordion.Item eventKey={i.toString()}>
                    <Accordion.Header>
                      <div className="d-flex">
                        <img src={ImageUrl + x.image} className="mx-3" />
                        <h5>{x.fullName}</h5>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Table responsive borderless className="table-custom">
                        <thead>
                          <tr>
                            <th className="text-center">Application Type</th>
                            <th className="text-center">Application Status</th>
                            <th className="text-center">Remarks</th>
                            <th className="text-center">Submitted Date</th>
                            <th className="text-center">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {x?.storeDetails[0] ? (
                            <tr>
                              <td>Store Details</td>
                              <td>
                                {x?.storeDetails[0]?.isApproved == true
                                  ? "Approved"
                                  : "Pending"}
                              </td>
                              <td>
                                {x?.storeDetails[0]?.remarks ||
                                  "Your Application is under review"}
                              </td>
                              <td>
                                {moment(x?.storeDetails[0]?.createAt).format(
                                  "DD-MM-yyyy"
                                ) || ""}
                              </td>
                              {x?.storeDetails[0]?.isApproved == true ? (
                                <td></td>
                              ) : (
                                <td>
                                  <button
                                    className="btn btn-info mx-2"
                                    onClick={() => {
                                      history.push({
                                        pathname: "/edit/application",
                                        state: {
                                          data: {
                                            ...x?.storeDetails[0],
                                            user:x,
                                            type:1
                                          },
                                        },
                                      });
                                    }}
                                  >
                                    Edit
                                  </button>
                                </td>
                              )}
                            </tr>
                          ) : (
                            <td></td>
                          )}
                          {x?.document[0] ? (
                            <tr>
                              <td>Document Details</td>
                              <td>
                                {x?.document[0].isApproved == true
                                  ? "Approved"
                                  : "Pending"}
                              </td>

                              <td>
                                {x?.document[0]?.remarks ||
                                  "Your Application is under review"}
                              </td>
                              <td>
                                {moment(x?.document[0]?.createAt).format(
                                  "DD-MM-yyyy"
                                ) || ""}
                              </td>
                              {x?.document[0]?.isApproved == true ? (
                                <td></td>
                              ) : (
                                <td>
                                  <button
                                    className="btn btn-info mx-2"
                                    onClick={() => {
                                      history.push({
                                        pathname: "/edit/application",
                                        state: {
                                          data: { ...x?.document[0],
                                              user:x,
                                            type:2 },
                                        },
                                      });
                                    }}
                                  >
                                    Edit
                                  </button>
                                </td>
                              )}
                            </tr>
                          ) : (
                            <td></td>
                          )}
                          {x?.bankDetails[0] ? (
                            <tr>
                              <td>Bank Details</td>
                              <td>
                                {x?.bankDetails[0]?.isApproved == true
                                  ? "Approved"
                                  : "Pending"}
                              </td>

                              <td>
                                {x?.bankDetails[0]?.remarks ||
                                  "Your Application is under review"}
                              </td>
                              <td>
                                {moment(x?.bankDetails[0]?.createAt).format(
                                  "DD-MM-yyyy"
                                ) || ""}
                              </td>
                              {x?.bankDetails[0]?.isApproved == true ? (
                                <td></td>
                              ) : (
                                <td>
                                  <button
                                    className="btn btn-info mx-2"
                                    onClick={() => {
                                      history.push({
                                        pathname: "/edit/application",
                                        state: {
                                          data: {
                                            ...x?.bankDetails[0],
                                            user:x,
                                            type:3
                                          },
                                        },
                                      });
                                    }}
                                  >
                                    Edit
                                  </button>
                                </td>
                              )}
                            </tr>
                          ) : (
                            <td></td>
                          )}

                          {x?.vat[0] ? (
                            <tr>
                              <td>Vat Details</td>
                              <td>
                                {x?.vat[0]?.isApproved == true
                                  ? "Approved"
                                  : "Pending"}
                              </td>

                              <td>
                                {x?.vat[0]?.remarks ||
                                  "Your Application is under review"}
                              </td>
                              <td>
                                {moment(x?.vat[0]?.createAt).format(
                                  "DD-MM-yyyy"
                                ) || ""}
                              </td>
                              <td>
                                {x?.vat[0]?.isApproved == true ? (
                                  <td></td>
                                ) : (
                                  <td>
                                    <button
                                      className="btn btn-info mx-2"
                                      onClick={() => {
                                        history.push({
                                          pathname: "/edit/application",
                                          state: {
                                            data: { ...x?.vat[0],
                                              user:x,
                                            type:4
                                            },
                                          },
                                        });
                                      }}
                                    >
                                      Edit
                                    </button>
                                  </td>
                                )}
                              </td>
                            </tr>
                          ) : (
                            <td></td>
                          )}
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                </>
              ))}
            </Accordion>
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
