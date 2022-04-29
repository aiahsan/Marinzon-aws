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
import styles from "../styles/Home.module.css";
import CategoryAccordian from "../../../src/components/generic/CategoryAccordian";
import ProductCard from "../../../src/components/cards/ProductCard";
import Searchbar from "../../../src/components/generic/Searchbar";
import { useEffect } from "react";
import router, { useRouter } from "next/router";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { IReduxStore } from "../../../src/interfaces/data/reduxStore";
import {
  GetItemsByCategoryID,
  GetItemsByServiceID,
} from "../../../src/functions/Items";
import { GetServices } from "../../../src/functions/Services";

const Home: NextPage = () => {
  const intl = useIntl();
  const router = useRouter();
  const services = useSelector((x: IReduxStore) => x.Services);

  const dispatch = useDispatch();
  const [_filters, _setfilters] = React.useState({
    categoryId: undefined,
    serviceId: undefined,
  });

  React.useEffect(() => {
    if (router.query?.dataqurey) {
      //@ts-ignore
      _setfilters({
        ..._filters,
        categoryId: undefined,
        serviceId: parseInt(
          router.query?.dataqurey
            ?.replaceAll("-", " ")
            ?.toLowerCase()
            ?.split(" ")
            ?.pop()
        ),
      });
    }
    //@ts-ignore
    dispatch(GetServices());
  }, [router.query]);
  React.useEffect(() => {
    if (_filters.categoryId != undefined) {
      //@ts-ignore
      dispatch(GetItemsByCategoryID(_filters.categoryId));
    } else if (_filters.serviceId != undefined) {
      //@ts-ignore
      dispatch(GetItemsByServiceID(_filters.serviceId));
    }
  }, [_filters]);
  return (
    <div>
      <div className=" ">
        <Topbar />
        <Navbar />
      </div>

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

      <div className="container d-flex mt-10 justify-content-center">
        <Searchbar />
      </div>
      <div className="container  mb-5">
        <div className="row mt-5">
          <div className="col-md-3 mt-5 rd-brd">
            <CategoryAccordian _filters={_filters} _setfilters={_setfilters} />
          </div>
          <div className="col-md-9 mt-5 rd-brd">
            <ProductCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
