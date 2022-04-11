 import React from 'react';
 import Layout from "../../components/layout";
 
import BookingCard from "../../components/BookingCard";
import { RiLayoutGridFill, RiListCheck2 } from 'react-icons/ri';
import { Table } from 'react-bootstrap';
import Searchbar from '../../components/searchbar';
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
        <div className="hdsf0s-sadmsa mt-3">
               
              <h3>Bookings</h3>
            </div>
            <div className='d-flex justify-content-end'>
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
              <h5 className="hd-5">Booking List</h5>
              <Searchbar isBorder={true} />
            </div>
            <Table responsive borderless className="table-custom">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Category</th>
                  <th>Service Item</th>
                  <th>Service By</th>
                  <th>Booking Date / Time</th>
                  <th>Booking Status</th>
                  
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
                  <BookingCard />
                  <BookingCard />
                  
                </div>
      )}
           
    </Layout>
  );
}

export default App;