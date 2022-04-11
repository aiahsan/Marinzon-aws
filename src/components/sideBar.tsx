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
} from "react-icons/md";
import { AiFillFolderOpen, AiFillCar } from "react-icons/ai";
import { GiBookmarklet, GiCaptainHatProfile, GiPoliceOfficerHead } from "react-icons/gi";
import { HiDocumentReport, HiTemplate } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { GrBook, GrList } from "react-icons/gr";
import Switch from "react-switch";
import { useChangeTheme } from "../theme/hook";
import { ThemeContext } from "../App";
import { BiUserCircle } from "react-icons/bi";
import { RiListCheck2 } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";

export default ({ collapsed }: { collapsed: boolean }) => {
  const history = useHistory();

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
            <img src="/Marinzon Final logo-01.png" />
          </SidebarHeader>

          <SidebarContent>
            <Menu iconShape="circle">
              <MenuItem
                onClick={() => history.push("/home")}
                icon={<MdSpaceDashboard color="#4a4a4a" fontSize={20} />}
              >
                Dashboard
              </MenuItem>
              <MenuItem
                onClick={() => history.push("/services")}
                icon={<MdHomeRepairService color="#4a4a4a" fontSize={20} />}
              >
                Services
              </MenuItem>

              <MenuItem
                onClick={() => history.push("/category")}
                icon={<MdFeaturedPlayList color="#4a4a4a" fontSize={20} />}
              >
                Categories
              </MenuItem>

              <MenuItem
                onClick={() => history.push("/item")}
                icon={<RiListCheck2 color="#4a4a4a" fontSize={20} />}
              >
                Service Item
              </MenuItem>
              <MenuItem
                onClick={() => history.push("/myservices")}
                icon={<HiDocumentReport color="#4a4a4a" fontSize={20} />}
              >
                My Services
              </MenuItem>
              <MenuItem
                onClick={() => history.push("/users")}
                icon={<FaUsers color="#4a4a4a" fontSize={20} />}
              >
                Users
              </MenuItem>

              <MenuItem
                onClick={() => history.push("/bookings")}
                icon={<GiBookmarklet color="#4a4a4a" fontSize={20} />}
              >
                Bookings
              </MenuItem>
              <MenuItem
                onClick={() => history.push("/profile")}
                icon={<BiUserCircle color="#4a4a4a" fontSize={20} />}
              >
                Profiles
              </MenuItem>
              <MenuItem
                onClick={() => history.push("/reviews")}
                icon={<GrBook color="#4a4a4a" fontSize={20} />}
              >
                Reviews
              </MenuItem>
              <MenuItem
                onClick={() => history.push("/reports")}
                icon={<HiTemplate color="#4a4a4a" fontSize={20} />}
              >
                Reports
              </MenuItem>
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
            <button className="btn w-100 btn-main">Log out</button>
            {/* <button className="btn w-100 btn-main-light"></button> */}
          </SidebarFooter>
        </ProSidebar>
      )}
    </ThemeContext.Consumer>
  );
};
