import React, { useEffect } from "react";
import { wrapper } from "../src/redux/store";
import { useRef } from "react";
import "../styles/style.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import messages from "../src/language";
import { IntlProvider } from "react-intl";
import { useDispatch, useSelector, useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import router from "next/router";
import { changeLanguage } from "../src/redux/actionMethodes/user/idnex";
import { IReduxStore } from "../src/interfaces/data/reduxStore";
import { messageAction } from "../src/redux/actionMethodes/message";
import Loader from "../src/components/loader";
import Toast from "../src/components/toast";

const App = ({ Component, pageProps }) => {
   const { language } = router.query;
   const Loading = useSelector((x: IReduxStore) => x.Loading);
   const Message = useSelector((x: IReduxStore) => x.Message);
  const Language = useSelector((x) => x.Language);
  const dispatch = useDispatch();
  React.useEffect(()=>{
    if(Message!=null)
    {
      setTimeout(() => {
        dispatch(messageAction());
      }, 3000);
    }
  },[Message])
  useEffect(() => {
    if (language == "en-AE") {
      document.querySelector("body").classList.add("en");
      document.querySelector("body").classList.remove("ar");
      dispatch(changeLanguage("en-AE"));
    } else if (language == "ar-AE") {
      document.querySelector("body").classList.add("ar");
      document.querySelector("body").classList.remove("en");
      dispatch(changeLanguage("ar-AE"));
    } else {
      if (Language == "en-AE") {
        document.querySelector("body").classList.add("en");
        document.querySelector("body").classList.remove("ar");
      } else if (Language == "ar-AE") {
        document.querySelector("body").classList.add("ar");
        document.querySelector("body").classList.remove("en");
      }
    }
  }, [language]);
  return (
    <IntlProvider locale={ Language==undefined || Language=="en-AE"?"en":"ar"} messages={messages[Language==undefined || Language=="en-AE"?"en":"ar"]}>
      <Component {...pageProps} />
       {Loading === true ? <Loader /> : <></>}
       
       {Message != null ? <Toast message={Message} /> : <></>}
    </IntlProvider>
  );
};
export default wrapper.withRedux(({ Component, pageProps }) => {
  const store = useStore();
  const ref = useRef();
  return (
    <PersistGate
      ref={ref}
      persistor={store.__persistor}
      loading={<div>Loading</div>}
    >
      <App Component={Component} pageProps={pageProps} />
    </PersistGate>
  );
});
