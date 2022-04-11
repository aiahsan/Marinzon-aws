import ServiceCard from "../../components/ServiceCard";
import Layout from "../../components/layout";
import ProductCard from "../../components/ProductCard";
import TagInput from "../../components/taginput";
import Dropdown from "../../components/dropdown";
import Textbox from "../../components/textbox";
import Textarea from "../../components/textarea";
import Searchbar from "../../components/searchbar";
import { Table } from "react-bootstrap";
const MenuItems1 = [
  { title: "Category 1", onClick: () => alert() },
  { title: "Category 2", onClick: () => alert() },
  { title: "Category 2", onClick: () => alert() },
  { title: "Category 3", onClick: () => alert() },
];

function App() {
  return (
    <Layout title=" ">
      <div className="main-div">
        <div className="hdsf0s-sadmsa mt-3">
          <h3>Categories</h3>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <div className="box-shadow mt-3 p-3 w-100 nmkacjsf-asndfe">
          <h5 className="hd-5">Add New Category</h5>

          <div className="mt-4">
            <div className="mt-1 kjfas-ijdsare">
              <Dropdown
                label="Select Service"
                items={MenuItems1}
                title="Service"
              />
            </div>
            <div className="mt-1 kjfas-ijdsare">
              <Textbox label="Title" />
            </div>
            <div className="mt-1 kjfas-ijdsare">
              <Textarea label="Description" />
            </div>

            <div className="d-flex justify-content-end my-4">
              <button className="btn sakdhsad-dsad">Add New Service</button>
            </div>
          </div>
        </div>
        <div className="box-shadow p-4 mt-4 jhfadjsf-andsd w-100 justify-content-between d-flex flex-column">
          <div>
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="hd-5">Categories List</h5>
              <Searchbar isBorder={true} />
            </div>
            <Table responsive borderless className="table-custom">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 5 }, (v, i) => (
                  <tr key={i}>
                    <td>Data {i}</td>
                    <td>Data {i}</td>
                    <td className="mncais-ads">Data {i}</td>
                    <th className="d-flex   manasjd-ajwe">
                      <button className="btn btn-info">Edit</button>
                      <button className="btn btn-warning">Delete</button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="d-flex justify-content-end pagination-container">
            <button className="btn cst-none">Previous</button>
            <div className="d-flex pagination-number-container">
              <button className="btn">1</button>
              <button className="btn active">2</button>
              <button className="btn">3</button>
              <button className="btn">4</button>
              <button className="btn mag-18">5</button>
            </div>
            <button className="btn cst-none">Next</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
