import React from "react";
import Layout from "../../components/layout";
import Searchbar from "../../components/_update/inputs/searchbar";
import { Table } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { RiLayoutGridFill, RiListCheck2 } from "react-icons/ri";
import ReviewCard from "../../components/_update/cards/reviewCard";
import ReportCard from "../../components/reportCard";
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
      <div className="hdsf0s-sadmsa my-4">
        <h3>Reports</h3>
        <div className="complete-web-1">
          
            <div className="hjsaisa-sdnjassd jsdif-dsndawje">
              <ReportCard sub="Bookings" title="Booking Report"/>
              <ReportCard sub="Sales" title="Sales Report"/>
            </div>
          </div>
      </div>
    </Layout>
  );
}

export default App;
