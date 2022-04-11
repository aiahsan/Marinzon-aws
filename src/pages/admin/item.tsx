import DashboardCard from "../../components/dashboard/dashboardCard";
import Layout from "../../components/layout";
import { AiFillFolderOpen, AiFillCar } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import Linechart from "../../components/chart";
import Searchbar from "../../components/searchbar";
import { Table } from "react-bootstrap";
import RightIcons from "../../components/rightIcons";
import Dropdown from "../../components/dropdown";
import Textbox from "../../components/textbox";
import Textarea from "../../components/textarea";
import TagInput from "../../components/taginput";
import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
//@ts-ignore
import Stepper from "react-stepper-horizontal";
import Taginput2 from "../../components/taginput2";
const MenuItems1 = [
  { title: "Category 1", onClick: () => alert() },
  { title: "Category 2", onClick: () => alert() },
  { title: "Category 2", onClick: () => alert() },
  { title: "Category 3", onClick: () => alert() },
];

function App() {
  const [tags, settags] = React.useState([]);
  const [_active, _setactive] = React.useState(0);
  const [suggestions, setsuggestions] = React.useState([
    { id: "Cleaning", text: "Cleaning" },
    { id: "Maintaining", text: "Maintaining" },
    { id: "Plumbring", text: "Plumbring" },
    { id: "Serive", text: "Serive" },
  ]);

  const handleDelete = (i: number) => {
    settags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag: string) => {
    //@ts-ignore
    settags([tag, ...tags]);
  };
  const GetForm = (form: any) => {
    switch (form) {
      case 0: {
        return (
          <div className="d-flex flex-wrap align-items-center">
            <div className="mt-4 kjfas-ijdsare">
              <Dropdown label="Select Service" items={MenuItems1} title="Service" />
            </div>
            <div className="mt-4 kjfas-ijdsare">
              <Dropdown label="Category" items={MenuItems1} title="Category" />
            </div>
            <div className="mt-1 kjfas-ijdsare">
              <Textbox label="Title" />
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
            <div className="mt-1 kjfas-ijdsare">
              <Textarea label="Description" />
            </div>
          </div>
        );
      }
      case 1: {
        return (
          <div className="mt-1">
            <div className="cst-textbox brd-none d-flex  justify-content-between align-items-center ">
              <p>Add Service Item with Price</p>
              <button
                className="btn sakdhsad-dsad"
                onClick={() => {
                  handleAddition("value");
                }}
              >
                <BsFillPlusCircleFill />
              </button>
            </div>
            <div className="d-flex flex-column">
              <TagInput title="" />
              {tags.map((x) => (
                <TagInput title="" />
              ))}
            </div>
          </div>
        );
      }
      case 2: {
        return (
          <>
            <div className="my-2 jasf-sadwqe">
              <p>What's included with this service?</p>
              <Taginput2 title="Service included" />
            </div>
            <div className="my-2 jasf-sadwqe">
              <Textarea label="What materials will the pro bring if the cleaning service is booked with materials?" />
              <Textarea label="How long does the service take?" />
              <Textarea label="What should I do if I want to increase the scope of my service ?" />
              <Textarea label="I have children and/or pets, is it safe?" />
              <Textarea label="Are the service providers’ Dubai Municipality approved? What chemical do you use?" />
              <Textarea label="Any important information that the provider needs to know?" />
            </div>
          </>
        );
      }
      default: {
        return <></>;
      }
    }
  };
  return (
    <Layout title="">
      <div className="main-div">
        <div className="hdsf0s-sadmsa mt-3">
          <h3>Add New Service Item</h3>
        </div>
      </div>
      <div className="d-flex flex-row mt-4">
        <div className="right-card px-4">
          <div className="box-shadow p-4">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="hd-5">Services</h5>
            </div>
            <div className="dsf-asdnasd">
              <Stepper
                activeColor="#111826"
                completeColor="#149dc7"
                defaultBarColor="#FFFFFF"
                completeBarColor="#a1a7bd"
                defaultTitleColor="#d6d6d6"
                activeBarColor="white"
                barStyle="solid"
                circleFontSize={16}
                steps={[
                  { title: "Service Information" },
                  { title: "Price" },
                  { title: "FAQ" },
                ]}
                activeStep={_active}
                className="sdsdsds"
              />
            </div>
            {GetForm(_active)}
            <div className="d-flex justify-content-end">
              {_active > 0 ? (
                <button
                  className="btn sakdhsad-dsad mx-3"
                  onClick={() => {
                    _setactive(_active - 1);
                  }}
                >
                  Previous
                </button>
              ) : (
                <></>
              )}
              {
                _active == 2 ? <button
                className="btn sakdhsad-dsad mx-3"
                onClick={() => {
                  if (_active < 2) {
                    _setactive(_active + 1);
                  }
                }}
              >
                {_active < 2 ? "" : "Preivew Before Upload"}
              </button>:<></>
              }
              <button
                className="btn sakdhsad-dsad"
                onClick={() => {
                  if (_active < 2) {
                    _setactive(_active + 1);
                  }
                }}
              >
                {_active < 2 ? "Next" : "Finish and Upload"}
              </button>
              
             
            </div>
          </div>
          {/* <div className="box-shadow p-4 mt-4">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="hd-5">Services</h5>
              <Searchbar isBorder={true} />
            </div>
            <Table responsive borderless className="table-custom">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Title</th>
                  <th>Text</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 5 }, (v, i) => (
                  <tr key={i}>
                    <td>Data {i}</td>
                    <td>Data {i}</td>
                    <td>Data {i}</td>
                    <th>
                      <button className="btn">Edit</button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </Table>
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
          </div> */}
        </div>
      </div>
    </Layout>
  );
}

export default App;
