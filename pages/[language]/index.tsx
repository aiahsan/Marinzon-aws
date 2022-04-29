import type { NextPage } from "next";
import React from "react";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import CategoryCard from "../../src/components/cards/CategoryCard";
import EasyCard from "../../src/components/cards/EasyCard";
import ServiceCard from "../../src/components/cards/ServiceCard";
import Navbar from "../../src/components/header/Navbar";
import Topbar from "../../src/components/header/Topbar";
import Heading from "../../src/components/headings/Heading";
import Footer from "../../src/components/footer/Footer";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";

import styles from "../../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { GetServices } from "../../src/functions/Services";
import { IReduxStore } from "../../src/interfaces/data/reduxStore";
import { ImageUrl } from "../../src/utiles/baseUrl";

const Home: NextPage = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const services = useSelector((x: IReduxStore) => x.Services);
  React.useEffect(() => {
    //@ts-ignore
    dispatch(GetServices());
  }, []);

  React.useEffect(() => {}, [services]);

  return (
    <div>
      <div className=" ">
        <Topbar />
        <Navbar />

        <div className="row m-0 w-100 overlay-box top-inner-box">
          <div className="col-12 m-0 w-100 p-0">
            <div className="image-text-overlay text-middle-left text-white">
              <div className="container">
                <div className="inner-overlay-text">
                  <p>
                    <span className="overlay-title text-big">
                      {intl.formatMessage({ id: "en9" })}
                    </span>
                    <br></br>
                    <span className="overlay-title">
                      {intl.formatMessage({ id: "en10" })}
                    </span>
                    <br></br>
                    <span className="overlay-subtext">
                      {intl.formatMessage({ id: "en11" })}
                    </span>
                  </p>
                  <button className="btn btn-primary">
                    {intl.formatMessage({ id: "en12" })}
                  </button>
                </div>
              </div>
              <div className="overlay-black"></div>
            </div>
          </div>
        </div>
      </div>
      <section className="container">
        <Heading
          title={intl.formatMessage({ id: "ar1" })}
          subtitle={intl.formatMessage({ id: "ar2" })}
        />
        <div className="row m-0">
          <div className="d-flex top-loc-1 mt-5">
            <div className="w-100 mx-2">
              <CategoryCard
                title={intl.formatMessage({ id: "ar3" })}
                backgroundImage="bg.jpg"
              />
            </div>
            <div className="w-100 mx-2">
              <CategoryCard
                title={intl.formatMessage({ id: "ar4" })}
                backgroundImage="bg1.jpg"
              />
            </div>
          </div>
          <div className="d-flex top-loc-2">
            <div className="w-100 mx-2">
              <CategoryCard
                type="sm"
                title={intl.formatMessage({ id: "ar5" })}
                backgroundImage="bg3.jpg"
              />
            </div>
            <div className="w-100 mx-2">
              <CategoryCard
                type="sm"
                title={intl.formatMessage({ id: "ar6" })}
                backgroundImage="bg2.jpg"
              />
            </div>
            <div className="w-100 mx-2">
              <CategoryCard
                type="sm"
                title={intl.formatMessage({ id: "ar7" })}
                backgroundImage="bg5.jpg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="service-sec container mt-10">
        <Heading
          center
          title={intl.formatMessage({ id: "ar9" })}
          subtitle={intl.formatMessage({ id: "ar10" })}
        />
        <div className="row m-0 top-loc-2">
          {services.map((x) => (
            <div className="mb-3 mx-1">
              <ServiceCard bg="#e6e6e6" data={x} />
            </div>
          ))}
        </div>
      </section>
      <section className="container mt-10">
        <Heading
          title={intl.formatMessage({ id: "al1" })}
          subtitle={intl.formatMessage({ id: "al2" })}
        />
        <div className="row  buy-rent-sec">
          <div className="col-md-5">
            <img className="w-100 img-m1" src="2.jpg" />
          </div>
          <div className="col-md-7 d-flex align-items-center flex-column justify-content-center">
            <p>{intl.formatMessage({ id: "al3" })}</p>
            <button className="btn btn-primary">
              {intl.formatMessage({ id: "al4" })}
            </button>
          </div>
        </div>
      </section>
      <div className="bg-gr">
        <section className="container mt-5">
          <div className="row m-0">
            <div className="col-md-6">
              <Heading
                size="sm"
                title={intl.formatMessage({ id: "al5" })}
                subtitle={intl.formatMessage({ id: "al6" })}
              />
              <div className="row  buy-rent-sec  mt-3">
                <div className="col-md-12 d-flex align-items-center flex-column justify-content-center">
                  <p>{intl.formatMessage({ id: "al7" })}</p>
                  <button className="btn btn-primary">
                    {intl.formatMessage({ id: "al8" })}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <Heading
                size="sm"
                title={intl.formatMessage({ id: "al9" })}
                subtitle={intl.formatMessage({ id: "al10" })}
              />
              <div className="row buy-rent-sec mt-3">
                <div className="col-md-12 d-flex align-items-center flex-column justify-content-center">
                  <p>{intl.formatMessage({ id: "al11" })}</p>
                  <button className="btn btn-primary">
                    {intl.formatMessage({ id: "al12" })}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="container mt-5">
        <div className="row m-0">
          <div className="col-md-12">
            <Heading
              size="sm"
              center
              title={intl.formatMessage({ id: "al13" })}
              subtitle={intl.formatMessage({ id: "al14" })}
            />
            <div className="row  buy-rent-sec  mt-3">
              <div className="col-md-12 d-flex align-items-center flex-column justify-content-center">
                <p className="m-0 p-0">{intl.formatMessage({ id: "al15" })}</p>
                <p className="m-0 p-0">{intl.formatMessage({ id: "al16" })}</p>
              </div>
            </div>

            <div className="row m-0">
              <div className="col-md-4">
                <EasyCard
                  img="b1.svg"
                  title={intl.formatMessage({ id: "al17" })}
                  para={intl.formatMessage({ id: "al18" })}
                />
              </div>
              <div className="col-md-4">
                <EasyCard
                  img="b2.svg"
                  title={intl.formatMessage({ id: "al19" })}
                  para={intl.formatMessage({ id: "al20" })}
                />
              </div>
              <div className="col-md-4">
                <EasyCard
                  img="b3.svg"
                  title={intl.formatMessage({ id: "al21" })}
                  para={intl.formatMessage({ id: "al22" })}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mt-10">
        <div className="row m-0">
          <div className="col-md-8 app-sec buy-rent-sec">
            <Heading
              size="sm"
              title={intl.formatMessage({ id: "al23" })}
              subtitle={intl.formatMessage({ id: "al24" })}
            />
            <p className="m-0 p-0">{intl.formatMessage({ id: "al25" })}</p>

            <div className="row m-0"></div>
          </div>
          <div className="col-md-4">
            <img src="download-app-banner.png" className="w-100" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
