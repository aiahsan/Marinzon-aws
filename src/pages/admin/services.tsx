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
          <h3>Recent Services</h3>
        </div>
      </div>
      <div className="d-flex   flex-wrap">
        <ServiceCard
          bg="#f3f2f4"
          title={"Electrical"}
          desc="Lorem Ipsum is simply dummy text"
          img="/service-2.png"
        />
        <ServiceCard
          bg="#f3f2f4"
          title={"Boat / Yacht Care"}
          desc="Lorem Ipsum is simply dummy text"
          img="/service-2.png"
        />
        <ServiceCard
          bg="#f3f2f4"
          title={"Mehanic"}
          desc="Lorem Ipsum is simply dummy text"
          img="/service-2.png"
        />
      </div>
      <div className="d-flex justify-content-between">
        <div className="box-shadow mt-3 p-3 w-100 nmkacjsf-asndfe">
          <h5 className="hd-5">Add New Service</h5>

          <div className="">
            <div className="mt-1 kjfas-ijdsare">
              <Textbox label="Title" />
            </div>
            <div className="mt-1 kjfas-ijdsare">
              <Textarea label="Description" />
            </div>
            <div className="mt-1 kjfas-ijdsare">
              <div className="cst-textbox brd-none d-flex flex-column  ">
                <p> Upload Background Image</p>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="saidasd-sd"
                  src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                />
              </div>
            </div>
            <div className="d-flex justify-content-end my-4">
              <button className="btn sakdhsad-dsad">Add New Service</button>
            </div>
          </div>
        </div>
        <div className="box-shadow p-4 mt-4 jhfadjsf-andsd w-100 justify-content-between d-flex flex-column">
          <div>
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="hd-5">Services List</h5>
              <Searchbar isBorder={true} />
            </div>
            <Table responsive borderless className="table-custom">
              <thead>
                <tr>
                  <th>Image</th>
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
