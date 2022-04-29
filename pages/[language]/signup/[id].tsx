import Head from "next/head";
import Image from "next/image";
import CategoryCard from "../../../src/components/cards/CategoryCard";
import EasyCard from "../../../src/components/cards/EasyCard";
import ServiceCard from "../../../src/components/cards/ServiceCard";
import Navbar from "../../../src/components/header/Navbar";
import Topbar from "../../../src/components/header/Topbar";
import Heading from "../../../src/components/headings/Heading";
import Footer from "../../../src/components/footer/Footer";
 import CategoryAccordian from "../../../src/components/generic/CategoryAccordian";
import ProductCard from "../../../src/components/cards/ProductCard";
import Searchbar from "../../../src/components/generic/Searchbar";
import { useEffect } from "react";
import { useIntl } from "react-intl";
import router, { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {Formik,Form} from 'formik'
import { DisplayingErrorMessagesLoginSchema, DisplayingErrorMessagesSignupSchema } from "../../../src/utiles/ErrorSchema";
import { ILogin } from "../../../src/interfaces/data/objects";
import { LoginUser, RegisterUser } from "../../../src/functions/User";
import Textbox from "../../../src/components/textbox";
import {wrapper } from '../../../src/redux/store';

export default () => {
  const intl = useIntl();
  const { language } = router.query;
  const disptach = useDispatch();
  const routerr = useRouter()

  const Language = useSelector((x) => x.Language);
  const PostData = async (values) => {
    //@ts-ignore
 disptach(RegisterUser(values,routerr))
};
  return (
    <div>
      <div className=" ">
        <Topbar />
        <Navbar />
      </div>
      <div className="signupscreen1">
        <section className="container-2">
          <div className="images-2">
            <img src="assets\images\gallery-2-removebg-preview.png" alt="" />
          </div>
          <div className="create">
            <div className="create-1">
             </div>

            <Formik
              initialValues={{
                userName: "",
                password: "",
                FullName:""
              }}
              validationSchema={DisplayingErrorMessagesSignupSchema}
              onSubmit={async (values, { setSubmitting }) => {
                await PostData(values);
              }}
            >
              {({ errors, touched, getFieldProps, handleSubmit }) => {
                return (
                  <div className="login-form">
                    <h3 className="text-center mb-2"><h3>{intl.formatMessage({ id: "ac72" })}</h3>
</h3>
                     
                    <Form className="pt-4">
                    <div className="d-flex flex-column pb-3 w-100">
                        <Textbox
                          label="Full Name"
                          getFieldProps={getFieldProps}
                          feildName="FullName"
                          touched={touched.FullName}
                          error={errors.FullName}
                          placeholder="Input your full name"
                          type="input"
                        />
                        
                      </div>
                      <div className="d-flex flex-column pb-3 w-100">
                        <Textbox
                          label="Email / Phone Number"
                          getFieldProps={getFieldProps}
                          feildName="userName"
                          touched={touched.userName}
                          error={errors.userName}
                          placeholder="Input Email / Phone Number"
                          type="input"
                        />

                      </div>
                      <div className="d-flex flex-column pb-3">
                        <Textbox
                          label="Password"
                          getFieldProps={getFieldProps}
                          feildName="password"
                          touched={touched.password}
                          error={errors.password}
                          placeholder="Input Password"
                          type="password"
                        />
                      </div>
                      <div className="d-flex jusity-content-end pb-4">
                        <div className="ml-auto">
                          {" "}
                          <a
                            href="#"
                            className="text-danger text-decoration-none"
                          >
                            Forgot password?
                          </a>{" "}
                        </div>
                      </div>{" "}
                    
                      <div className="text">
<p>
{intl.formatMessage({ id: "ac79" })}
</p>
<p>
{intl.formatMessage({ id: "ac80" })}
</p>
</div>
<p>
<input
                        type="submit"
                        defaultValue="Log in"
                        className="btn btn-primary btn-block mb-3 w-100"
                      />
{intl.formatMessage({ id: "ac82" })} <span id="blue"  style={{cursor:'pointer'}} onClick={()=>{
                                                language!=undefined? router.push("/"+Language+'/login'):router.push('/en-AE/login')

}}>{intl.formatMessage({ id: "ac83" })}</span>
</p>
                    </Form>
                  </div>
                );
              }}
            </Formik>

           
           
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};
function parseCookies(req){
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}
export const getServerSideProps = wrapper.getServerSideProps(store => ({req, res, ...etc}) => {
   const cookies = new Cookies(req, res)
   const Tokken= cookies.get('token') 
      if (Tokken&&Tokken!=null) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
 }
)


 