import DashboardCard from "../../components/dashboard/dashboardCard";
import Layout from "../../components/layout";
import { AiFillFolderOpen, AiFillCar } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import Linechart from "../../components/chart";
import Searchbar from "../../components/_update/inputs/searchbar";
import { Table } from "react-bootstrap";
import RightIcons from "../../components/rightIcons";
import Dropdown from "../../components/dropdown";
import Textbox from "../../components/textbox";
import Textarea from "../../components/textarea";
import TagInput from "../../components/_update/inputs/taginput";
import ProfileForm from "../../components/_update/forms/profileForm";
const MenuItems1 = [
  { title: "Category 1", onClick: () => alert() },
  { title: "Category 2", onClick: () => alert() },
  { title: "Category 2", onClick: () => alert() },
  { title: "Category 3", onClick: () => alert() },
];

function App() {
  return (
    <Layout title="">
        <div className="hdsf0s-sadmsa mt-3">
               
              <h3>Profile</h3>
            </div>
      <div className="d-flex flex-row mt-4">
        <div className="right-card px-4">
          <div className="box-shadow p-4">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="hd-5">Profile</h5>
            </div>
          
            <div className="complete-web-1">
                  
                  <ProfileForm PostData={()=>{}}/>
                </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
