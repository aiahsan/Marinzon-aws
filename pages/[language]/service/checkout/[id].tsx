import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CategoryCard from "../../../../src/components/cards/CategoryCard";
import EasyCard from "../../../../src/components/cards/EasyCard";
import ServiceCard from "../../../../src/components/cards/ServiceCard";
import Navbar from "../../../../src/components/header/Navbar";
import Topbar from "../../../../src/components/header/Topbar";
import Heading from "../../../../src/components/headings/Heading";
import Footer from "../../../../src/components/footer/Footer";
import styles from "../../styles/Home.module.css";
import CategoryAccordian from "../../../../src/components/generic/CategoryAccordian";
import ProductCard from "../../../../src/components/cards/ProductCard";
import Searchbar from "../../../../src/components/generic/Searchbar";
import { BsFillStarFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { IReduxStore } from "../../../../src/interfaces/data/reduxStore";
import { useRouter } from "next/router";
import moment from "moment";
import { messageAction } from "../../../../src/redux/actionMethodes/message";
import { type } from "os";
import { addBookingAM } from "../../../../src/redux/actionMethodes/Booking";
import { AddBookings } from "../../../../src/functions/Booking";
 const Home: NextPage = () => {
  const router = useRouter();
  const { language } = router.query;
  const [_dates, _setdates] = React.useState([]);
  const [_times, _setTimes] = React.useState([]);
  const [_sDate, _setSdate] = React.useState();
  const [_sDate1, _setSdate1] = React.useState();
  const [_BookingInstructions, _setBookingInstructions] = React.useState("");

  const Language = useSelector((x) => x.Language);
  const user=useSelector((x:IReduxStore)=>x.User);
  const dispatch=useDispatch();
  const _CurrentBooking = useSelector((x: IReduxStore) => x.CurrentBooking);
  React.useEffect(() => {
    if (_CurrentBooking != null) {
      console.log(_CurrentBooking,"sssss")
     } else {
      language != undefined
        ? router.push("/" + Language + "/")
        : router.push("/en-AE/");
    }
  }, []);
  return (
    <div>
      <div className=" ">
        <Topbar />
        <Navbar />
      </div>

      <section className="container mt-5 mb-5">
        <h1 className="text-center">Date & Time</h1>
        <div className="row">
          <div className="col-md-8">
            <div className="card p-4">
              <div className="my-4">
                <h4>When would you like your service?</h4>
                <div className="d-flex kjadss-dksiamedj flex-wrap">
                  {Array.from({ length: 7 }, (x, i) => {
                    return (
                      <div className="d-flex flex-column align-items-center mx-3 flex-wrap my-2">
                        <p>{moment().add(i).format("ddd")}</p>
                        <button
                          onClick={() => {
                            _setSdate(i + 1);
                          }}
                          className={`${
                            i + 1 == _sDate ? "act" : ""
                          } ndsfnosp-erf`}
                        >
                          {i + 1}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="my-4">
                <h4>What time would you like us to start?</h4>
                <div className="d-flex kjadss-dksiamedj flex-wrap">
                  {Array.from({ length: 7 }, (x, i) => {
                    return (
                      <div className="d-flex flex-column align-items-center mx-3 flex-wrap my-2">
                        <button
                          onClick={() => {
                            _setSdate1(i + 1);
                          }}
                          className={`${
                            i + 1 == _sDate1 ? "act" : ""
                          } nkasdfods-eamdew`}
                        >
                          {i + 10 + ":00-" + (i + 11)}
                        </button>
                      </div>
                    );
                  })}
                </div>
                <p className="my-3">
                  Your professional will arrive between 10:00-11:00
                </p>
              </div>
              <div className="my-4">
                <h4>Do you have any specific instructions?</h4>
                <textarea
                onChange={(e)=>_setBookingInstructions(e.target.value)}
                  className="mskcla-ajwewfar"
                  placeholder="Describe your symptoms, or existing medications. Do you have any existing allergies? Etc."
                >
                  {_BookingInstructions}
                </textarea>
              </div>
              <button className="btn btn-primary" onClick={()=>{
                  if(user!=null)
                  {
                     
                      dispatch(AddBookings({
                        serviceItemId:_CurrentBooking?.serviceItemId,
                        bookerId:user.id,
                        RecordUserId:user.id,
                        bookingDateTime:new Date(),
                        bookingTime:"10:00-11:00",
                        bookingInstructions:_BookingInstructions,
                        bookingItemsstring:JSON.stringify(_CurrentBooking?.bookingItems)
                      },router))
                      
                  }
                  else
                  {
                    dispatch(messageAction(
                      {
                        type:3,
                        message:"Login to your account first to make booking"
                      }
                    ))
                  }

              }}>Book Now</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4">
              <div className="d-flex justify-content-between nasdklas-3ne">
                <p>CITY</p>

                <h5>DUBAI</h5>
              </div>
              <div className="nasdklas-3ne my-3">
                <div>
                  <p>SERVICE DETAILS</p>
                </div>
                <div className="d-flex justify-content-between my-2 w-100">
                  <p>1x {_CurrentBooking?.title}</p>
                  <p>
                    <strong>
                      AED{" "}
                      {_CurrentBooking?.bookingItems
                        .map((x) => x?.Price)
                        .reduce((a, b) => parseInt(a) + parseInt(b), 0)}
                    </strong>
                  </p>
                </div>
              </div>
              <div className="nasdklas-3ne my-3">
                <div>
                  <p>DATE & TIME</p>
                </div>
                <div className="d-flex justify-content-between my-2 w-100">
                  <p>Date</p>
                  <p>
                    <strong>Friday, April 29</strong>
                  </p>
                </div>
                <div className="d-flex justify-content-between my-2 w-100">
                  <p>Start Time</p>
                  <p>
                    <strong>10:00-11:00</strong>
                  </p>
                </div>
              </div>
              <div className="nasdklas-3ne my-3">
                <div>
                  <p>ADDRESS</p>
                </div>
                <div className="d-flex justify-content-between my-2 w-100">
                  <p>
                    <strong>دبي مارينا, Dubai</strong>
                  </p>
                </div>
              </div>
              <div className="nasdklas-3ne my-3">
                <div>
                  <p>PRICE DETAILS</p>
                </div>
                <div className="d-flex justify-content-between  w-100">
                  <p>Price</p>
                  <p>
                    <strong>
                      AED{" "}
                      {_CurrentBooking?.bookingItems
                        .map((x) => x?.Price)
                        .reduce((a, b) => parseInt(a) + parseInt(b), 0)}
                    </strong>
                  </p>
                </div>
                <div className="d-flex justify-content-between  w-100">
                  <p>Total</p>
                  <p>
                    <strong>
                      AED{" "}
                      {_CurrentBooking?.bookingItems
                        .map((x) => x?.Price)
                        .reduce((a, b) => parseInt(a) + parseInt(b), 0)}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
