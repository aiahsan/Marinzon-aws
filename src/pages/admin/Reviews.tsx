import React from "react";
import Layout from "../../components/layout";
import Searchbar from "../../components/searchbar";
import { Table } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { RiLayoutGridFill, RiListCheck2 } from "react-icons/ri";
import ReviewCard from "../../components/reviewCard";
const MenuItems1 = [
  { title: "Category 1", onClick: () => alert() },
  { title: "Category 2", onClick: () => alert() },
  { title: "Category 2", onClick: () => alert() },
  { title: "Category 3", onClick: () => alert() },
];

function App() {
  const [view, setView] = React.useState(0);

  return (
    <Layout title="">
      <div className="hdsf0s-sadmsa">
        <h3>Reviews Given</h3>
        <div className="d-flex justify-content-end">
          <button
            className="btn"
            onClick={() => {
              setView(0);
            }}
          >
            <RiLayoutGridFill size={25} />
          </button>
          <button
            className="btn"
            onClick={() => {
              setView(1);
            }}
          >
            <RiListCheck2 size={25} />
          </button>
        </div>

        {view == 1 ? (
          <div className="box-shadow p-4 mt-4 jhfadjsf-andsd w-100 justify-content-between d-flex flex-column">
            <div>
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="hd-5">All Reviews List</h5>
                <Searchbar isBorder={true} />
              </div>
              <Table responsive borderless className="table-custom">
                <thead>
                  <tr>
                    <th>User Phone / Email</th>
                    <th>Review</th>
                    <th>Ratting</th>
                    <th>Service Item</th>

                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 5 }, (v, i) => (
                    <tr key={i}>
                      <td>Data {i}</td>
                      <td>Data {i}</td>
                      <td className="mncais-ads">Data {i}</td>
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
        ) : (
          <div className="complete-web-1">
            <div className="umpire w-100">
              <div className="umpire-1 umpire-1-cst">
                <div className="ratio-bar">
                  <h3>4.9</h3>
                  <p>out of</p>
                  <h3 className="ml-9">5</h3>
                  <div className="lasjdsad-sdjsa ksjadas">
                    <FaStar color="#FF981E" />
                    <FaStar color="#FF981E" />
                    <FaStar color="#FF981E" />
                    <FaStar color="#FF981E" />
                    <FaStar color="#FF981E" />
                  </div>
                  <h6>4.8(151)</h6>
                </div>
              </div>
            </div>
            <div className="hjsaisa-sdnjassd jsdif-dsndawje">
              <ReviewCard/>
              <ReviewCard/>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default App;
