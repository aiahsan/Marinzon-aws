import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  MdSpaceDashboard,
  MdDarkMode,
  MdOutlineDarkMode,
  MdHomeRepairService,
  MdFeaturedPlayList,
  MdOutlineSpaceDashboard,
  MdOutlineHomeRepairService,
  MdOutlineCategory,
  MdList,
  MdOutlineSupervisedUserCircle,
  MdOutlineBook,
  MdOutlineRateReview,
  MdOutlineReportGmailerrorred,
  MdOutlineProductionQuantityLimits,
  MdOutlineStoreMallDirectory,
} from "react-icons/md";
import { AiFillFolderOpen, AiFillCar } from "react-icons/ai";
import { GiBookmarklet, GiCaptainHatProfile, GiPoliceOfficerHead } from "react-icons/gi";
import { HiDocumentReport, HiTemplate } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { GrBook, GrList } from "react-icons/gr";
import Switch from "react-switch";
import { useChangeTheme } from "../../../theme/hook";
import { ThemeContext } from "../../../App";
import { BiUserCircle } from "react-icons/bi";
import { RiListCheck2 } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { LogOutAction } from "../../../redux/actionMethodes/user";
import { IReduxStore } from "../../../interfaces/data/reduxStore";

export default ({ collapsed }: { collapsed: boolean }) => {
  const history = useHistory();
  const user=useSelector((x:IReduxStore)=>x.User);
  const documents=useSelector(((x:any)=>x.Document));
   const dispatch=useDispatch();
  console.log(user,"ssss")
   return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <ProSidebar
          // image={image ? sidebarBg : false}
          collapsed={collapsed}
          toggled={false}
          breakPoint="xl"
          className={`${theme == "light" ? "themeLight" : "themeDark"}`}
        >
          <SidebarHeader>
            <div className="nkdsf0-kemw">
            <img src="/Marinzon Final logo-01.png" />
            </div>
          </SidebarHeader>

          <SidebarContent>
            <Menu iconShape="circle">
              <MenuItem
                onClick={() => history.push("/")}
                icon={<MdOutlineSpaceDashboard color="#4a4a4a" fontSize={18} />}
              >
                Dashboard
              </MenuItem>
              {
             user?.isAdmin==false? <>
            <h5>Documents</h5>
            
               <MenuItem
                onClick={() => history.push("/myapplication")}
                icon={<MdOutlineHomeRepairService color="#4a4a4a" fontSize={18} />}
              >
                Submitted Application
              </MenuItem>
              
            </> 
            :<></>
            }
          
          {
            <>
                        <h5>Services</h5>

            {documents[0]?.user?.isVendorActivityCompletedandVerfied==true&& documents[0]?.user?.isVerified==true?<>
              {
              user?.isAdmin&&user.isAdmin==true? <>
            
               <MenuItem
                onClick={() => history.push("/services")}
                icon={<MdOutlineHomeRepairService color="#4a4a4a" fontSize={18} />}
              >
                Services
              </MenuItem>
              
            </> 
            :<></>
            }
           
           <MenuItem
              onClick={() => history.push("/category")}
              icon={<MdOutlineCategory color="#4a4a4a" fontSize={18} />}
            >
              Categories
            </MenuItem>
              <MenuItem
                onClick={() => history.push("/item")}
                icon={<RiListCheck2 color="#4a4a4a" fontSize={18} />}
              >
                Service Item
              </MenuItem>
              <MenuItem
                onClick={() => history.push("/myservices")}
                icon={<MdList color="#4a4a4a" fontSize={18} />}
              >
                My Services
              </MenuItem>
              <h5>E commerce</h5>
              <MenuItem
              onClick={() => history.push("/ecategory")}
              icon={<MdOutlineCategory color="#4a4a4a" fontSize={18} />}
            >
              Categories
            </MenuItem>
               <MenuItem
              onClick={() => history.push("/eproducts")}
              icon={<MdOutlineProductionQuantityLimits color="#4a4a4a" fontSize={18} />}
            >
              Products
            </MenuItem>
            <MenuItem
              onClick={() => history.push("/eorders")}
              icon={<MdOutlineStoreMallDirectory color="#4a4a4a" fontSize={18} />}
            >
              Orders
            </MenuItem>
              {

              user?.isAdmin&&user.isAdmin==true?<>
         
            <MenuItem
              onClick={() => history.push("/coupons")}
              icon={<MdOutlineStoreMallDirectory color="#4a4a4a" fontSize={18} />}
            >
              Coupons
            </MenuItem>
              </>:<></>
            }
              {
              user?.isAdmin&&user.isAdmin==true?<>
              <h5>Vendors</h5>
              <MenuItem
              onClick={() => history.push("/vendors")}
              icon={<MdOutlineSupervisedUserCircle color="#4a4a4a" fontSize={18} />}
            >
              Vendors
            </MenuItem>
            <h5>User</h5>
              <MenuItem
              onClick={() => history.push("/users")}
              icon={<MdOutlineSupervisedUserCircle color="#4a4a4a" fontSize={18} />}
            >
              Users
            </MenuItem>
            
              </>:<></>
            }
               <MenuItem
                onClick={() => history.push("/profile")}
                icon={<BiUserCircle color="#4a4a4a" fontSize={20} />}
              >
                Profile
              </MenuItem>

              <h5>Bookings</h5>

              <MenuItem
                onClick={() => history.push("/bookings")}
                icon={<MdOutlineBook color="#4a4a4a" fontSize={18} />}
              >
                Bookings
              </MenuItem>
             
              <MenuItem
                onClick={() => history.push("/reviews")}
                icon={<MdOutlineRateReview color="#4a4a4a" fontSize={18} />}
              >
                Reviews
              </MenuItem>
              {
              user?.isAdmin&&user.isAdmin==true?  
              <>
                            <h5>Reports</h5>


              <MenuItem
              onClick={() => history.push("/reports")}
              className="anjasd-awenw"
              icon={<MdOutlineReportGmailerrorred color="#4a4a4a" fontSize={18} />}
            >
              Reports
            </MenuItem>
            </>
            :<></>
            }
            </>:<></>}
            </>
          }
             
{/* 
              <MenuItem
                icon={
                  theme == "dark" ? (
                    <MdDarkMode color="#4a4a4a" fontSize={20} />
                  ) : (
                    <MdOutlineDarkMode color="#4a4a4a" fontSize={20} />
                  )
                }
              >
                <Switch
                  className="jdsfosae-waejw"
                  onChange={() => {
                    toggleTheme(theme == "light" ? "dark" : "light");
                  }}
                  checked={theme == "light" ? true : false}
                />
              </MenuItem> */}
            </Menu>
          </SidebarContent>

          <SidebarFooter style={{ textAlign: "center" }}>
            <button className="btn w-100 btn-main" onClick={()=>{
              dispatch(LogOutAction())
              history.push('/')
            }}>Log out</button>
            {/* <button className="btn w-100 btn-main-light"></button> */}
          </SidebarFooter>
        </ProSidebar>
      )}
    </ThemeContext.Consumer>
  );
};
