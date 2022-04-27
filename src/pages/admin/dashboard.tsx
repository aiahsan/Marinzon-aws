import DashboardCard from "../../components/dashboard/dashboardCard";
import Layout from "../../components/layout";
import { AiFillFolderOpen, AiFillCar } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import { BsStarFill } from "react-icons/bs";
 import AdminDashbord  from "../../components/dashboard/adminDashbord";
import OrderRow from "../../components/dashboard/adminDashbord";
import VendorDashbord from "../../components/dashboard/vendorDashbord";
import { useSelector } from "react-redux";
import { IReduxStore } from "../../interfaces/data/reduxStore";
function App() {
  const user=useSelector((x:IReduxStore)=>x.User)
  return (
    <Layout title="Admin Dashboard">
      {
        user?.isAdmin&&user?.isAdmin==true?<AdminDashbord/>:<VendorDashbord/>
      }
     </Layout>
  );
}

export default App;
