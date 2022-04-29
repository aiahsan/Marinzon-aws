import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CategoryCard from "../../../src/components/cards/CategoryCard";
import EasyCard from "../../../src/components/cards/EasyCard";
import ServiceCard from "../../../src/components/cards/ServiceCard";
import Navbar from "../../../src/components/header/Navbar";
import Topbar from "../../../src/components/header/Topbar";
import Heading from "../../../src/components/headings/Heading";
import Footer from "../../../src/components/footer/Footer";
import styles from "../styles/Home.module.css";
import CategoryAccordian from "../../../src/components/generic/CategoryAccordian";
import ProductCard from "../../../src/components/cards/ProductCard";
import Searchbar from "../../../src/components/generic/Searchbar";
import { useEffect } from "react";
import router from "next/router";
import { useIntl } from "react-intl";

const Home: NextPage = () => {
  const intl = useIntl();

  return (
    <div>
      <div className=" ">
        <Topbar />
        <Navbar />
      </div>
      <div className="signupscreen1" style={{maxWidth:400}}>
        <section className="container-2">
          <div className="images-2">
            <img src="assets\images\gallery-2-removebg-preview.png" alt="" />
          </div>
          <div className="create">
            <div className="create-1">
              <h3>Select a service address</h3>
              <h5>Add a new address</h5>
            </div>
            <div>
              <label className="name"  >
              Country/region

              </label>{" "}
              <br />
              <select value={"United Arab Emirates"} className=" form-control"  >
                <option  >United Arab Emirates</option>
               </select>
            </div>
            <div className="mt-2">
              <label className="name"  >
                Mobile number:
              </label>{" "}
              <br />
              <div className="d-flex w-100">
              <select className="mob form-control"   >
                <option  >+971</option>
                <option  >+972</option>
              </select>
              <input
              style={{maxWidth:240}}
                className="mob-1"
                type="text"
                placeholder="Molile Number"
              />
              </div>
              <br />
              <span>
                <a className="email" href="#">
                  Use your email instead
                </a>
              </span>
            </div>
            <div className="mt-2">
              <label className="name"  >
              Full name (First and Last name)

              </label>{" "}
              <br />
              <div className=" ">
              
              <input
                className="form-control"
                type="text"
                
              />
              </div>
             
            </div>
            <div className="mt-2">
              <label className="name"  >
              Street name

              </label>{" "}
              <br />
              <div className=" ">
              
              <input
                className="form-control"
                type="text"
                placeholder="e.g. Omar Ibn Al Khattab Street"
              />
              </div>
             
            </div>
            <div className="mt-2">
              <label className="name"  >
              Building name/no., floor, Apt. or villa no.


              </label>{" "}
              <br />
              <div className=" ">
              
              <input
                className="form-control"
                type="text"
                placeholder="e.g. Princess Tower,5th floor,Apt 5023"
              />
              </div>
             
            </div>
            <div>
              <label className="name"  >
             City

              </label>{" "}
              <br />
              <select value={"United Arab Emirates"} className=" form-control"  >
                <option  >City</option>
               </select>
            </div>
            <div className="mt-2">
              <label className="name"  >
              Area/district
              </label>{" "}
              <br />
              <div className=" ">
              
              <input
                className="form-control"
                type="text"
                placeholder="e.g. Princess Tower,5th floor,Apt 5023"
              />
              </div>
             
            </div>
            <div className="mt-2">
              <label className="name"  >
              Nearest landmark
              </label>{" "}
              <br />
              <div className=" ">
              
              <input
                className="form-control"
                type="text"
                placeholder="e.g. Princess Tower,5th floor,Apt 5023"
              />
              </div>
             
            </div>
            <div className="mt-2">
              <label className="name"  >
              Add a delivery instructions
              </label>{" "}
              <br />
              <div className=" ">
              
              <input
                className="form-control"
                type="text"
                placeholder="e.g. Princess Tower,5th floor,Apt 5023"
              />
              </div>
             
            </div>
            <button className="btn btn-warning w-100 my-4" style={{color:'white'}}>Add Address and Continue</button>
             
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
