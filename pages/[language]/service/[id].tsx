import React from "react";
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
import styles from "../../styles/Home.module.css";
import CategoryAccordian from "../../../src/components/generic/CategoryAccordian";
import ProductCard from "../../../src/components/cards/ProductCard";
import Searchbar from "../../../src/components/generic/Searchbar";
import { BsFillStarFill } from "react-icons/bs";
import { useIntl } from "react-intl";
import router, { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { repository } from "../../../src/utiles/repository";
import { loadingAction } from "../../../src/redux/actionMethodes/loader";
import { ImageUrl } from "../../../src/utiles/baseUrl";
import { messageAction } from "../../../src/redux/actionMethodes/message";
import { setCurrentBookingAM } from "../../../src/redux/actionMethodes/Currentbooking";
import { IReduxStore } from "../../../src/interfaces/data/reduxStore";
import { bookingStatus } from "../../../src/utiles/constants";
const Home: NextPage = () => {
  const intl = useIntl();
  const router = useRouter();

  const { language } = router.query;
  const Language = useSelector((x) => x.Language);
  const dispatch = useDispatch();
  const [_currentService, _setcurrentService] = React.useState(undefined);
  const [_item, _setcurrentServiced] = React.useState(undefined);
  const User=useSelector((x:IReduxStore)=>x.User)
  const _rcBooking=useSelector((x:IReduxStore)=>x.CurrentBooking)
  const [_selectedService, _setselectedService] = React.useState([]);
  React.useEffect(() => {
    if (router.query?.dataqurey) {
      //@ts-ignore
      _setcurrentService(
        parseInt(
          router.query?.dataqurey
            ?.replaceAll("-", " ")
            ?.toLowerCase()
            ?.split(" ")
            ?.pop()
        )
      );
    }
    //@ts-ignore
  }, [router.query]);
  React.useEffect(()=>{
     if(_item&&_rcBooking!=null&&_rcBooking?.serviceItemId ==_currentService)
    {
      _setselectedService(_rcBooking.bookingItems.map(x=>{
        return {
          pId:x?.ServiceItemServiceId,
          cId:x?.ServiceItemServicePriceId,
          price:x?.Price
        } 
      }))
    }
  },[_item,_rcBooking])
 
  React.useEffect(() => {
    if (_currentService != undefined) {
      try {
        (async () => {
          dispatch(loadingAction(true));
          const { data, status }: any = await repository
            .GetItemById("", _currentService)
            .then((x) => x);
          if (status == 200 && data?.success == true) {
            _setcurrentServiced(data?.data);
            console.log(data?.data);
            dispatch(loadingAction(false));
          } else {
            dispatch(loadingAction(false));
            router.back();
          }
        })();
      } catch (e) {
        dispatch(loadingAction(false));
        router.back();
      }
    }
  }, [_currentService]);

  return (
    <div>
      <div className=" ">
        <Topbar />
        <Navbar />
      </div>

      <section className="container mt-5 mb-5">
        <Heading center title={_item?.title} subtitle={_item?.description} />
      </section>

      <div className="container  mb-5">
        <div
          className="item-overlay"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgb(145 145 145 / 38%), rgb(171 171 171 / 10%)), url(${ImageUrl+_item?.image})`,
            // backgroundImage: `url('/bg5.jpg')`,
          }}
        >
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="mr-">
                <BsFillStarFill color="#f5b913" />
              </div>
              <div className="mx-1">
                <BsFillStarFill color="#f5b913" />
              </div>
              <div className="mx-1">
                <BsFillStarFill color="#f5b913" />
              </div>
              <div className="mx-1">
                <BsFillStarFill color="#f5b913" />
              </div>
              <div className="mx-1">
                <BsFillStarFill color="white" />
              </div>
            </div>
            <div></div>
          </div>
          <div className="d-flex justify-content-between flex-c">
            <div className="svc-card ">
              {_item?.serviceItemServices.map((x) => {
                return (
                  <div>
                    <p>{x?.serviceItemServiceTitle}</p>
                    <div>
                      {x?.serviceItemServicePrices.map((y) => {
                        return (
                          <button
                            onClick={() => {
                              let oldS = [
                                ..._selectedService.filter(
                                  (t) => t.pId != x?.id
                                ),
                              ];
                              oldS.push({
                                pId: x?.id,
                                cId: y?.id,
                                price: y?.serviceItemServiceValue,
                              });
                              _setselectedService([...oldS]);
                            }}
                            className={`btn btn-info ${
                              _selectedService.map((x) => x.cId).includes(y?.id)
                                ? "selected-btn"
                                : ""
                            }`}
                          >
                            {y.serviceItemServiceTitle} 
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="svc-card">
              <div>
                <p>
                  {intl.formatMessage({ id: "ac35" })}:{" "}
                  <strong>
                    {_selectedService
                      .map((x) => x?.price)
                      .reduce((a, b) => parseInt(a) + parseInt(b), 0)} AED
                  </strong>
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    if(_selectedService.length>0)
                    {
                      
                       dispatch(setCurrentBookingAM({
                        serviceItemId:_item?.id,
                        bookerId:User?.id,
                        bookingStatus:"Pending",
                        title:_item?.title,
                        bookingItems:_selectedService.map(b=>{
                          return {
                            BookingId:_item?.id,
                            ServiceItemServiceId:b?.pId,
                            ServiceItemServicePriceId:b?.cId,
                            Price:b?.price
                          }
                        })
                      }))
                     
                      
                      if(User!=null)
                      {
                        language != undefined
                      ? router.push("/" + Language + "/service/checkout")
                      : router.push("/en-AE/service/checkout");
                      }else
                      {
                        language != undefined
                        ? router.push("/" + Language + "/login")
                        : router.push("/en-AE/login");
                      }
                      
                    }
                    else
                    {
                      dispatch(messageAction({
                        type:3,
                        message:"Please select at least one service"
                      }))
                    }
                  }}
                >
                  {intl.formatMessage({ id: "ac62" })}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 faq">
          <h3>{intl.formatMessage({ id: "ac47" })}</h3>
          <div className="d-flex mt-4 jusify-content-between flex-c-sm">
            <div className="row">
              <div className="mt-2 col-md-6">
                <h5>What does this service include?</h5>
                <ul>
                  {_item?.faqServices.map((x) => {
                    return <li>{x?.serviceTitle}</li>;
                  })}
                </ul>
              </div>

              {_item?.faqQuestions?.map((x, i) => (
                <div className={`mt-2 ${i % 2 != 0 ? "col-md-6" : "col-md-4"}`}>
                  <h5>{x?.serviceFAQQuestion}</h5>
                  <p>{x?.serviceFAQAnswer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
