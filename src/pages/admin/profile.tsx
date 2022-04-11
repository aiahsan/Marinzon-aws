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
                  <div className="umpire w-100">
                    <div className="umpire-1 ">
                      <div>
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                      </div>
                      <div className="maxima">
                        <button className="upload-1">Upload New</button>
                        <button className="upload-1">Delete Photo</button>
                        <p>Maximum size of 1MB. JPG, GIF, or PNG.</p>
                      </div>
                    </div>
                  </div>
                  <div className="sdkahfsndj-sadsd">
                    <div className="label-bar-1">
                      <label className="mb-5cst"  >
                        First Name
                      </label>
                      <input type="text" placeholder="john" />
                    </div>
                    <div className="label-bar-1">
                      <label className="mb-5cst"  >
                        Last Name
                      </label>
                      <input type="text" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="sdkahfsndj-sadsd">
                  <div className="sdkahfsndj-sadsd">
                    <div className="label-bar-1">
                      <label className="mb-5cst"  >
                        Email
                      </label>
                      <input type="text" placeholder="@mail.com" />
                    </div>
                   
                  </div>
                    <div className="label-bar-1">
                      <label className="mb-5cst"  >
                        Phone No
                      </label>
                      <input type="text" placeholder="Ex. 123 456 789" />
                    </div>
                  </div>
                  <div className="sdkahfsndj-sadsd">
                    <div className="label-bar-1">
                      <label className="mb-5cst"  >
                        Website
                      </label>
                      <input
                        placeholder="ex. http://www.ballot.com"
                        type="text"
                      />
                    </div>
                    <div className="label-bar-1">
                      <label className="mb-5cst"  >
                        Language
                      </label>
                      <input type="text" placeholder="English" />
                    </div>
                  </div>
                  <div className="sdkahfsndj-sadsd">
                    <div className="label-bar-1 cst-text-p">
                      <label className="mb-5cst"  >
                        About Me
                      </label>
                      <textarea
                        rows={10}
                        placeholder="Write here...."
                         defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
